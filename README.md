# 🎨 Vector Graphics Scripting — Interactive Audio Visualizer

[![Live Demo](https://img.shields.io/badge/Demo-GitHub%20Pages-brightgreen.svg)](https://tripathiswastik.github.io/Vector-Graphics-Scripting/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Paper.js](https://img.shields.io/badge/Canvas-Paper.js-orange.svg)](http://paperjs.org/)
[![Howler.js](https://img.shields.io/badge/Audio-Howler.js%20v2-green.svg)](https://howlerjs.com/)
[![Web Audio](https://img.shields.io/badge/Platform-HTML5%20Canvas%20%7C%20WebAudio-purple.svg)](https://github.com/tripathiswastik/Vector-Graphics-Scripting)
[![Author](https://img.shields.io/badge/Author-Swastik%20Tripathi-blueviolet.svg)](https://github.com/tripathiswastik)

An interactive, kinetic vector graphics sound synthesizer. Every keystroke triggers unique animations paired with synthesized sound samples mapped dynamically onto an HTML5 canvas.

> 🌐 **Experience the Live Web Demo:** **[https://tripathiswastik.github.io/Vector-Graphics-Scripting/](https://tripathiswastik.github.io/Vector-Graphics-Scripting/)** (No installation required)

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

## 🎮 Complete Keystroke & Audio Synthesizer Keymap

Every key on your keyboard (`A` through `Z`) triggers a dedicated audio sample accompanied by a procedurally animated geometry and tailored color scheme:

| Key | Sound Sample | Color Accent | Shape & Kinetic Behavior |
| :---: | :--- | :--- | :--- |
| **`Q`** | `bubbles.mp3` | `#1abc9c` (Turquoise) | Expanding radial circle with soft pulse |
| **`W`** | `clay.mp3` | `#2ecc71` (Emerald) | Rotating square with decelerating angular velocity |
| **`E`** | `confetti.mp3` | `#3498db` (Sky Blue) | Multi-point confetti burst explosion |
| **`R`** | `corona.mp3` | `#9b59b6` (Amethyst) | Corona starburst polygon with radial spikes |
| **`T`** | `dotted-spiral.mp3` | `#34495e` (Midnight) | Concentric dashed spiral path |
| **`Y`** | `flash-1.mp3` | `#16a085` (Sea Green) | Screen flash vector expansion |
| **`U`** | `flash-2.mp3` | `#27ae60` (Forest Green)| Rapid double-pulse polygon |
| **`I`** | `flash-3.mp3` | `#2980b9` (Cobalt) | High-velocity fading ring |
| **`O`** | `glimmer.mp3` | `#8e44ad` (Purple) | Shimmering dodecagon with scale fade |
| **`P`** | `moon.mp3` | `#2c3e50` (Dark Slate) | Crescent orbit transformation |
| **`A`** | `pinwheel.mp3` | `#f1c40f` (Sunflower) | High-speed spinning pinwheel rotor |
| **`S`** | `piston-1.mp3` | `#e67e22` (Carrot) | Vertical reciprocating piston column |
| **`D`** | `piston-2.mp3` | `#e74c3c` (Alizarin) | Dual-offset hydraulic piston motion |
| **`F`** | `prism-1.mp3` | `#95a5a6` (Concrete) | Triangular optical prism refracting light |
| **`G`** | `prism-2.mp3` | `#f39c12` (Orange) | Hexagonal dispersion prism |
| **`H`** | `prism-3.mp3` | `#d35400` (Rust) | Octagonal chromatic prism |
| **`J`** | `splits.mp3` | `#1abc9c` (Turquoise) | Bifurcating twin-orbit vectors |
| **`K`** | `squiggle.mp3` | `#2ecc71` (Emerald) | Sine-wave oscillating squiggle line |
| **`L`** | `strike.mp3` | `#3498db` (Sky Blue) | Kinetic lightning vector strike |
| **`Z`** | `suspension.mp3` | `#9b59b6` (Amethyst) | Damped spring harmonic bounce |
| **`X`** | `timer.mp3` | `#34495e` (Midnight) | Clockwise sweeping radar sweep |
| **`C`** | `ufo.mp3` | `#16a085` (Sea Green) | Floating hovering disc trajectory |
| **`V`** | `veil.mp3` | `#27ae60` (Forest Green)| Expanding transcluent geometric veil |
| **`B`** | `wipe.mp3` | `#2980b9` (Cobalt) | Linear canvas horizon wipe |
| **`N`** | `zig-zag.mp3` | `#8e44ad` (Purple) | Angular saw-tooth vector cascade |
| **`M`** | `moon.mp3` | `#2c3e50` (Dark Slate) | Deep lunar eclipse fade |
| **🖱️ Click / Tap** | *Random Sample* | *Random Palette* | Spawns random vector at mouse/touch coordinate |

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