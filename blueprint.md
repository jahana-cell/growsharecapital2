# Blueprint: Artisanal Abode

This document outlines the architecture, features, and future development plans for the Artisanal Abode web application. It serves as a single source of truth for the project, ensuring consistency and a shared understanding among all stakeholders.

## Overview

Artisanal Abode is a modern, sustainable agricultural company that provides a unique and engaging user experience. The application is built with Next.js and features a responsive design, interactive components, and a clear, intuitive layout.

### Core Technologies

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Interactivity**: Framer Motion, Lucide React
- **Deployment**: Firebase
- **Security**: Firebase App Check (ReCAPTCHA v3), Strict CSP, Permissions Policy

## Design and Style

The application follows a modern, minimalist design with a focus on clean lines, a neutral color palette, and high-quality imagery. The typography is elegant and easy to read, with a clear hierarchy that guides the user's attention.

- **Colors**: A sophisticated palette of `cream-base`, `truffle-dark`, and `gold-accent` creates a warm and inviting atmosphere.
- **Fonts**: A combination of serif and sans-serif fonts ensures readability and a touch of elegance.
- **Interactivity**: Smooth animations and transitions are used to enhance the user experience and provide visual feedback.

## Features

### 1. Home Page

The home page serves as a captivating introduction to the company, featuring a full-screen video, an animated counter, and a call-to-action to explore the company's initiatives. The page is designed to be visually engaging and to encourage further exploration.

### 2. Agriculture Page

The agriculture page showcases the company's various initiatives, each with a detailed description and a link to a dedicated sub-page. The layout is clean and organized, allowing users to easily navigate and learn more about each initiative.

### 3. Contact Page

The contact page provides a user-friendly way to get in touch with the company. It includes a directory with contact information and an inquiry form that allows users to send a message directly from the website.

### 4. About Page

The about page offers a comprehensive overview of the company's history, values, and leadership team. It is designed to be informative and engaging, with a clear narrative that tells the company's story.

### 5. Security

The application implements a robust security strategy to protect user data and prevent malicious attacks. Key security features include:

- **Firebase App Check**: Protects API resources from abuse by verifying that requests originate from the authentic application.
- **Content Security Policy (CSP)**: Mitigates XSS attacks by restricting the sources of executable scripts and other resources.
- **Permissions Policy**: Disables unused browser features to reduce the attack surface.
- **Strict Transport Security (HSTS)**: Enforces HTTPS connections.
- **X-Frame-Options**: Prevents clickjacking attacks.
- **Input Validation**: Uses Zod for server-side validation of all user inputs.

## Future Development

While the application is already in a good state, there are several areas where it can be improved and expanded. The following is a list of potential features and enhancements that could be implemented in the future:

- **E-commerce**: Add an online store to sell the company's artisanal products.
- **Blog**: Create a blog to share news, updates, and stories about the company's initiatives.
- **Admin Dashboard**: Develop an admin dashboard to manage the website's content and settings.

This blueprint will be updated regularly to reflect the latest changes and to ensure that the application continues to meet the needs of its users.
