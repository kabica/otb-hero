# Jadoo ✈︎

A fully responsive travel experience built for the **Outside The Box** frontend take-home exercise

The original assignment focused on recreating a responsive hero section from a provided design reference. This has been expanded to showcase a lightweight multi-page travel application to with stronger frontend architecture, interaction design, state management, and product thinking.




## 🏗 Engineering + Archtecture Considerations

Expanded the project to demonstrate additional frontend engineering capabilities:

- scalable component structure
- reusable UI patterns
- route architecture
- state management
- responsive design systems
- authentication state handling
- product-focused UX decisions



## Architecture Considerations

Intentionally avoided designing a deeply normalized data model between flights, hotels, destinations, and bookings.
In a production environment, these entities would  require more complex relational modeling:

- bookings ↔ flights  
- bookings ↔ hotels  
- users ↔ bookings  
- destinations ↔ inventory  
- payment + reservation state management  

That would introduce additional concerns around relational consistency, API orchestration, caching strategies, and persistence layers.

Given the scope, I prioritized frontend architecture, responsiveness, interaction design, and user experience over building unnecessary backend abstractions or overly complex mock schemas. These can be readily switched to external / structured data sources with further composition logic required for use in frontend. 



## 🌐 Live Demo 

https://otb-hero.vercel.app




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




# ⚙️ Technical Stack

⚛️ **React** → component architecture  
🔷 **TypeScript** → type safety  
⚡ **Vite** → build tooling  
🎨 **Material UI** → design system + component primitives  
🧭 **React Router** → client-side routing  
📝 **React Hook Form** → form state management  
✅ **Zod** → schema validation  
▲ **Vercel** → deployment + hosting  




## 🚀 Running Locally

```bash
git clone https://github.com/kabica/otb-hero.git
cd otb-hero
npm install
npm run dev
