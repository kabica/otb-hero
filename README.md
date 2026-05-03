# Jadoo ✈︎

A fully responsive travel experience built for the **Outside The Box** frontend take-home exercise.

The original assignment focused on recreating a responsive hero section from a provided design reference. After completing the required hero implementation, I expanded the project into a lightweight multi-page travel application to demonstrate stronger frontend architecture, interaction design, state management, and product thinking.

The goal was to build something that felt closer to a real product experience than a static UI exercise.

---

## 🌐 Live Demo

https://otb-hero.vercel.app

---

## 💻 Repository

https://github.com/kabica/otb-hero

---

## ✨ What I Built

### 🎯 Responsive Hero Implementation
- Pixel-conscious recreation of provided design
- Fully responsive layout behavior across desktop/mobile
- Dynamic image scaling
- Typography scaling using `clamp()`
- Layered visual assets/background composition

### 🧭 Navigation + Routing
- Multi-page routing architecture using React Router
- Mobile navigation drawer
- Dynamic navigation states
- Clean route separation for product pages

### 🔐 Authentication Flow
- Login/signup flows
- Global auth state using React Context
- Simulated session persistence via local storage
- Conditional UI rendering based on authenticated state

### 🎬 Interactive UX
- Embedded video modal experience
- Hover states
- Responsive interactions
- Conditional booking experiences for authenticated vs unauthenticated users

### 🌍 Product Pages
- Destinations
- Hotels
- Flights
- Booking dashboard

---

# ⚙️ Technical Stack

⚛️ **React** → component architecture  
🔷 **TypeScript** → type safety  
⚡ **Vite** → build tooling  
🎨 **Material UI** → design system + component primitives  
🧭 **React Router** → client-side routing  
📝 **React Hook Form** → form state management  
✅ **Zod** → schema validation  
▲ **Vercel** → deployment + hosting  

---

## 🏗 Engineering Focus

While the assignment centered around UI implementation, I intentionally expanded the project to demonstrate additional frontend engineering capabilities:

- scalable component structure
- reusable UI patterns
- route architecture
- state management
- responsive design systems
- authentication state handling
- product-focused UX decisions

---

## 🚀 Running Locally

```bash
git clone https://github.com/kabica/otb-hero.git
cd otb-hero
npm install
npm run dev
