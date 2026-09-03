# BharatVirasat 🏛️ 
**An AI-Powered Journey Through Indian Heritage**

---

## 🎯 What's This Project About?

Ever wanted to explore India's most iconic heritage sites without leaving your couch? Meet BharatVirasat—a modern web app that brings UNESCO World Heritage Sites to life with AI, voice chat, and multi-language support.

**Talk to our AI about Indian culture. In any language. With voice.** 🎤

---

## ⚡ Features

| Feature | What It Does |
|---------|-------------|
| 🤖 **Gemini AI Chatbot** | Ask anything about Indian heritage & culture |
| 🎤 **Voice In & Out** | Speak to the bot, hear responses (supports Indian English) |
| 🌍 **100+ Languages** | Google Translate built-in |
| 📸 **Beautiful Images** | High-res photos of heritage sites |
| 📱 **Responsive** | Phone, tablet, desktop—all good |
| ⚙️ **Zero Setup** | Just open in browser & go |

---

## 🚀 Let's Go

### Fastest Way to Start

```bash
# Option 1: Just open the file
open index.html

# Option 2: Run a local server
python -m http.server 8000
# Visit http://localhost:8000
```

### What You'll See
1. Landing page → Heritage sites gallery
2. Beautiful images + descriptions
3. Chatbot in the corner → Click it
4. Ask about any heritage site
5. Listen to AI explain (voice!)

---

## 📁 What's Inside

```
.
├── index.html          👈 Start here
├── welcome.html        Welcome page
├── css/styles.css      Looks pretty
├── js/app.js           Makes it work
├── js/data.js          Heritage data
├── js/gemini-bot.js    AI chatbot magic
└── images/             Heritage pics
```

---

## 🔌 Setting Up APIs

### Gemini AI (For the Chatbot)

1. Get API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Open `js/gemini-bot.js`
3. Add your key:
   ```javascript
   const GEMINI_API_KEY = "your_key_here";
   ```

### Google Translate
Already baked in! Just works. 🌐

---

## 📦 Deployment

### Deploy to Netlify (Super Easy)

**Option A: Drag & Drop**
1. Go to [Netlify](https://netlify.com)
2. Drag your folder onto the deploy zone
3. Done! ✅

**Option B: CLI**
```bash
npm install -g netlify-cli
netlify deploy
```

**Option C: GitHub Auto-Deploy**
1. Push to GitHub
2. Connect repo to Netlify
3. Auto-deploys on every push

---

## 💻 Tech Stack

```
Frontend:    HTML5 + CSS3 + Vanilla JavaScript
AI:          Google Gemini 2.0 Flash
Speech:      Web Speech API (built-in browser)
Translation: Google Translate API
Hosting:     Netlify
```

---

## 🎮 How to Use

### Browse Heritage
- Scroll through sites
- Click for more info
- Check out the images

### Chat with AI
1. Click the chatbot icon 💬
2. Type your question (e.g., "Tell me about Taj Mahal")
3. Click send or press Enter
4. Read or listen to the response

### Use Your Voice
1. Click the mic icon 🎤
2. Speak clearly (English works best)
3. AI responds instantly
4. Hear it with text-to-speech

### Change Language
- Click language buttons at top
- Or use Google Translate dropdown

---

## 🛡️ Security

✅ Content Security Policy (CSP)  
✅ XSS Protection  
✅ Safe Permissions (Microphone only when needed)  
✅ Secure Headers  

---

## 🌐 Browsers That Work

| Browser | Min Version |
|---------|------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Mobile | All modern |

---

## 📸 Screenshots

(Open `index.html` to see!)

---

## 🐛 Troubleshooting

**Chatbot not responding?**
- Check Gemini API key is valid
- Check internet connection

**Voice not working?**
- Chrome/Edge works best for voice
- Check microphone permissions

**Google Translate not showing?**
- Needs internet connection
- Some regions may have restrictions

---

## 🤝 Wanna Help?

1. Fork the repo
2. Create a branch: `git checkout -b my-feature`
3. Make changes
4. Push: `git push origin my-feature`
5. Open a Pull Request

---

## 📜 License

MIT - Use it however you want!

---

## 🎓 Cool Resources

- [Gemini API Docs](https://ai.google.dev)
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- [Netlify Docs](https://docs.netlify.com)

---

## 👏 Credits

- **Google** for Gemini AI & Translate
- **UNESCO** for heritage data
- **You** for checking this out! 🙌

---

### 🏛️ BharatVirasat - Celebrating Indian Heritage Through Tech ❤️🇮🇳

Made with love during a hackathon. Preserving culture, one chat at a time.

---

**Questions?** Open an issue or hit us up! 💬
