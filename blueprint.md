# Project Blueprint

## Overview

This project is a modern, professional website for GrowShare Capital, a private equity and impact investment firm. The site is built using Next.js and the App Router, and it is designed to be visually appealing, responsive, and easy to maintain. It highlights the firm's investment thesis in key sectors like real estate, agriculture, and healthcare.

## Style & Design

- **Aesthetic:** The entire website has been updated to a "Creamy Luxury" standard. This design language emphasizes a premium, elegant, and modern user experience.
- **Color Palette:** The primary color scheme is based on a refined palette of creamy off-whites (`#FDFCFB`), deep truffle-dark browns (`#3E3B36`), and sophisticated gold accents (`#D4AF37`), creating a warm, opulent, and high-contrast look.
- **Typography:** The site uses a combination of serif (`Cinzel`) and sans-serif (`Manrope`) fonts to create a professional and elegant feel, ensuring readability and a strong visual hierarchy.
- **Layout:** The layout is clean and modern, with generous spacing and a responsive grid system to ensure a flawless experience on all devices, from mobile to desktop.
- **Components:** The UI is built with reusable React components, styled with Tailwind CSS and ShadCN UI, all customized to align with the luxury aesthetic.

## Features

- **Header and Navigation:**
    - A redesigned, sticky header provides consistent navigation.
    - A full-screen, animated mobile menu ensures a seamless experience on smaller devices.
    - Navigation links are centrally managed in `src/lib/constants.ts` for consistency.
- **Home Page:** A visually engaging hero section, an overview of the investment thesis, and sections for philosophy, news (The Journal), partners, and leadership.
- **News/Journal:** A section to display articles and updates.
    - **News Listing Page:** A new page at `/news` displays a filterable and searchable list of all news stories.
    - **Dynamic Story Pages:** Individual story pages are dynamically generated at `/news/[slug]`, each with a unique hero image, content, and navigation to other stories.
- **Real Estate Page:** A dedicated page at `/real-estate` that outlines the firm's investment strategy in workforce housing, community-centric retail hubs, and mixed-use properties.
- **Healthcare Page:** A new page at `/healthcare` that details the firm's focus on investing in high-acuity medical facilities, bridging the rural care gap, and supporting preventative wellness ecosystems.
- **Contact Page:** A form for inquiries with a modern and clean design.
- **Static Pages:** About, Leadership, etc.
- **Agriculture Section:** A page dedicated to the firm's agriculture investments.
  - **Khalui Farm Page:** A detailed page showcasing a specific agricultural project, "Khalui Farm."
  - **Ghee & Specialty Cheese Manufacturing Page:** A business case page for a value-added dairy processing facility.
  - **Community Livestock Fund Page:** An investment page for an asset-backed livestock fund.
    - **Investment Portal:** A secure page at `/agriculture/livestock/invest` for processing investments via Stripe.

## Linting and Housekeeping

I have resolved all linting errors and performed general housekeeping, which included:

-   Replacing `<img>` tags with the `next/image` component for optimized image loading.
-   Fixing unescaped entities in several components.
-   Moving font loading and global styles to the root layout (`src/app/layout.tsx` and `src/app/globals.css`) for better performance.
-   Removed a global CSS rule that was improperly hiding the header and footer.
