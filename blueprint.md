# Project Blueprint

## Overview

This project is a modern, professional website for GrowShare Capital, a private equity and impact investment firm. The site is built using Next.js and the App Router, and it is designed to be visually appealing, responsive, and easy to maintain. It highlights the firm's investment thesis in key sectors like real estate, agriculture, and healthcare.

## Style & Design

- **Typography:** The site uses a combination of serif and sans-serif fonts to create a professional and elegant feel. `Playfair Display` is used for headings, `Montserrat` for body text, and `Pinyon Script` for decorative accents. For the Khalui Farm page, `Cinzel` and `Manrope` are used.
- **Color Palette:** The primary color scheme is based on cream, truffle-dark, and gold-accent colors, creating a warm and sophisticated look.
- **Layout:** The layout is clean and modern, with a focus on readability and visual hierarchy. It uses a responsive grid system to ensure a good experience on all devices.
- **Components:** The UI is built with reusable React components, styled with Tailwind CSS.

## Features

- **Home Page:** A visually engaging hero section, an overview of the investment thesis, and sections for philosophy, news (The Journal), partners, and leadership.
- **News/Journal:** A section to display articles and updates.
- **Contact Page:** A form for inquiries.
- **Static Pages:** About, Leadership, etc.
- **Agriculture Section:** A page dedicated to the firm's agriculture investments.
  - **Khalui Farm Page:** A detailed page showcasing a specific agricultural project, "Khalui Farm."
  - **Ghee & Specialty Cheese Manufacturing Page:** A business case page for a value-added dairy processing facility.
  - **Community Livestock Fund Page:** An investment page for an asset-backed livestock fund.
    - **Investment Portal:** A secure page at `/agriculture/livestock/invest` for processing investments via Stripe.

## Linting and Housekeeping

I have resolved all linting errors, which included:

-   Replacing `<img>` tags with the `next/image` component for optimized image loading.
-   Fixing unescaped entities in several components.
-   Moving font loading and global styles to the root layout (`src/app/layout.tsx` and `src/app/globals.css`) for better performance and to resolve a Next.js warning.