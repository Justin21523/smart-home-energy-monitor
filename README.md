# SmartHome Energy Monitor

> A multi‐page, static HTML/CSS/Vanilla JS demonstration site for real-time home energy monitoring, device management, and energy-saving recommendations.

---

## 🔗 Table of Contents

1. [Project Overview](#project-overview)  
2. [Key Features](#key-features)  
3. [Tech Stack](#tech-stack)  
4. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation & Run](#installation--run)  
5. [Folder Structure](#folder-structure)  
6. [Usage](#usage)  
7. [Deployment](#deployment)  
8. [Contributing](#contributing)  
9. [License](#license)  

---

## Project Overview

SmartHome Energy Monitor is a clean, component-based demo site that simulates:

- **Real-time power gauge** with smooth tween updates  
- **Historical consumption graphs** via Chart.js line charts  
- **Device management** cards for toggling & grouping appliances  
- **Energy-saving tips** carousel with content from JSON  
- **User alerts & settings** stored in localStorage  
- **Marketing pages** (About, Features, Testimonials, Contact) built with reusable modules  

All pages are handcrafted in **HTML5**, **CSS3** (custom properties + keyframes), and **Vanilla JavaScript** (ES Modules), with optional integration of Chart.js and Three.js for future expansions.

---

## Key Features

- **Dashboard**  
  - Animated gauge (`gauge.js`) for live power draw  
  - Parallax hero section with search bar focus effect  
- **History**: Interactive line chart of past consumption  
- **Devices**: Card layout with on/off toggles & grouping  
- **Tips**: Auto-rotating carousel plus manual controls  
- **Settings**: Alert thresholds persisted via localStorage  
- **Reusable Components**:  
  - `header.js` (scroll-triggered sticky nav + burger menu)  
  - `scrollEffects.js` (IntersectionObserver for fade-in)  
  - `animations.css` for centralized keyframes & utility classes  
- **Responsive**: Mobile-first breakpoints, burger menu, fluid grids  

---

## Tech Stack

- **Markup**: HTML5, ES6 Modules  
- **Styles**: CSS3 custom properties, Flexbox, Grid, @keyframes  
- **Logic**: Vanilla JavaScript (modules, fetch, IntersectionObserver)  
- **Charts**: [Chart.js](https://www.chartjs.org/) (optional)  
- **3D Graphics**: [Three.js](https://threejs.org/) (optional)  
- **Data**: Local JSON files under `/assets/data/`  
- **Dev Server**: `static-web-server` (or `serve`) via Replit/Nix or npm  

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14+ (for local `npm run dev`)  
- Git & GitHub account (for version control & remote syncing)  

### Installation & Run

```bash
# 1. Clone this repository
git clone https://github.com/justin21523/smart-home-energy-monitor.git
cd smart-home-energy-monitor

# 2. Install dependencies
# Option A: using static-web-server (Replit/Nix)
#    already defined in .replit; just press “Run” on Replit.

# Option B: via npm locally
npm install serve --save-dev
# or if you prefer `npm install` installed serve globally

# 3. Start dev server
npm run dev
# If you used `serve . -l 3000`, then navigate to http://localhost:3000
