# infinite-window-exe

> A playful desktop app that spawns your GitHub profile link window in ever-increasing multiples.

## 🎯 Inspiration

This project was born from watching **“Holding a Scammer's Computer HOSTAGE”** by Scammer Payback on YouTube ([https://www.youtube.com/watch?v=TEjcEk-1F00](https://www.youtube.com/watch?v=TEjcEk-1F00)). I was inspired by the idea of turning a malicious tactic into a fun, self-hosted experience—and decided to recreate that cascade effect on my own desktop.

## 🚀 Features

- Opens a single window showing an image that links to your GitHub.
- On clicking the "✕" close button, it spawns more windows.
- Each subsequent close doubles the count again (1 → 2 → 4 → 8 …).

## 💻 Tech Stack

Built with **Electron** + **Node.js**

## 🔧 Installation

```bash
# install dependencies
npm install
# start in dev mode
npm run start
```

## 🛠 Usage

* Close any window to see two new ones appear.
* (MVP) Force-quit or add a tray-menu “Quit” option later to escape the cascade.

## 📄 License

This project is MIT-licensed — see the [LICENSE](LICENSE) file for details.
