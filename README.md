# 🚀 crypto-ticker

A lightweight **cryptocurrency price ticker** built with Python 🐍.  
It fetches live crypto prices from public APIs and displays them in a simple, customizable interface.

---

## 📑 Table of Contents

- [📘 About](#-about)  
- [✨ Features](#-features)  
- [⚡ Getting Started](#-getting-started)  
- [🖥️ Usage](#️-usage)  
- [🤝 Contributing](#-contributing)  
- [📜 License](#-license)  
- [📬 Contact](#-contact)  

---

## 📘 About

The **crypto-ticker** project provides a clean and straightforward way to track cryptocurrency prices in **real‑time** ⏱️.  
It’s designed for simplicity — no bloated dependencies, just efficient data fetching and display.

👨‍💻 **Who is this for?**  
- Developers experimenting with APIs  
- Crypto enthusiasts monitoring prices  
- Anyone who wants a lightweight tracker without dashboards or trading apps

---

## ✨ Features

- 🔄 Real‑time price updates from public APIs  
- 💰 Supports multiple cryptocurrencies (BTC, ETH, etc.)  
- ⚙️ Configurable update intervals  
- 🖥️ Console output (easy to extend to GUI or dashboards)  
- 🧩 Modular design for adding new APIs or output formats  

---

## ⚡ Getting Started

### 1️⃣ Clone the repo
```sh
git clone https://github.com/emsikes/crypto-ticker.git
cd crypto-ticker
```

### 2️⃣ Install dependencies
```sh
pip install -r requirements.txt
```

### 3️⃣ (Optional) Set API keys if required
```sh
export API_KEY="your_key_here"
```

### 4️⃣ Run the ticker
```sh
python ticker.py
```

---

## 🖥️ Usage

- 🟢 By default, fetches **BTC price** every 30 seconds  
- 🔄 Change the **crypto symbol** and **interval** via `config.json` or CLI arguments  

Example:
```sh
python ticker.py --symbol ETH --interval 10
```

---

## 🤝 Contributing

We welcome contributions! 🙌  

Ways you can help:
- Add support for more coins or exchanges 🪙  
- Improve output formatting (UI, dashboards, etc.) 🎨  
- Add alerts (thresholds, notifications) 🔔  
- Write tests and improve error handling ✅  

### Steps to Contribute
1. 🍴 Fork the repo  
2. 🌿 Create a feature branch  
3. 💾 Commit changes with clear messages  
4. 🔁 Open a pull request  

---

## 📜 License

This project is licensed under the **MIT License** — see [LICENSE](LICENSE) for details.

---

## 📬 Contact

- 👤 **Author**: *emsikes*  
- 💻 **GitHub**: [emsikes](https://github.com/emsikes)  
- ✉️ **Email**: your‑email@example.com (optional)  

---
