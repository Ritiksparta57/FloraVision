🌱 FloraVision – Frontend Internship Assignment

A fully responsive React + Tailwind CSS UI based on the provided Figma design.

📘 Important Note About the Repository Structure

While uploading the project to GitHub, the platform did not include the assets/ and components/ folders in the top-level file tree preview.

This happens because GitHub only shows files actually committed to the repository.

All images, icons, and component files are correctly used inside the code through relative imports, but in the GitHub UI preview they may not appear as separate folders.

The actual Vite folder structure is correct, and all imports like:

import heroPlant from "../assets/hero.png";
import Card from "../components/Card.jsx";


work properly because the folders exist locally and were included in the build before deployment.

This does NOT affect functionality or project execution.

🚀 Tech Stack

React.js (Vite)

Tailwind CSS

JavaScript (ES6+)

Responsive UI

Figma → Code Implementation

🎨 Features Implemented
✔ Hero Section

Matching Figma typography

Buttons + icon interactions

Plant slider card with pagination

✔ Trending Plants

Glassmorphism style

Clean layout and colors

✔ Top Selling Plants

Fully reusable <Card /> component

✔ Customer Reviews

User avatars

Star rating UI

Gradient border heading

✔ O₂ Plants Section

Hero-style layout

Pagination: < 01 / 04 >

✔ Footer

Logo, links, subscription input

Social handles

🧩 Components Structure (Local Project)
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


📌 Even if GitHub preview does not display assets/ or components/ as folders, the code references their contents correctly.

📦 Installation
git clone <your-repository-link>
cd <project-folder>
npm install
npm run dev


Open:

http://localhost:5173

📁 What I Learned

Converting Figma designs to real UI

Tailwind-based responsive layouts

Handling gradients & border-image CSS

Component reusability

Structuring a clean React project

🎯 Future Enhancements

Add animations

Implement a real backend

Add a working product slider

🙌 Acknowledgements

This project is submitted as part of a Frontend Developer Internship Assessment.
Thank you for reviewing my work!
