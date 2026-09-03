# 🏛️ BharatVirasat - Indian Heritage & Culture Portal

A comprehensive web portal dedicated to showcasing India's iconic UNESCO Heritage Sites and cultural wonders. BharatVirasat combines cutting-edge technology with rich cultural heritage to provide users with an immersive experience exploring India's historical and cultural treasures.

## 🌟 Features

### 📚 Heritage Exploration
- **Concise Heritage Summaries** - Detailed yet accessible descriptions of UNESCO World Heritage Sites
- **High-Resolution Imagery** - Professional photography of iconic landmarks and cultural sites
- **Multi-language Support** - Google Translate integration for global accessibility
- **Quick Language Switcher** - Easy toggle between major Indian and international languages

### 🤖 Gemini AI Heritage Chatbot
- **Cultural Sage AI** - Powered by Gemini 2.0 Flash for intelligent heritage queries
- **Speech Recognition** - Voice input support (English-India dialect optimized)
- **Text-to-Speech** - Listen to responses with natural speech synthesis
- **Conversational AI** - Interactive exploration of Indian culture and heritage

### 🎨 User Experience
- **Responsive Design** - Optimized for mobile, tablet, and desktop devices
- **Beautiful UI** - Royal-themed design with cultural aesthetics
- **Fast & Reliable** - Deployed on Netlify for optimal performance

## 📁 Project Structure

```
hackathon/
├── index.html           # Main heritage portal page
├── welcome.html         # Welcome landing page
├── netlify.toml         # Netlify configuration
├── css/
│   └── styles.css       # Complete styling and responsive design
├── js/
│   ├── app.js           # Main application logic
│   ├── data.js          # Heritage sites database
│   └── gemini-bot.js    # Gemini AI chatbot implementation
└── images/              # Heritage site photographs and assets
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser with JavaScript enabled
- Internet connection for:
  - Google Translate API
  - Gemini AI API
  - Speech Recognition services

### Installation

1. **Clone or Download the Project**
   ```bash
   git clone <repository-url>
   cd hackathon
   ```

2. **Open Locally**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     python -m http.server 8000
     # or
     npx http-server
     ```
   - Visit `http://localhost:8000`

3. **API Configuration**
   - Update Gemini API key in `js/gemini-bot.js`
   - Ensure Google Translate is accessible in your region

## 💻 Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **AI/ML**: Google Gemini 2.0 Flash API
- **Localization**: Google Translate API
- **Speech**: Web Speech API
- **Hosting**: Netlify
- **Security**: Content Security Policy, Security headers configured

## 🔧 Configuration

### Netlify Deployment
The project includes `netlify.toml` with:
- Security headers (CSP, X-Frame-Options, etc.)
- Homepage redirect to welcome page
- Optimized build settings

### Environment Variables
Add the following to `.env` or configure in Netlify:
```
GEMINI_API_KEY=your_gemini_api_key
```

## 🎯 Usage

1. **Browse Heritage Sites**
   - Explore India's UNESCO World Heritage Sites
   - Read detailed summaries and cultural significance
   - View high-quality photographs

2. **Use the AI Chatbot**
   - Click the chatbot icon to open heritage dialogue
   - Ask questions about Indian culture and monuments
   - Use voice input for hands-free interaction
   - Listen to responses with text-to-speech

3. **Change Language**
   - Use quick language buttons for Indian languages
   - Or use Google Translate for global language support

## 📝 File Descriptions

| File | Purpose |
|------|---------|
| `index.html` | Main portal page with heritage listings and chatbot |
| `welcome.html` | Beautiful welcome/intro page with portal navigation |
| `css/styles.css` | Responsive styling with royal heritage theme |
| `js/app.js` | Application initialization and event handlers |
| `js/data.js` | Heritage sites database and cultural information |
| `js/gemini-bot.js` | AI chatbot logic with speech capabilities |

## 🔒 Security

The project implements:
- Content Security Policy (CSP)
- XSS Protection headers
- Referrer Policy
- X-Frame-Options to prevent clickjacking
- Secure permissions for microphone/geolocation

## 🌐 Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Deploy to Netlify

1. Push code to GitHub repository
2. Connect repository to Netlify
3. Set build command: (leave empty)
4. Set publish directory: `.`
5. Add environment variables (Gemini API key)
6. Deploy!

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy
```

## 🎓 Learning Resources

- [Google Gemini API Documentation](https://ai.google.dev)
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- [Google Translate API](https://cloud.google.com/translate)
- [Netlify Documentation](https://docs.netlify.com)

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created for a hackathon celebrating Indian heritage and culture.

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Contact the development team

## 🙏 Acknowledgments

- Google for Gemini AI and Translate APIs
- UNESCO for World Heritage documentation
- The open-source community
- Indian cultural historians and heritage experts

---

**BharatVirasat - Preserving and Celebrating Indian Heritage Through Technology** 🏛️🇮🇳
