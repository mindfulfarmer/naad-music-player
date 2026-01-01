# नाद (Naad) Music Player

Offline music player designed for audiophiles

![Version](https://img.shields.io/badge/version-2-blue)
![Status](https://img.shields.io/badge/status-stable-green)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

**Naad** (Sanskrit/Hindi: *Sound*) is a lightweight, privacy-focused, offline-first music player for the web. 

Designed with a "local-first" philosophy, it allows you to play your local music collection without any data leaving your device. It features a custom-built audio engine, zero-dependency metadata parsing, and a beautiful, adaptive UI.

## ✨ Features

- **📂 Local Library Management**
  - **Recursive Scanning**: Add individual files or entire folders (supports nested directories).
  - **IndexedDB Storage**: Metadata and album art are cached locally for instant load times on subsequent visits.
  - **Privacy First**: No analytics, no tracking, no server uploads. Everything stays in your browser.

- **🎧 Advanced Playback**
  - **Gapless-style playback** with a custom audio pipeline.
  - **Queue Management**: Shuffle, Repeat (One/All), and "Up Next" reordering.
  - **Media Session Integration**: Control playback from your notification shade or lock screen (supports hardware media keys).

- **🎨 Visuals & UI**
  - **Adaptive Themes**: Auto-extracts dominant colors from album art to theme the player UI.
  - **Visualizations**: Real-time canvas-based audio visualization (frequency bars and particles).
  - **Dark/Light Mode**: Toggle between "Violet Storm" light theme and "Deep Night" dark theme.
  - **Touch Gestures**: Swipe down to minimize the player; swipe gestures for queue management.

- **🛠 Technical Highlights**
  - **Zero-Dependency ID3 Parser**: Custom written JavaScript to read `TIT2`, `TPE1`, `TALB`, and `APIC` frames directly from binary file buffers.
  - **PWA Ready**: Installable as a native-like app on supported devices.
  - **Hybrid Architecture**: Codebase includes checks for `Capacitor`, making it ready for native Android packaging.

## 🚀 Getting Started

### Web Version
1. Clone this repository.
2. Serve the `index.html` file using any static file server (e.g., Live Server, Python `http.server`, or GitHub Pages).
3. 3. Open `localhost:8000` in a Chromium-based browser (Chrome, Edge, Brave) for the best support of the File System Access API.

---

Designed and Developed by **Bhaskarjyoti Das**.
Made in India 🇮🇳

Distributed under the MIT License. See `LICENSE` for more information.
