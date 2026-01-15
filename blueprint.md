# Project Blueprint

## Overview

This project is a modern, professional website for GrowShare Capital, a private equity and impact investment firm. The site is built using Next.js and the App Router, and it is designed to be visually appealing, responsive, and easy to maintain. It highlights the firm's investment thesis in key sectors like real estate, agriculture, and healthcare.

## Style & Design

- **Typography:** The site uses a combination of serif and sans-serif fonts to create a professional and elegant feel. `Playfair Display` is used for headings, `Montserrat` for body text, and `Pinyon Script` for decorative accents. For the Khalui Farm page, `Cinzel` and `Manrope` will be used.
- **Color Palette:** The primary color scheme is based on cream, truffle-dark, and gold-accent colors, creating a warm and sophisticated look.
- **Layout:** The layout is clean and modern, with a focus on readability and visual hierarchy. It uses a responsive grid system to ensure a good experience on all devices.
- **Components:** The UI is built with reusable React components, styled with Tailwind CSS.

## Features

- **Home Page:** A visually engaging hero section, an overview of the investment thesis, and sections for philosophy, news (The Journal), partners, and leadership.
- **News/Journal:** A section to display articles and updates.
- **Contact Page:** A form for inquiries.
- **Static Pages:** About, Leadership, etc.
- **Agriculture Section:** A page dedicated to the firm's agriculture investments.
  - **Khalui Farm Page:** A new, detailed page showcasing a specific agricultural project, "Khalui Farm." This page will have its own distinct visual identity while remaining consistent with the overall brand.

## Current Plan: Add Khalui Farm Page

- **Create New Route:** Add a new page at the route `/agriculture/khalui-farm`.
- **Refactor Provided Code:** The monolithic code block for the Khalui Farm page will be broken down into smaller, more manageable components.
  - `page.tsx`: The server component entry point with metadata.
  - `client-page.tsx`: The main client-side component that assembles the page.
  - `components/`: A new directory for page-specific components (e.g., Hero, Process, Gallery, FAQ).
  - `config.ts`: A file to store configuration data like API keys, contact info, and image URLs.
- **Integrate Fonts:** Add the `Cinzel` and `Manrope` Google Fonts to the root layout to be used on the Khalui Farm page.
- **Update Navigation:** Add a link from the main `/agriculture` page to the new `/agriculture/khalui-farm` page.
- **Ensure Consistency:** Remove hardcoded header/footer from the provided code and ensure the page uses the existing shared layout for a consistent look and feel.
