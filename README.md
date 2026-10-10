# 🎨 Vector Graphics Scripting — Interactive Audio Visualizer

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Paper.js](https://img.shields.io/badge/Canvas-Paper.js-orange.svg)](http://paperjs.org/)
[![Howler.js](https://img.shields.io/badge/Audio-Howler.js%20v2-green.svg)](https://howlerjs.com/)
[![Web Audio](https://img.shields.io/badge/Platform-HTML5%20Canvas%20%7C%20WebAudio-purple.svg)](https://github.com/tripathiswastik/Vector-Graphics-Scripting)
[![Author](https://img.shields.io/badge/Author-Swastik%20Tripathi-blueviolet.svg)](https://github.com/tripathiswastik)

An interactive, kinetic vector graphics sound synthesizer. Every keystroke triggers unique animations paired with synthesized sound samples mapped dynamically onto an HTML5 canvas.

---

## 🌟 Features

- **🎹 Interactive Key Matrix (`A` to `Z`)**: 26 distinct, harmonious sound samples paired with procedurally generated geometric vector graphics.
- **🖱️ Mouse & Touch Screen Support**: Click or tap anywhere to generate random vector animations and trigger sounds on mobile and desktop.
- **🔄 Generative Geometric Morphing**: Alternate between rotating circles, rounded rectangles, and regular polygons with hue-shifting color animations.
- **⚡ High-Performance Architecture**:
  - **CDN Caching with Fallback**: Minified Paper.js and Howler.js loaded via CDN with local offline fallbacks.
  - **Bounded Shape Concurrency (`MAX_SHAPES = 60`)**: Caps memory spikes and prevents performance degradation under rapid key strikes.
  - **In-Place Array Compaction**: Single-pass $O(n)$ array pruning inside `onFrame` without $O(n^2)$ array-splicing overhead.
  - **Lazy Sound Allocation**: Creates and decodes audio instances only when a key is first triggered, reducing initialization load to zero.
  - **Cached DOM References**: Eliminates recurring DOM queries inside trigger loops.
  - **Bitwise Random Indexing**: Fast bitwise operations for random mouse/touch key selection.
- **🔊 Modern Audio Engine**: Powered by **Howler.js 2.2** with Web Audio API support and a dedicated sound mute toggle HUD.
- **💎 Glassmorphic Minimal HUD**: Sleek, non-intrusive UI overlay with an interactive trigger counter and responsive design.

---

## 📂 Project Structure

```text
Vector-Graphics-Scripting/
├── index.html       # Primary application entrypoint (GitHub Pages ready)
├── circles.html     # Alternate/legacy entrypoint
├── circles.css      # Responsive styles & glassmorphic HUD design
├── data.js          # Key-to-sound and color configuration mappings
├── paper-full.js    # Paper.js vector graphics scripting library
├── sounds/          # 26 audio samples (.mp3) mapped to alphabet keys
└── README.md        # Documentation and guide
```

---

## 🚀 Getting Started

No dependencies, package managers, or build steps required.

### Option 1: Live in Browser
Open `index.html` directly in any modern browser:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Option 2: Local HTTP Server (Recommended for audio playback)
```bash
# Python 3
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## 🎮 Keyboard Controls

| Key Range | Sound FX Category | Visual Aesthetic |
| :---: | :---: | :---: |
| `Q` - `P` | Bubbles, Melodic Chimes, Dotted Spirals | Turquoise, Emerald, Amethyst |
| `A` - `L` | Percussion, Pinwheels, Prisms, Strikes | Goldenrod, Vermilion, Coral |
| `Z` - `M` | Ambient Swells, UFOs, Zig-Zags, Timers | Lavender, Cyan, Deep Navy |
| `Mouse Click` | Generates a randomized sound & animation | Dynamic responsive sizing |

---

## 🛠️ Built With

- **[Paper.js](http://paperjs.org/)** — Vector graphics scripting framework running on HTML5 Canvas.
- **[Howler.js](https://howlerjs.com/)** — Audio library utilizing the Web Audio API with HTML5 Audio fallback.
- **[Google Fonts (Outfit)](https://fonts.google.com/specimen/Outfit)** — Clean, contemporary typography.

---

## 👤 Author

- **Swastik Tripathi** — [GitHub (@tripathiswastik)](https://github.com/tripathiswastik)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).