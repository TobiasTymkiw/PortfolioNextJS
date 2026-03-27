# Technical Documentation: Portfolio Project

This directory contains the core Next.js application for the portfolio.

## 🛠️ Tech Stack & Dependencies

* **Framework**: Next.js 14 (App Router)
* **Language**: TypeScript
* **Styling**: SASS/SCSS with CSS Modules
* **Additional Libraries**:
  * `@emailjs/browser`: For sending emails directly from the contact form.
  * `react-hook-form`: Handle form validation and state.
  * `swiper`: Smooth sliders for project/experience showcase.
  * `next-sitemap`: Automatically generate SEO-friendly sitemaps.
  * `@vercel/analytics`: Real-time traffic monitoring.

## 🚀 Available Scripts

In this directory, you can run:

* `npm run dev`: Start the development server.
* `npm run build`: Build the project for production.
* `npm run start`: Start the production server.
* `npm run lint`: Run ESLint to check for code quality issues.

## 📁 Source Code Overview (`/src`)

* **app/**: Contains the main layout, global styles, and application routes.
* **Components/**: Modular UI components organized by section.
* **assets/**: Images, icons, and static material.
* **config.js**: Global site configuration (site name, URL, etc.).
* **styles/**: Global SCSS variables (`_variables.scss`), mixins, and base styles.

## 🔧 Environment Variables

To enable the contact form through EmailJS, you may need a `.env.local` file with the following keys:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🏗️ Deployment

This project is optimized for **Vercel**. Simply connect your GitHub repository to Vercel and it will handle the build and deployment automatically.

---

For more information, please refer to the [root README](../README.md).
