# Dolce Vita Paradiso

An immersive, high-end web portfolio for a contemporary Italian restaurant, built with modern web technologies to deliver a luxurious digital experience.

![Dolce Vita Paradiso Hero](src/assets/images/hero_home_1765550275725.png)

## 🌟 Project Overview

**Dolce Vita Paradiso** is designed to reflect the elegance and sophistication of a Michelin-starred dining establishment. The website focuses on:
- **Visual Storytelling**: High-fidelity AI-generated imagery and atmospheric design.
- **Smooth Interactions**: Complex animations using Framer Motion and GSAP.
- **Modern Aesthetics**: A "dark mode" luxury theme with gold accents and serif typography.
- **Responsiveness**: Fully responsive design for all devices, including a custom mobile navigation.

## ✨ Key Features

- **Hero Section**: Cinematic full-screen intro with text reveal animations and parallax effects.
- **Interactive Menus**:
    - **Culinary Highlights**: Horizontal scroll carousel showcasing signature dishes.
    - **Curated Cellar**: Elegant wine list with hover effects and detailed information.
- **Global Presence**: Location showcase for New York, Milan, and Tokyo with atmospheric imagery.
- **Team Spotlight**: "Meet the Artisans" section featuring professional portraits of the executive chef, sommelier, and sous chef.
- **Orchestrated Animations**:
    - Page transitions (Fade/Slide).
    - Scroll-triggered reveals.
    - Hover interactions (Grayscale to Color, Scaling).
    - Smooth mobile menu toggle.
- **Dynamic Content**: Centralized content management via `constants.ts` and strict typing with `types.ts`.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) 19 (via [Vite](https://vitejs.dev/))
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**:
    - [Tailwind CSS](https://tailwindcss.com/) v4
    - [Sass](https://sass-lang.com/) (Modules)
    - `clsx` & `tailwind-merge` for class utility management.
- **Animation**:
    - [Framer Motion](https://www.framer.com/motion/) (UI interactions, page transitions).
    - [GSAP](https://greensock.com/gsap/) (ScrollTrigger, complex sequences).
- **Routing**: [React Router](https://reactrouter.com/) v7.

## 🚀 Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/web-italian-restaurant.git
    cd web-italian-restaurant
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Build for production**:
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── assets/             # Static assets (images, fonts)
│   └── images/         # AI-generated high-fidelity images
├── components/
│   ├── animated/       # Wrapper components for animation (e.g., PageWrapper)
│   ├── layout/         # Layout components (Navbar, Footer)
│   └── ui/             # Reusable UI elements (Buttons, Cards, etc.)
├── layouts/            # Main layout wrapper
├── pages/              # Route pages (Home, Menu, About, Contact)
├── styles/             # Global styles and mixins
├── constants.ts        # Centralized content/data source
├── types.ts            # TypeScript interfaces and types
└── main.tsx            # Entry point
```

## 🎨 Assets & Credits

All imagery in this project was generated using advanced AI tools to ensure a consistent, high-end "dark moody food photography" aesthetic.
- **Chef Portraits**: Custom generated for Marco Rossi, Sofia Bianco, and Alessandro Neri.
- **Dish Highlights**: Photorealistic renders of Burrata, Risotto, Branzino, and Tiramisu.
- **Locations**: Atmospheric shots representing NY, Milan, and Tokyo.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---
*Created with passion for Dolce Vita Paradiso.*
