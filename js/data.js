/**
 * BHARAT VIRASAT - Indian Heritage & Cultural Sites Database
 * Curated for Smart India Hackathon (SIH) & UNESCO Heritage Portal
 */

const HERITAGE_SITES = [
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    hindiName: "ताज महल",
    location: "Agra, Uttar Pradesh",
    state: "Uttar Pradesh",
    zone: "North",
    category: "Monuments",
    era: "Mughal (17th Century)",
    yearBuilt: "1631–1648 CE",
    builtBy: "Emperor Shah Jahan",
    architecturalStyle: "Indo-Islamic & Mughal Architecture",
    unescoStatus: "UNESCO World Heritage Site (1983)",
    rating: 4.9,
    reviewsCount: 145000,
    coverImage: "images/taj-mahal.jpg",
    gallery: [
      "images/taj-mahal.jpg",
      "images/taj-mahal.jpg"
    ],
    shortSummary: "An ivory-white marble mausoleum on the right bank of river Yamuna, celebrated globally as the jewel of Muslim art in India and a universally admired masterpiece of love and symmetry.",
    fastFacts: [
      "Built using pure white Makrana marble from Rajasthan inlaid with 28 types of precious stones (Pietra Dura).",
      "The four minarets are tilted slightly outwards to protect the central dome in case of an earthquake.",
      "Changes its hue throughout the day: pinkish in morning, milky white in evening, and golden under moonlight."
    ],
    audioNarration: "The Taj Mahal, commissioned by Mughal Emperor Shah Jahan in 1631 in memory of his beloved wife Mumtaz Mahal, stands as an eternal symbol of love. Its perfect symmetrical design, reflective pools, and intricate marble inlay work represent the zenith of Indo-Islamic architectural brilliance.",
    bestTimeToVisit: "October to March (Sunrise or Sunset)",
    visitingHours: "Sunrise to Sunset (Closed on Fridays)",
    ticketPrice: "₹50 (Indians), ₹1100 (Foreign Tourists)",
    tags: ["UNESCO", "Wonder of the World", "Mughal", "Marble", "Symmetry"]
  },
  {
    id: "hampi-monuments",
    name: "Group of Monuments at Hampi",
    hindiName: "हम्पी के स्मारक",
    location: "Vijayanagara, Karnataka",
    state: "Karnataka",
    zone: "South",
    category: "Monuments",
    era: "Vijayanagara Empire (14th–16th Century)",
    yearBuilt: "1336–1565 CE",
    builtBy: "Harihara I, Bukka Raya I & King Krishnadevaraya",
    architecturalStyle: "Dravidian & Vijayanagara Architecture",
    unescoStatus: "UNESCO World Heritage Site (1986)",
    rating: 4.8,
    reviewsCount: 42000,
    coverImage: "images/hampi.jpg",
    gallery: [
      "images/hampi.jpg",
      "images/hampi.jpg"
    ],
    shortSummary: "The spectacular ruins of the capital of the Vijayanagara Empire, set amidst boulder-strewn hills along the Tungabhadra River, renowned for monolithic stone chariots and musical pillars.",
    fastFacts: [
      "The Vittala Temple's iconic Stone Chariot is featured on the Indian ₹50 banknote.",
      "The pillars in the Vittala temple's Ranga Mantapa emit distinct musical notes when gently tapped (Sa-Re-Ga-Ma).",
      "In the 15th century, Hampi was the world's second-largest medieval city after Beijing."
    ],
    audioNarration: "Hampi was the prosperous capital of the mighty Vijayanagara Empire. Spanning over 4,100 hectares, it hosts more than 1,600 surviving monuments, including the Virupaksha Temple, royal enclosures, and the world-famous Stone Chariot.",
    bestTimeToVisit: "November to February (Hampi Utsav in November)",
    visitingHours: "6:00 AM to 6:00 PM Daily",
    ticketPrice: "₹40 (Indians), ₹600 (Foreigners)",
    tags: ["UNESCO", "Vijayanagara", "Stone Chariot", "Musical Pillars", "Ancient City"]
  },
  {
    id: "konark-sun-temple",
    name: "Sun Temple, Konark",
    hindiName: "कोणार्क सूर्य मंदिर",
    location: "Puri District, Odisha",
    state: "Odisha",
    zone: "East",
    category: "Temples & Sacred",
    era: "Eastern Ganga Dynasty (13th Century)",
    yearBuilt: "1250 CE",
    builtBy: "King Narasimhadeva I",
    architecturalStyle: "Kalinga Architectural Style",
    unescoStatus: "UNESCO World Heritage Site (1984)",
    rating: 4.8,
    reviewsCount: 38000,
    coverImage: "images/konark.jpg",
    gallery: [
      "images/konark.jpg",
      "images/konark.jpg"
    ],
    shortSummary: "A colossal 13th-century chariot of the Sun God Surya carved from stone, featuring 24 intricately sculpted wheels that function as precise astronomical sundials pulled by 7 spirited horses.",
    fastFacts: [
      "The 24 wheels of the chariot act as exact sundials, calculating time down to minutes using the shadow of the spokes.",
      "Known as the 'Black Pagoda' by European sailors because its dark tower served as a magnetic navigational landmark.",
      "The 7 horses symbolize the seven days of the week and the seven colors of the visible light spectrum."
    ],
    audioNarration: "The Sun Temple at Konark represents the pinnacle of Kalinga architecture. Conceived as a gigantic celestial chariot for Surya the Sun God, its 24 wheels and energetic stone horses demonstrate extraordinary mastery of astronomy and sculpting.",
    bestTimeToVisit: "September to March (Konark Dance Festival in December)",
    visitingHours: "6:00 AM to 8:00 PM Daily",
    ticketPrice: "₹40 (Indians), ₹600 (Foreigners)",
    tags: ["UNESCO", "Kalinga", "Sundial", "Sun God", "Astronomy"]
  },
  {
    id: "ajanta-ellora-caves",
    name: "Ajanta & Ellora Caves",
    hindiName: "अजंता और एलोरा की गुफाएं",
    location: "Chhatrapati Sambhajinagar, Maharashtra",
    state: "Maharashtra",
    zone: "West",
    category: "Caves & Rock-Cut",
    era: "2nd Century BCE – 10th Century CE",
    yearBuilt: "200 BCE – 1000 CE",
    builtBy: "Satavahana, Vakataka & Rashtrakuta Dynasties",
    architecturalStyle: "Ancient Indian Rock-Cut Architecture",
    unescoStatus: "UNESCO World Heritage Site (1983)",
    rating: 4.9,
    reviewsCount: 56000,
    coverImage: "images/ajanta-ellora%20cave.jpg",
    gallery: [
      "images/ajanta-ellora%20cave.jpg",
      "images/ajanta-ellora%20cave.jpg"
    ],
    shortSummary: "Rock-hewn sanctuaries of extraordinary artistic achievement, featuring Ajanta's masterly Buddhist fresco murals and Ellora's Kailasa Temple—the world's largest monolithic structure carved top-down from a single cliff.",
    fastFacts: [
      "Cave 16 (Kailash Temple) was excavated vertically from the top down, removing over 200,000 tonnes of basalt rock with simple chisels.",
      "Ajanta contains 30 Buddhist caves with tempera murals that have survived over 2,000 years with radiant natural pigments.",
      "Ellora harmoniously unites 34 caves representing Buddhism, Hinduism, and Jainism side by side."
    ],
    audioNarration: "The Ajanta and Ellora caves in Maharashtra stand as triumphs of ancient engineering and art. Ajanta's caves preserve the finest surviving classical Indian Buddhist paintings, while Ellora's monolithic Kailasa Temple was carved entirely out of a single mountain cliff from top to bottom.",
    bestTimeToVisit: "June to March (Ajanta closed Mondays, Ellora closed Tuesdays)",
    visitingHours: "9:00 AM to 5:30 PM",
    ticketPrice: "₹40 (Indians), ₹600 (Foreigners)",
    tags: ["UNESCO", "Rock-Cut", "Monolithic", "Kailash Temple", "Murals"]
  },
  {
    id: "brihadisvara-temple",
    name: "Brihadisvara Temple (Big Temple)",
    hindiName: "बृहदेश्वर मन्दिर",
    location: "Thanjavur, Tamil Nadu",
    state: "Tamil Nadu",
    zone: "South",
    category: "Temples & Sacred",
    era: "Chola Dynasty (11th Century)",
    yearBuilt: "1010 CE",
    builtBy: "Emperor Raja Raja Chola I",
    architecturalStyle: "Dravidian Chola Architecture",
    unescoStatus: "UNESCO World Heritage Site (1987)",
    rating: 4.9,
    reviewsCount: 62000,
    coverImage: "images/brihadisvara.jpg",
    gallery: [
      "images/brihadisvara.jpg",
      "images/brihadisvara.jpg"
    ],
    shortSummary: "A granite marvel celebrating the zenith of Chola imperial glory, dominated by a 66-meter high Vimana crowned by an 80-tonne monolithic stone capstone raised without modern machinery.",
    fastFacts: [
      "Built entirely of granite in a region with no natural granite deposits within a 60-kilometer radius.",
      "The Kumbam (apex dome) weighs 81.3 tonnes and was rolled to the top using a 6-km long inclined earthen ramp.",
      "Houses one of India's largest monolithic Nandi statues (20 tonnes) carved from a single boulder."
    ],
    audioNarration: "Consecrated in 1010 CE by the great emperor Raja Raja Chola I, Brihadisvara Temple is one of the grandest achievements of Dravidian temple architecture. Its soaring granite tower and magnificent bronze sculptures exemplify Chola power and spiritual devotion.",
    bestTimeToVisit: "October to March",
    visitingHours: "6:00 AM – 12:30 PM, 4:00 PM – 8:30 PM",
    ticketPrice: "Free Entry (Protected by ASI)",
    tags: ["UNESCO", "Chola Dynasty", "Granite", "Dravidian", "Great Living Chola Temples"]
  },
  {
    id: "khajuraho-monuments",
    name: "Khajuraho Group of Monuments",
    hindiName: "खजुराहो स्मारक समूह",
    location: "Chhatarpur District, Madhya Pradesh",
    state: "Madhya Pradesh",
    zone: "Central",
    category: "Temples & Sacred",
    era: "Chandela Dynasty (10th–11th Century)",
    yearBuilt: "950–1050 CE",
    builtBy: "Chandela Kings (Yashovarman & Dhanga)",
    architecturalStyle: "Nagara (Kandariya Style) Architecture",
    unescoStatus: "UNESCO World Heritage Site (1986)",
    rating: 4.7,
    reviewsCount: 31000,
    coverImage: "images/khajuraho.jpg",
    gallery: [
      "images/khajuraho.jpg",
      "images/khajuraho.jpg"
    ],
    shortSummary: "Exquisite sandstone temples celebrated worldwide for their graceful Nagara-style spires and intricate sculptures depicting spiritual harmony, daily life, celestial nymphs, and human intimacy.",
    fastFacts: [
      "Only around 10% of the exterior carvings are erotic; the remaining 90% portray deities, musicians, battles, and everyday medieval Indian life.",
      "Originally comprised 85 temples spread across 20 sq km, of which 25 remarkably preserved temples survive today.",
      "The Kandariya Mahadeva Temple is the largest, representing Mount Kailash with 84 miniature shikhara spires."
    ],
    audioNarration: "The temples of Khajuraho, built during the Chandela dynasty between 950 and 1050 CE, are renowned for their sublime Nagara architecture and harmonious depiction of Dharma, Artha, Kama, and Moksha in sandstone.",
    bestTimeToVisit: "October to March (Khajuraho Dance Festival in February)",
    visitingHours: "Sunrise to Sunset Daily",
    ticketPrice: "₹40 (Indians), ₹600 (Foreigners)",
    tags: ["UNESCO", "Chandela", "Nagara", "Sandstone", "Kandariya Mahadeva"]
  },
  {
    id: "qutub-minar",
    name: "Qutub Minar & Its Monuments",
    hindiName: "क़ुतुब मीनार",
    location: "Mehrauli, New Delhi",
    state: "Delhi",
    zone: "North",
    category: "Monuments",
    era: "Delhi Sultanate (12th–14th Century)",
    yearBuilt: "1199–1220 CE",
    builtBy: "Qutb-ud-din Aibak & Shams-ud-din Iltutmish",
    architecturalStyle: "Indo-Islamic Architecture",
    unescoStatus: "UNESCO World Heritage Site (1993)",
    rating: 4.7,
    reviewsCount: 98000,
    coverImage: "images/qutub-minar.jpg",
    gallery: [
      "images/qutub-minar.jpg",
      "images/qutub-minar.jpg"
    ],
    shortSummary: "The world's tallest brick minaret at 72.5 meters, surrounded by ancient ruins including the mysterious 1,600-year-old rust-resistant Gupta Iron Pillar.",
    fastFacts: [
      "Constructed using fluted red sandstone and marble with 379 spiral steps leading to the summit.",
      "The courtyard features the famous 4th-century Iron Pillar of Chandragupta II, which has not rusted despite 1,600 years of open monsoon exposure.",
      "Features calligraphic inscriptions from the Holy Quran carved in delicate Naskh and Kufic scripts."
    ],
    audioNarration: "Rising 72.5 meters high into the Delhi skyline, the Qutub Minar was initiated in 1199 by Qutb-ud-din Aibak to mark the victory of the Delhi Sultanate. The complex also houses the Alai Darwaza gate and the metallurgical miracle of the rustless Gupta Iron Pillar.",
    bestTimeToVisit: "October to March",
    visitingHours: "7:00 AM to 9:00 PM Daily",
    ticketPrice: "₹40 (Indians), ₹600 (Foreigners)",
    tags: ["UNESCO", "Delhi Sultanate", "Brick Minaret", "Iron Pillar", "Medieval"]
  },
  {
    id: "amber-fort-jaipur",
    name: "Amer Fort & Hill Forts of Rajasthan",
    hindiName: "आमेर का क़िला, जयपुर",
    location: "Jaipur, Rajasthan",
    state: "Rajasthan",
    zone: "North",
    category: "Forts & Palaces",
    era: "Kachhwaha Rajput (16th Century)",
    yearBuilt: "1592 CE",
    builtBy: "Raja Man Singh I",
    architecturalStyle: "Rajput & Mughal Fusion Architecture",
    unescoStatus: "UNESCO World Heritage Site (2013)",
    rating: 4.8,
    reviewsCount: 110000,
    coverImage: "images/amber-fort.jpg",
    gallery: [
      "images/amber-fort.jpg",
      "images/amber-fort.jpg"
    ],
    shortSummary: "A majestic hilltop fortress overlooking Maota Lake, famous for its artistic Hindu elements, opulent courtyards, and the glittering Sheesh Mahal (Palace of Mirrors).",
    fastFacts: [
      "The Sheesh Mahal is inlaid with thousands of convex Belgian glass mirrors such that a single candle illuminates the entire hall.",
      "Connected to Jaigarh Fort via subterranean secret escape tunnels beneath the Cheel ka Teela hills.",
      "One of the six Hill Forts of Rajasthan collectively inscribed as UNESCO World Heritage."
    ],
    audioNarration: "Perched high on the rugged Aravalli hills, Amer Fort in Jaipur was founded in 1592 by Raja Man Singh. Blending Rajput grandeur with Mughal elegance, its marble pavilions, Diwan-e-Aam, and breathtaking mirror palace represent the height of royal Rajasthani opulence.",
    bestTimeToVisit: "October to March (Light & Sound show in evening)",
    visitingHours: "8:00 AM to 5:30 PM, 6:30 PM to 9:15 PM (Night view)",
    ticketPrice: "₹100 (Indians), ₹500 (Foreigners)",
    tags: ["UNESCO", "Rajput", "Sheesh Mahal", "Hill Fort", "Jaipur"]
  },
  {
    id: "nalanda-university",
    name: "Archaeological Site of Nalanda Mahavihara",
    hindiName: "नालंदा महाविहार",
    location: "Nalanda District, Bihar",
    state: "Bihar",
    zone: "East",
    category: "Ancient Universities",
    era: "Gupta & Pala Dynasties (5th–12th Century)",
    yearBuilt: "427 CE",
    builtBy: "Emperor Kumaragupta I (Gupta Empire)",
    architecturalStyle: "Ancient Buddhist Monastic Architecture",
    unescoStatus: "UNESCO World Heritage Site (2016)",
    rating: 4.7,
    reviewsCount: 22000,
    coverImage: "images/nalanda-university.jpg",
    gallery: [
      "images/nalanda-university.jpg",
      "images/nalanda-university.jpg"
    ],
    shortSummary: "The world's premier residential ancient university, housing over 10,000 scholars and 2,000 teachers from across Asia before its famed 9-million manuscript library was destroyed.",
    fastFacts: [
      "The library complex, Dharmaganja ('Treasury of Truth'), housed 9 million handwritten manuscripts and burned for 3 months.",
      "Attracted eminent global scholars like Xuanzang (Hiuen Tsang) and Aryabhata who studied astronomy, mathematics, logic, and philosophy.",
      "Spread over 30 acres of excavated red-brick stupas, viharas (monasteries), and meditation cells."
    ],
    audioNarration: "Nalanda Mahavihara was the ancient world's most prestigious seat of higher learning, flourishing for over 700 years from the 5th to the 12th century. Its red-brick ruins testify to an era when India was the philosophical and intellectual beacon of the Asian continent.",
    bestTimeToVisit: "October to March",
    visitingHours: "9:00 AM to 5:00 PM Daily",
    ticketPrice: "₹40 (Indians), ₹600 (Foreigners)",
    tags: ["UNESCO", "Ancient University", "Gupta Empire", "Buddhism", "Aryabhata"]
  },
  {
    id: "rani-ki-vav",
    name: "Rani ki Vav (The Queen's Stepwell)",
    hindiName: "रानी की वाव, पाटन",
    location: "Patan, Gujarat",
    state: "Gujarat",
    zone: "West",
    category: "Monuments",
    era: "Chaulukya / Solanki Dynasty (11th Century)",
    yearBuilt: "1063 CE",
    builtBy: "Queen Udayamati in memory of King Bhima I",
    architecturalStyle: "Maru-Gurjara Architectural Style",
    unescoStatus: "UNESCO World Heritage Site (2014)",
    rating: 4.8,
    reviewsCount: 29000,
    coverImage: "images/rani-ki-vav.jpg",
    gallery: [
      "images/rani-ki-vav.jpg",
      "images/rani-ki-vav.jpg"
    ],
    shortSummary: "An inverted underground subterranean temple celebrating water sanctity, descending seven terraced levels with over 500 principal sculptures of Lord Vishnu's avatars.",
    fastFacts: [
      "Depicted on the reverse of the new Indian ₹100 banknote.",
      "Designed as an inverted temple highlighting the sacred sanctity of water in arid western India.",
      "Buried under silt for over 800 years by the Saraswati River before being excavated intact by ASI in the 1980s."
    ],
    audioNarration: "Built in 1063 CE by Queen Udayamati of the Solanki dynasty, Rani ki Vav in Patan is an exceptional subterranean stepwell. With seven levels of pillared galleries and over 500 masterly sculptures of the Dashavatara, it transforms utilitarian water harvesting into divine temple art.",
    bestTimeToVisit: "November to February",
    visitingHours: "8:00 AM to 6:00 PM Daily",
    ticketPrice: "₹40 (Indians), ₹600 (Foreigners)",
    tags: ["UNESCO", "Stepwell", "Solanki", "₹100 Note", "Vishnu Avatars"]
  },
  {
    id: "meenakshi-temple",
    name: "Meenakshi Amman Temple",
    hindiName: "मीनाक्षी अम्मन मन्दिर",
    location: "Madurai, Tamil Nadu",
    state: "Tamil Nadu",
    zone: "South",
    category: "Temples & Sacred",
    era: "Pandyan & Nayak Dynasties (6th–17th Century)",
    yearBuilt: "Rebuilt 1623–1655 CE",
    builtBy: "King Tirumala Nayaka & Pandyan Rulers",
    architecturalStyle: "Dravidian Temple Architecture",
    unescoStatus: "Nominated UNESCO Tentative List",
    rating: 4.9,
    reviewsCount: 95000,
    coverImage: "images/meenakshi.jpg",
    gallery: [
      "images/meenakshi.jpg",
      "images/meenakshi.jpg"
    ],
    shortSummary: "A living spiritual city centered around Goddess Meenakshi, renowned for its 14 towering, vibrant multi-colored gopurams and the celebrated Hall of Thousand Musical Pillars.",
    fastFacts: [
      "The temple complex houses over 33,000 sculptures on its 14 towering pyramidal gopurams.",
      "The Hall of Thousand Pillars contains 985 uniquely carved granite pillars, each carved from single stones with distinct mythological motifs.",
      "Attracts over 50,000 pilgrims daily and over a million during the annual 10-day Chithirai Festival."
    ],
    audioNarration: "Located in the ancient 2,500-year-old city of Madurai, Meenakshi Amman Temple is a masterpiece of Dravidian living heritage. Dedicated to Goddess Parvati in the form of Meenakshi and Lord Shiva as Sundareswarar, its towering gopurams dominate the skyline with thousands of painted mythological figures.",
    bestTimeToVisit: "October to March",
    visitingHours: "5:00 AM – 12:30 PM, 4:00 PM – 10:00 PM",
    ticketPrice: "Free (Special darshan ₹50–₹100)",
    tags: ["Living Heritage", "Dravidian", "Madurai", "Gopuram", "Thousand Pillars"]
  },
  {
    id: "kaziranga-national-park",
    name: "Kaziranga Cultural & Eco Heritage",
    hindiName: "काजीरंगा राष्ट्रीय उद्यान",
    location: "Golaghat & Nagaon, Assam",
    state: "Assam",
    zone: "Northeast",
    category: "Natural & Eco-Heritage",
    era: "Ancient Ahom Kingdom & Modern Sanctuary",
    yearBuilt: "Declared Reserve in 1905 CE",
    builtBy: "Preservation initiated by Lady Curzon",
    architecturalStyle: "Brahmaputra Floodplain Ecosystem & Ahom Folk Culture",
    unescoStatus: "UNESCO World Heritage Site (1985)",
    rating: 4.8,
    reviewsCount: 34000,
    coverImage: "images/kaziranga-national-park.webp",
    gallery: [
      "images/kaziranga-national-park.webp",
      "images/kaziranga-national-park.webp"
    ],
    shortSummary: "A UNESCO sanctuary in the Brahmaputra valley holding two-thirds of the world's Great One-horned Rhinoceroses, intertwined with indigenous Assamese Bihu folk culture and Mishing tribal heritage.",
    fastFacts: [
      "Home to over 2,600 Great One-horned Rhinoceroses—the world's highest population density.",
      "Also holds one of the highest densities of Royal Bengal Tigers, wild water buffaloes, and Asiatic elephants.",
      "Surrounded by living Assamese tea heritage and rich Mishing tribal weave and bamboo traditions."
    ],
    audioNarration: "Kaziranga in Assam is a globally acclaimed UNESCO World Heritage sanctuary nestled along the majestic Brahmaputra River. Beyond its famous one-horned rhinos and tigers, it preserves the living folk music, Bihu dance traditions, and handloom craftsmanship of Assam.",
    bestTimeToVisit: "November to April (Closed during monsoons)",
    visitingHours: "Jeep & Elephant Safari: 7:00 AM – 4:00 PM",
    ticketPrice: "₹100 + Safari Charges",
    tags: ["UNESCO", "One-Horned Rhino", "Assam", "Brahmaputra", "Eco-Heritage"]
  },
  {
    id: "sanchi-stupa",
    name: "Buddhist Monuments at Sanchi",
    hindiName: "सांची का महान स्तूप",
    location: "Raisen District, Madhya Pradesh",
    state: "Madhya Pradesh",
    zone: "Central",
    category: "Temples & Sacred",
    era: "Mauryan to Gupta Empires (3rd BCE – 12th CE)",
    yearBuilt: "3rd Century BCE",
    builtBy: "Emperor Ashoka the Great",
    architecturalStyle: "Classical Buddhist Stupa Architecture",
    unescoStatus: "UNESCO World Heritage Site (1989)",
    rating: 4.8,
    reviewsCount: 28000,
    coverImage: "images/sanchi-stupa.jpg",
    gallery: [
      "images/sanchi-stupa.jpg",
      "images/sanchi-stupa.jpg"
    ],
    shortSummary: "The oldest existing stone structure in India, commissioned by Emperor Ashoka over the holy relics of Lord Buddha, encircled by four intricately carved ceremonial Torana gateways.",
    fastFacts: [
      "The four Torana gateways depict Jataka tales, Ashoka's coronation, and scenes from Buddha's life with astonishing anatomical detail.",
      "Lord Buddha is never represented in human form at Sanchi, but through aniconic symbols: foot-prints, the Bodhi tree, the wheel of law (Dharmachakra), and the umbrella.",
      "Featured prominently on the reverse side of the Indian ₹200 banknote."
    ],
    audioNarration: "Commissioned by Emperor Ashoka in the 3rd century BCE, the Great Stupa at Sanchi is India's oldest stone structure. Its hemispherical dome symbolizes the dome of heaven, enclosing sacred relics of Buddha, while its four elaborately carved Torana gateways narrate ancient Buddhist lore.",
    bestTimeToVisit: "October to March",
    visitingHours: "6:30 AM to 6:30 PM Daily",
    ticketPrice: "₹40 (Indians), ₹600 (Foreigners)",
    tags: ["UNESCO", "Ashoka", "Stupa", "Buddhism", "₹200 Note"]
  },
  {
    id: "golden-temple",
    name: "Sri Harmandir Sahib (Golden Temple)",
    hindiName: "श्री हरिमन्दिर साहिब (स्वर्ण मंदिर)",
    location: "Amritsar, Punjab",
    state: "Punjab",
    zone: "North",
    category: "Temples & Sacred",
    era: "Sikh Heritage (16th–19th Century)",
    yearBuilt: "1581–1589 CE (Gold gilded in 1830)",
    builtBy: "Guru Arjan Dev Ji & Maharaja Ranjit Singh",
    architecturalStyle: "Sikh Architecture (Synthesis of Hindu & Islamic styles)",
    unescoStatus: "Nominated UNESCO Tentative List",
    rating: 4.9,
    reviewsCount: 180000,
    coverImage: "images/golden-temple.jpg",
    gallery: [
      "images/golden-temple.jpg",
      "images/golden-temple.jpg"
    ],
    shortSummary: "The holiest Gurdwara of Sikhism, clad in 500 kg of pure gold foil, resting in the center of the sacred Amrit Sarovar lake and running the world's largest free community kitchen (Langar).",
    fastFacts: [
      "Its foundation stone was laid in 1589 by the revered Muslim Sufi saint Hazrat Mian Mir of Lahore.",
      "Has 4 open entrances on all four cardinal sides, symbolizing that people of all castes, creeds, and religions are equally welcomed.",
      "Serves free nutritious meals (Langar) to over 100,000 people every single day regardless of background."
    ],
    audioNarration: "Sri Harmandir Sahib, known worldwide as the Golden Temple, is the spiritual heart of Sikhism. Built on lower ground with entrances facing all four directions, it exemplifies humility and equality. Its gilded copper domes reflect across the holy nectar pool, resonating with continuous divine Gurbani kirtan.",
    bestTimeToVisit: "October to March (Prakash Utsav or Baisakhi)",
    visitingHours: "Open 24 Hours (Langar runs continuously)",
    ticketPrice: "Free for all humanity",
    tags: ["Sikh Heritage", "Golden Temple", "Langar", "Amritsar", "Spiritual"]
  },
  {
    id: "mahabalipuram-monuments",
    name: "Group of Monuments at Mahabalipuram",
    hindiName: "महाबलीपुरम के स्मारक",
    location: "Chengalpattu District, Tamil Nadu",
    state: "Tamil Nadu",
    zone: "South",
    category: "Caves & Rock-Cut",
    era: "Pallava Dynasty (7th–8th Century)",
    yearBuilt: "650–750 CE",
    builtBy: "King Narasimhavarman I & II (Mamalla)",
    architecturalStyle: "Pallava Rock-Cut & Structural Architecture",
    unescoStatus: "UNESCO World Heritage Site (1984)",
    rating: 4.8,
    reviewsCount: 47000,
    coverImage: "images/mahabalipuram.webp",
    gallery: [
      "images/mahabalipuram.webp",
      "images/mahabalipuram.webp"
    ],
    shortSummary: "Ancient seaport sanctuary of the Pallava kings on the Coromandel coast, featuring the oceanfront Shore Temple, the colossal 'Descent of the Ganges' rock bas-relief, and monolithic Pancha Rathas.",
    fastFacts: [
      "The 'Descent of the Ganges' (Arjuna's Penance) is one of the world's largest open-air rock relief sculptures (27m x 9m).",
      "Features Krishna's Butterball—a gigantic 250-tonne boulder balancing precariously on a steep 45-degree slippery slope for 1,200 years.",
      "The Pancha Rathas are five monolithic chariot shrines carved individually out of single pieces of pink granite."
    ],
    audioNarration: "Mahabalipuram on the Bay of Bengal was the glorious maritime gateway of the Pallava empire in the 7th century. Its open-air rock sculptures, Shore Temple facing the breaking ocean waves, and monolithic rathas served as foundational prototypes for South Indian temple architecture.",
    bestTimeToVisit: "November to February",
    visitingHours: "6:00 AM to 6:00 PM Daily",
    ticketPrice: "₹40 (Indians), ₹600 (Foreigners)",
    tags: ["UNESCO", "Pallava", "Shore Temple", "Pancha Rathas", "Butterball"]
  },
  {
    id: "varanasi-ghats",
    name: "Sacred Ghats & Kashi Vishwanath, Varanasi",
    hindiName: "काशी विश्वनाथ एवं वाराणसी के घाट",
    location: "Varanasi, Uttar Pradesh",
    state: "Uttar Pradesh",
    zone: "North",
    category: "Temples & Sacred",
    era: "Continuous Living Heritage (Over 3,000 Years)",
    yearBuilt: "Historic Ancient Antiquity",
    builtBy: "Rebuilt by Queen Ahilyabai Holkar & Maharaja Ranjit Singh",
    architecturalStyle: "Ancient Riverfront Ghat Architecture & Nagara Temple",
    unescoStatus: "UNESCO Tentative List & UNESCO Creative City of Music",
    rating: 4.9,
    reviewsCount: 160000,
    coverImage: "images/varanasi-ghats.jpg",
    gallery: [
      "images/varanasi-ghats.jpg",
      "images/varanasi-ghats.jpg"
    ],
    shortSummary: "One of the world's oldest continually inhabited cities on the sacred banks of Mother Ganga, celebrated for 84 historic stone ghats, twilight Ganga Aarti, and the gold-crowned Kashi Vishwanath Jyotirlinga.",
    fastFacts: [
      "Mark Twain famously remarked: 'Varanasi is older than history, older than tradition, older even than legend, and looks twice as old as all of them put together.'",
      "The grand Dashashwamedh Ghat hosts the world-renowned evening Ganga Aarti witnessed by thousands of pilgrims every night.",
      "Kashi Vishwanath Temple's iconic spire is plated with 1,000 kg of pure gold donated by Maharaja Ranjit Singh."
    ],
    audioNarration: "Varanasi, the eternal city of Lord Shiva on the crescent bend of the Ganga, has been the beating heart of Indian spirituality, music, philosophy, and silk weaving for over three millennia. Its stone steps and soulful chants embody India's timeless living traditions.",
    bestTimeToVisit: "October to March (Dev Deepawali in Nov is magical)",
    visitingHours: "Ghats open 24 Hours; Temple 3:00 AM – 11:00 PM",
    ticketPrice: "Free (Special pooja booking available)",
    tags: ["Living Heritage", "Ganga Aarti", "Kashi Vishwanath", "Oldest City", "Spiritual"]
  }
];

const HERITAGE_CATEGORIES = [
  { id: "all", label: "All Heritage Sites", icon: "🏛️" },
  { id: "Monuments", label: "Monuments & Palaces", icon: "🏰" },
  { id: "Temples & Sacred", label: "Temples & Sacred", icon: "🛕" },
  { id: "Caves & Rock-Cut", label: "Caves & Rock-Cut", icon: "⛰️" },
  { id: "Forts & Palaces", label: "Forts & Citadels", icon: "🛡️" },
  { id: "Ancient Universities", label: "Ancient Universities", icon: "📜" },
  { id: "Natural & Eco-Heritage", label: "Eco & Natural Heritage", icon: "🌿" }
];

const HERITAGE_ZONES = [
  { id: "all", label: "All India" },
  { id: "North", label: "North India" },
  { id: "South", label: "South India" },
  { id: "East", label: "East India" },
  { id: "West", label: "West India" },
  { id: "Central", label: "Central India" },
  { id: "Northeast", label: "Northeast India" }
];

const QUIZ_QUESTIONS = [
  {
    question: "Which Indian monument's stone chariot is depicted on the reverse of the ₹50 banknote?",
    options: ["Konark Sun Temple", "Hampi Vittala Temple", "Mahabalipuram Pancha Rathas", "Brihadisvara Temple"],
    answerIndex: 1,
    explanation: "The iconic monolithic Stone Chariot in the Vittala Temple complex at Hampi, Karnataka is featured on the Indian ₹50 note."
  },
  {
    question: "Which ancient university possessed a library of 9 million manuscripts named 'Dharmaganja'?",
    options: ["Takshashila", "Nalanda Mahavihara", "Vikramashila", "Vallabhi"],
    answerIndex: 1,
    explanation: "Nalanda Mahavihara in Bihar was home to the world's greatest library complex 'Dharmaganja' before its tragic destruction in 1193 CE."
  },
  {
    question: "The 24 carved stone wheels of Konark Sun Temple serve what scientific function?",
    options: ["Water harvesting valves", "Precise astronomical sundials", "Magnetic compasses", "Earthquake shock absorbers"],
    answerIndex: 1,
    explanation: "Each of the 24 wheels at Konark acts as an accurate sundial, telling time to within minutes using the sun's shadow on its spokes."
  },
  {
    question: "Which stepwell in Gujarat is designed as an inverted subterranean temple with over 500 Vishnu sculptures?",
    options: ["Chand Baori", "Adalaj Stepwell", "Rani ki Vav", "Agrasen ki Baoli"],
    answerIndex: 2,
    explanation: "Rani ki Vav in Patan, Gujarat, built by Queen Udayamati in 1063 CE, is an inverted temple featured on the ₹100 note."
  }
];
