/**
 * BHARAT VIRASAT - Main Application Logic
 * Integrates: Filtering, Google Translate, Modals, Audio Narration & Heritage Quiz
 */

let currentFilter = {
  category: 'all',
  zone: 'all',
  searchQuery: ''
};

let currentAudioUtterance = null;
let isAudioPlaying = false;
let bookmarkedSiteIds = JSON.parse(localStorage.getItem('bharat_bookmarks') || '[]');
let currentSelectedSite = null;

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  geminiBot = new GeminiCulturalSage();
  renderCategoryFilter();
  renderZoneFilter();
  renderHeritageSites();
  renderQuiz();
  setupEventListeners();
  setupGoogleTranslateUI();
});

/* ==========================================================================
   RENDER FUNCTIONS
   ========================================================================== */

function renderCategoryFilter() {
  const container = document.getElementById('category-filter-bar');
  if (!container) return;

  container.innerHTML = HERITAGE_CATEGORIES.map(cat => `
    <button class="category-pill ${cat.id === currentFilter.category ? 'active' : ''}" 
            onclick="setCategoryFilter('${cat.id}')">
      <span class="cat-icon">${cat.icon}</span>
      <span class="cat-label">${cat.label}</span>
    </button>
  `).join('');
}

function renderZoneFilter() {
  const container = document.getElementById('zone-filter-bar');
  if (!container) return;

  container.innerHTML = HERITAGE_ZONES.map(z => `
    <button class="zone-pill ${z.id === currentFilter.zone ? 'active' : ''}" 
            onclick="setZoneFilter('${z.id}')">
      ${z.label}
    </button>
  `).join('');
}

function getFilteredSites() {
  return HERITAGE_SITES.filter(site => {
    // Category filter
    if (currentFilter.category !== 'all' && site.category !== currentFilter.category) {
      return false;
    }
    // Zone filter
    if (currentFilter.zone !== 'all' && site.zone !== currentFilter.zone) {
      return false;
    }
    // Search query filter
    if (currentFilter.searchQuery) {
      const q = currentFilter.searchQuery.toLowerCase();
      const match = site.name.toLowerCase().includes(q) ||
                    site.hindiName.toLowerCase().includes(q) ||
                    site.location.toLowerCase().includes(q) ||
                    site.state.toLowerCase().includes(q) ||
                    site.builtBy.toLowerCase().includes(q) ||
                    site.tags.some(t => t.toLowerCase().includes(q));
      if (!match) return false;
    }
    return true;
  });
}

function renderHeritageSites() {
  const grid = document.getElementById('heritage-grid');
  const countEl = document.getElementById('sites-count-badge');
  if (!grid) return;

  const sites = getFilteredSites();

  if (countEl) {
    countEl.innerText = `Showing ${sites.length} of ${HERITAGE_SITES.length} Heritage Marvels`;
  }

  if (sites.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>No Heritage Sites Match Your Search</h3>
        <p>Try clearing filters or search for another monument like "Taj Mahal", "Hampi", or "Sun Temple".</p>
        <button class="primary-btn" onclick="resetAllFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = sites.map(site => {
    const isBookmarked = bookmarkedSiteIds.includes(site.id);
    return `
      <article class="heritage-card" data-site-id="${site.id}">
        <div class="card-image-wrapper">
          <img src="${site.coverImage}" alt="${site.name}" loading="lazy" referrerpolicy="no-referrer" class="card-img" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80'">
          <div class="card-gradient-overlay"></div>
          
          <div class="card-top-badges">
            <span class="zone-badge ${site.zone.toLowerCase()}">${site.zone} India</span>
            <button class="bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" 
                    title="${isBookmarked ? 'Remove Bookmark' : 'Bookmark Site'}"
                    onclick="toggleBookmark('${site.id}', event)">
              ${isBookmarked ? '❤️' : '🤍'}
            </button>
          </div>

          <div class="card-rating-badge">
            ⭐ ${site.rating} <span class="rating-sub">(${formatNumber(site.reviewsCount)})</span>
          </div>
        </div>

        <div class="card-body">
          <div class="card-header">
            <div class="card-title-group">
              <h3 class="site-name">${site.name}</h3>
              <span class="site-hindi-name">${site.hindiName}</span>
            </div>
          </div>

          <div class="site-meta-pills">
            <span class="meta-pill"><i class="icon">📍</i> ${site.location}</span>
            <span class="meta-pill"><i class="icon">👑</i> ${site.era}</span>
          </div>

          <!-- Crisp Concise Summary -->
          <div class="site-summary-box">
            <p class="site-summary-text">${site.shortSummary}</p>
          </div>

          <!-- Key Quick Fact -->
          <div class="site-fast-fact">
            <span class="fact-tag">💡 Key Marvel</span>
            <p class="fact-text">${site.fastFacts[0]}</p>
          </div>

          <div class="card-actions">
            <button class="action-btn audio-listen-btn" onclick="playSiteAudio('${site.id}', event)" title="Listen to Audio Guide">
              🎧 Audio Guide
            </button>
            <button class="action-btn details-btn" onclick="openSiteModal('${site.id}')">
              Explore Details & 360° ➔
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ==========================================================================
   FILTERS & SEARCH
   ========================================================================== */

function setCategoryFilter(categoryId) {
  currentFilter.category = categoryId;
  renderCategoryFilter();
  renderHeritageSites();
}

function setZoneFilter(zoneId) {
  currentFilter.zone = zoneId;
  renderZoneFilter();
  renderHeritageSites();
}

function handleSearch(event) {
  currentFilter.searchQuery = event.target.value;
  renderHeritageSites();
}

function resetAllFilters() {
  currentFilter = { category: 'all', zone: 'all', searchQuery: '' };
  const searchInput = document.getElementById('main-search-input');
  if (searchInput) searchInput.value = '';
  renderCategoryFilter();
  renderZoneFilter();
  renderHeritageSites();
}

function toggleBookmark(siteId, event) {
  if (event) event.stopPropagation();
  const index = bookmarkedSiteIds.indexOf(siteId);
  if (index > -1) {
    bookmarkedSiteIds.splice(index, 1);
    showToast("Site removed from your favorites");
  } else {
    bookmarkedSiteIds.push(siteId);
    showToast("❤️ Saved to your heritage bookmarks!");
  }
  localStorage.setItem('bharat_bookmarks', JSON.stringify(bookmarkedSiteIds));
  renderHeritageSites();
}

/* ==========================================================================
   GOOGLE TRANSLATOR INTEGRATION & CUSTOM LANGUAGE BUTTONS (FIXED)
   ========================================================================== */

let currentLanguage = 'en';

function setupGoogleTranslateUI() {
  // Initialize Google Translate with proper callback
  window.googleTranslateElementInit = function() {
    if (typeof google !== 'undefined' && google.translate) {
      new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'hi,ta,te,bn,mr,gu,kn,ml,pa,or,ur,sa,es,fr,de,ja,ru,ar,pt,it',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
      }, 'google_translate_element');
    }
  };
  
  // Force initialization if Google Translate is already loaded
  if (typeof google !== 'undefined' && google.translate) {
    setupGoogleTranslateUI();
  }
}

function triggerLanguageChange(langCode) {
  currentLanguage = langCode;
  
  // First, try to use the Google Translate dropdown directly
  const select = document.querySelector('.goog-te-combo');
  if (select) {
    try {
      select.value = langCode;
      select.dispatchEvent(new Event('change', { bubbles: true }));
      showToast(`🌐 Translating to ${getLanguageName(langCode)}...`);
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === langCode);
      });
      
      // Scroll to top to show translation happening
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 500);
      return;
    } catch (error) {
      console.warn('Google Translate dropdown failed, trying alternative method:', error);
    }
  }
  
  // Alternative: Use Google Translate HTTP API via proxy
  if (langCode !== 'en') {
    useAlternativeTranslation(langCode);
  } else {
    // Return to English - reload page
    window.location.reload();
  }
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === langCode);
  });
}

function useAlternativeTranslation(targetLang) {
  showToast(`🌐 Loading ${getLanguageName(targetLang)} translation...`);
  
  // Create a frame with Google Translate applied
  const currentUrl = window.location.href;
  const translatorUrl = `https://translate.google.com/translate?sl=en&tl=${targetLang}&u=${encodeURIComponent(currentUrl)}&client=gtx`;
  
  // Try to fetch and inject translated content
  fetch(`https://translate.googleapis.com/translate_a/element.js?cb=googleTranslateElementInit`)
    .then(() => {
      // Force the select to change
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = targetLang;
        select.dispatchEvent(new Event('change', { bubbles: true }));
      } else {
        // Fallback: open in new tab
        window.open(translatorUrl, '_blank');
      }
    })
    .catch(() => {
      showToast(`Using Google Translate service...`);
      // Final fallback
      const translateWindow = window.open(translatorUrl, 'googleTranslate', 'width=1200,height=800');
      if (!translateWindow) {
        showToast('Please disable popup blockers to use translation feature');
      }
    });
}

function getLanguageName(code) {
  const map = {
    'hi': 'Hindi (हिन्दी)',
    'ta': 'Tamil (தமிழ்)',
    'te': 'Telugu (తెలుగు)',
    'bn': 'Bengali (বাংলা)',
    'mr': 'Marathi (मराठी)',
    'gu': 'Gujarati (ગુજરાતી)',
    'kn': 'Kannada (ಕನ್ನಡ)',
    'ml': 'Malayalam (മലയാളം)',
    'pa': 'Punjabi (ਪੰਜਾਬੀ)',
    'es': 'Spanish (Español)',
    'fr': 'French (Français)',
    'de': 'German (Deutsch)',
    'ja': 'Japanese (日本語)',
    'en': 'English'
  };
  return map[code] || code.toUpperCase();
}

/* ==========================================================================
   AUDIO GUIDE & TEXT-TO-SPEECH
   ========================================================================== */

function playSiteAudio(siteId, event) {
  if (event) event.stopPropagation();
  const site = HERITAGE_SITES.find(s => s.id === siteId);
  if (!site) return;

  const audioWidget = document.getElementById('floating-audio-bar');
  const titleEl = document.getElementById('audio-bar-title');
  const playBtn = document.getElementById('audio-bar-play-btn');

  if (titleEl) titleEl.innerText = `${site.name} • Official Audio Narration`;
  if (audioWidget) audioWidget.classList.add('visible');

  if (!('speechSynthesis' in window)) {
    showToast("Text-to-speech not supported in your browser.");
    return;
  }

  window.speechSynthesis.cancel();

  const textToRead = `${site.name}. ${site.hindiName}. Located in ${site.location}. ${site.shortSummary}. ${site.audioNarration}`;
  currentAudioUtterance = new SpeechSynthesisUtterance(textToRead);
  currentAudioUtterance.rate = 0.95;
  currentAudioUtterance.pitch = 1.0;

  currentAudioUtterance.onstart = () => {
    isAudioPlaying = true;
    if (playBtn) playBtn.innerHTML = '⏸️';
    document.querySelectorAll('.wave-bar').forEach(b => b.classList.add('animating'));
  };

  currentAudioUtterance.onend = () => {
    isAudioPlaying = false;
    if (playBtn) playBtn.innerHTML = '▶️';
    document.querySelectorAll('.wave-bar').forEach(b => b.classList.remove('animating'));
  };

  currentAudioUtterance.onerror = () => {
    isAudioPlaying = false;
    if (playBtn) playBtn.innerHTML = '▶️';
  };

  window.speechSynthesis.speak(currentAudioUtterance);
}

function toggleAudioPlayback() {
  if (!window.speechSynthesis) return;
  const playBtn = document.getElementById('audio-bar-play-btn');

  if (window.speechSynthesis.speaking) {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      isAudioPlaying = true;
      if (playBtn) playBtn.innerHTML = '⏸️';
      document.querySelectorAll('.wave-bar').forEach(b => b.classList.add('animating'));
    } else {
      window.speechSynthesis.pause();
      isAudioPlaying = false;
      if (playBtn) playBtn.innerHTML = '▶️';
      document.querySelectorAll('.wave-bar').forEach(b => b.classList.remove('animating'));
    }
  } else if (currentSelectedSite) {
    playSiteAudio(currentSelectedSite.id);
  }
}

function closeAudioBar() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  isAudioPlaying = false;
  const audioWidget = document.getElementById('floating-audio-bar');
  if (audioWidget) audioWidget.classList.remove('visible');
}

/* ==========================================================================
   SITE DETAILS MODAL & 360 VIRTUAL PREVIEW
   ========================================================================== */

function openSiteModal(siteId) {
  const site = HERITAGE_SITES.find(s => s.id === siteId);
  if (!site) return;

  currentSelectedSite = site;
  const modal = document.getElementById('site-modal');
  const backdrop = document.getElementById('modal-backdrop');
  if (!modal || !backdrop) return;

  document.getElementById('modal-site-title').innerText = site.name;
  document.getElementById('modal-site-subtitle').innerText = `${site.hindiName} • ${site.location}`;
  document.getElementById('modal-unesco-badge').innerText = site.unescoStatus;

  // Main Image and Gallery
  const galleryContainer = document.getElementById('modal-gallery-container');
  if (galleryContainer) {
    galleryContainer.innerHTML = `
      <div class="modal-featured-img-wrap">
        <img id="modal-main-img" src="${site.coverImage}" alt="${site.name}" referrerpolicy="no-referrer" class="modal-featured-img" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80'">
        <button class="vr-btn" onclick="start360Simulation('${site.id}')">🔄 360° Virtual Tour Simulation</button>
      </div>
      <div class="modal-thumbnails">
        <img src="${site.coverImage}" referrerpolicy="no-referrer" class="modal-thumb active" onclick="switchModalImage('${site.coverImage}', this)" onerror="this.style.display='none'">
        ${site.gallery.map(img => `
          <img src="${img}" referrerpolicy="no-referrer" class="modal-thumb" onclick="switchModalImage('${img}', this)" onerror="this.style.display='none'">
        `).join('')}
      </div>
    `;
  }

  // Summary and Audio Guide
  document.getElementById('modal-short-summary').innerText = site.shortSummary;
  document.getElementById('modal-deep-narration').innerText = site.audioNarration;

  // Key Facts
  const factsList = document.getElementById('modal-facts-list');
  if (factsList) {
    factsList.innerHTML = site.fastFacts.map(fact => `
      <li class="modal-fact-item">
        <span class="fact-bullet">✨</span>
        <span>${fact}</span>
      </li>
    `).join('');
  }

  // Specifications Grid
  document.getElementById('spec-built-by').innerText = site.builtBy;
  document.getElementById('spec-year').innerText = site.yearBuilt;
  document.getElementById('spec-style').innerText = site.architecturalStyle;
  document.getElementById('spec-hours').innerText = site.visitingHours;
  document.getElementById('spec-ticket').innerText = site.ticketPrice;
  document.getElementById('spec-best-time').innerText = site.bestTimeToVisit;

  // Ask Gemini CTA button
  const geminiBtn = document.getElementById('modal-ask-gemini-btn');
  if (geminiBtn) {
    geminiBtn.onclick = () => {
      closeSiteModal();
      geminiBot.askDirectly(`Tell me intriguing architectural secrets and visiting tips for ${site.name}`);
    };
  }

  modal.classList.add('active');
  backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function switchModalImage(imgSrc, thumbEl) {
  const mainImg = document.getElementById('modal-main-img');
  if (mainImg) mainImg.src = imgSrc;
  document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
  if (thumbEl) thumbEl.classList.add('active');
}

function closeSiteModal() {
  const modal = document.getElementById('site-modal');
  const backdrop = document.getElementById('modal-backdrop');
  if (modal) modal.classList.remove('active');
  if (backdrop) backdrop.classList.remove('active');
  document.body.style.overflow = '';
}

function start360Simulation(siteId) {
  const site = HERITAGE_SITES.find(s => s.id === siteId);
  if (!site) return;

  const mainImg = document.getElementById('modal-main-img');
  if (!mainImg) return;

  showToast("🔄 Simulating 360° Panoramic Pan across " + site.name);
  mainImg.classList.add('panoramic-360-active');
  setTimeout(() => {
    mainImg.classList.remove('panoramic-360-active');
  }, 7000);
}

/* ==========================================================================
   INTERACTIVE HERITAGE QUIZ
   ========================================================================== */

let currentQuizIndex = 0;
let quizScore = 0;

function renderQuiz() {
  const container = document.getElementById('quiz-widget-container');
  if (!container) return;

  if (currentQuizIndex >= QUIZ_QUESTIONS.length) {
    container.innerHTML = `
      <div class="quiz-completed-box">
        <div class="quiz-trophy">🏆</div>
        <h3>Heritage Scholar Certificate Earned!</h3>
        <p class="quiz-score-highlight">You scored <strong>${quizScore}</strong> out of <strong>${QUIZ_QUESTIONS.length}</strong>!</p>
        <p class="quiz-praise">
          ${quizScore === QUIZ_QUESTIONS.length ? '🌟 Exceptional mastery of Indian heritage & monuments!' : 'Great effort! Explore more monuments above to sharpen your knowledge.'}
        </p>
        <button class="primary-btn" onclick="restartQuiz()">🔄 Retake Heritage Quiz</button>
      </div>
    `;
    return;
  }

  const q = QUIZ_QUESTIONS[currentQuizIndex];
  container.innerHTML = `
    <div class="quiz-question-box">
      <div class="quiz-header">
        <span class="quiz-badge">Question ${currentQuizIndex + 1} of ${QUIZ_QUESTIONS.length}</span>
        <span class="quiz-current-score">Score: ${quizScore}</span>
      </div>
      <h4 class="quiz-question-title">${q.question}</h4>
      <div class="quiz-options-list">
        ${q.options.map((opt, idx) => `
          <button class="quiz-opt-btn" onclick="checkQuizAnswer(${idx})">
            <span class="opt-letter">${String.fromCharCode(65 + idx)}</span>
            <span class="opt-text">${opt}</span>
          </button>
        `).join('')}
      </div>
      <div id="quiz-feedback-box" class="quiz-feedback-box" style="display:none;"></div>
    </div>
  `;
}

function checkQuizAnswer(selectedIndex) {
  const q = QUIZ_QUESTIONS[currentQuizIndex];
  const feedbackBox = document.getElementById('quiz-feedback-box');
  const buttons = document.querySelectorAll('.quiz-opt-btn');

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answerIndex) {
      btn.classList.add('correct');
    } else if (idx === selectedIndex) {
      btn.classList.add('wrong');
    }
  });

  const isCorrect = selectedIndex === q.answerIndex;
  if (isCorrect) quizScore++;

  if (feedbackBox) {
    feedbackBox.style.display = 'block';
    feedbackBox.className = `quiz-feedback-box ${isCorrect ? 'correct' : 'wrong'}`;
    feedbackBox.innerHTML = `
      <div class="feedback-icon">${isCorrect ? '✅ Brilliant!' : '❌ Incorrect'}</div>
      <p class="feedback-explanation">${q.explanation}</p>
      <button class="next-question-btn" onclick="nextQuizQuestion()">Next Question ➔</button>
    `;
  }
}

function nextQuizQuestion() {
  currentQuizIndex++;
  renderQuiz();
}

function restartQuiz() {
  currentQuizIndex = 0;
  quizScore = 0;
  renderQuiz();
}

/* ==========================================================================
   EVENT LISTENERS & UTILITIES
   ========================================================================== */

function setupEventListeners() {
  // Search input
  const searchInput = document.getElementById('main-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
  }

  // Gemini Chat Enter key
  const chatInput = document.getElementById('gemini-chat-input');
  if (chatInput) {
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        geminiBot.handleSendMessage();
      }
    });
  }

  // Keyboard Escape to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSiteModal();
      closeGeminiDrawer();
    }
  });
}

function showToast(message) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'app-toast';
    document.body.appendChild(toast);
  }
  toast.innerText = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return num;
}
