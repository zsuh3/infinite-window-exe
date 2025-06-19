# infinite-window-exe

> A playful desktop app that spawns your GitHub profile link window in ever-increasing multiples.

> [![build](https://github.com/zsuh3/infinite-window-exe/actions/workflows/ci.yml/badge.svg)](https://github.com/zsuh3/infinite-window-exe/actions)
> [![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 📥 Downloads

- [macOS (arm64) DMG v1.1.5](https://github.com/zsuh3/infinite-window-exe/releases/download/v1.1.5/Infinite.Window.EXE-1.1.5-arm64.dmg)
- [Windows EXE Installer v1.1.5](https://github.com/zsuh3/infinite-window-exe/releases/download/v1.1.5/Infinite.Window.EXE.Setup.1.1.5.exe)
- [Linux AppImage v1.1.5](https://github.com/zsuh3/infinite-window-exe/releases/download/v1.1.5/Infinite.Window.EXE-1.1.5.AppImage)
- [Linux DEB Package v1.1.5](https://github.com/zsuh3/infinite-window-exe/releases/download/v1.1.5/infinite-window-exe_1.1.5_amd64.deb)

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
