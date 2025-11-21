🌱 FloraVision – Frontend Internship Assignment

A fully responsive React + Tailwind CSS UI based on the provided Figma design.

📸 Preview

A modern plant-themed landing page featuring hero banners, trending products, customer reviews, and O₂ plant highlights.

🚀 Tech Stack

React.js (Vite)

Tailwind CSS

JavaScript (ES6+)

Responsive UI

Figma → Code Implementation

🎨 Features Implemented
✅ 1. Fully Responsive Hero Section

Gradient overlay background

Title & subtitle typography matching Figma

Buttons with hover transitions

Interactive plant showcase card with pagination indicator

✅ 2. Trending Plants Section

Glassmorphism card effect

Product description, pricing & CTA buttons

Smooth spacing and alignment based on Figma

✅ 3. Top Selling Plants

Reusable <Card /> component

Clean layout using Tailwind grid

Image-centric product display

✅ 4. Customer Review Section

Cards with rounded corners

Star ratings

Profile image badges

Heading decorated with Figma-style gradient border

✅ 5. Best O₂ Plants Section

Hero-style product highlight

Pagination control (01/04)

Explore button matching design

✅ 6. Footer

Logo + description

Quick Links

Email subscription UI

Social icons aligned across the screen

🧩 Components Structure
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Trending.jsx
│   ├── TopSell.jsx
│   ├── Card.jsx
│   ├── Reviews.jsx
│   ├── O2Section.jsx
│   └── Footer.jsx
│
├── assets/
│   └── All plant images, icons, SVGs
│
└── App.jsx


Each UI block in the Figma file was converted into a clean modular component to maintain reusability and readability.

📦 Installation & Setup

Clone the repo:

git clone <your-repo-link>
cd <your-project-folder>


Install dependencies:

npm install


Start development server:

npm run dev


Now open:

http://localhost:5173/

🎯 Figma → Code Accuracy

All spacing, padding, colors, and typography closely match the Figma design

Implemented Figma-specific UI elements like:

Glassmorphism cards

Rounded 20px containers

Gradient border headings

Centered layouts with correct hierarchy

📁 What I Learned

Converting Figma designs into pixel-perfect React components

Using Tailwind for fast and efficient styling

Working with custom gradients and border-image techniques

Improving component reusability

Building responsive layouts for all screen sizes

🧪 Future Improvements (If Needed)

Add animations using Framer Motion

Convert static carousels into fully functional sliders

Add backend for product data

Add dark/light theme toggle
