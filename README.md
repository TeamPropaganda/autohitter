# 🛡️ Propaganda Auto Checkouter - Educational Extension

> **⚠️ DISCLAIMER: This project is for EDUCATIONAL PURPOSES ONLY. The authors are not responsible for any misuse or damage caused by this program. Use at your own risk and responsibility.**

## 🌟 Overview

Propaganda Auto Checkouter is a browser extension developed for educational purposes to demonstrate automated form handling, payment system interactions, and browser extension development best practices. It showcases various technical concepts including:

- Browser Extension Architecture (Manifest V3)
- Real-time form manipulation
- Network request handling
- Telegram integration for notifications
- Advanced selector handling (XPath & CSS)

## ✨ Features

- 🔄 Automated retry mechanism for form submissions
- 📝 Comprehensive logging system
- 🎯 Support for both BIN and CC modes
- 📱 Telegram integration for real-time notifications
- 🔍 Detailed transaction history tracking
- ⚡ Improved error handling and debugging
- 🛠️ Customizable selectors (XPath/CSS)

## 🚀 Recent Improvements

- Enhanced logging system with detailed error messages
- Fixed single-digit card number input handling
- Improved MM/YY format validation
- Better CVV handling (including 000 format)
- Smoother retry mechanism
- Enhanced error reporting
- Improved success rate tracking

## 💻 Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/propaganda-auto-checkouter.git
```

2. Open Chrome/Edge browser and navigate to:
   - Chrome: `chrome://extensions/`
   - Edge: `edge://extensions/`

3. Enable "Developer mode" in the top right corner

4. Click "Load unpacked" and select the cloned repository folder

## 🔧 Configuration

### BIN Mode
1. Open extension settings
2. Select "BIN" tab
3. Enter your BIN number (e.g., 424242)
4. Set your preferred submit button selector
5. Click Save

### CC Mode
1. Open extension settings
2. Select "CC" tab
3. Enter card list (one per line)
   Format: `CARDNUMBER|MM|YYYY|CVV`
4. Set submit button selector
5. Click Save

### Telegram Notifications
1. Select "Telegram" tab
2. Enter your Telegram ID
3. Request and verify OTP
4. Join our Telegram group for updates

## 🎯 Usage Tips

- Use precise selectors for better reliability
- Monitor the console for detailed logs
- Check transaction history regularly
- Keep the extension updated
- Join our Telegram group for support

## 🐛 Known Issues & Solutions

1. **Selector Not Found**: Ensure correct selector syntax
2. **Form Not Detected**: Refresh page and try again
3. **Network Issues**: Check internet connection
4. **Notification Delays**: Verify Telegram settings

## 🔒 Security Features

- Secure data storage
- Encrypted communication
- Safe credential handling
- Privacy-focused logging

## ⚖️ Legal Notice

This software is provided for educational purposes only. Users are responsible for ensuring their use complies with all applicable laws and regulations. The authors do not endorse or encourage any unauthorized or malicious use of this software.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📫 Support

Join our [Telegram Group](https://t.me/TeamPropaganda) for:
- Updates and announcements
- Community support
- Feature requests
- Bug reports

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=yourusername/propaganda-auto-checkouter&type=Date)](https://star-history.com/#yourusername/propaganda-auto-checkouter&Date)

---

<p align="center">Made with ❤️ for educational purposes</p> 
