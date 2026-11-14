# Personal Portfolio — Leon Antonio Puerto

A responsive personal portfolio website showcasing my personal information, educational background, technical skills, projects, and achievements. Built with React and Vite.

## Live Demo

Deployed on Vercel: _(add your Vercel URL here after deployment)_

## Sections

| Section | Description |
|---------|-------------|
| Home | Name, professional introduction, and tagline |
| About | Brief personal introduction and educational background |
| Skills | Technical and programming skills with proficiency levels |
| Experience | Education, leadership, and continuous learning |
| Projects | Completed projects and activities |
| Certifications | Microsoft Office Specialist certifications |
| Contact | Email, LinkedIn, and phone |

## Features

- Responsive single-page layout that works on desktop and mobile
- Animated hero section with a typing effect tagline
- About section with educational background
- Skills section with animated proficiency bars
- Experience timeline
- Projects carousel with navigation arrows
- Certifications gallery with credential verification links
- Contact section with email, LinkedIn, and phone
- Scroll progress indicator and reveal-on-scroll animations
- Sticky navbar with active-section highlighting and a mobile hamburger menu

## Tech Stack

- React 19
- Vite 8
- React Router DOM 7
- React Icons

## Getting Started

### Prerequisites

- Node.js v18 or later
- npm

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/tallicedmatchalatte/personal-portfolio.git
   cd personal-portfolio
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── About/
│   ├── Certifications/
│   ├── Contact/
│   ├── Experience/
│   ├── Footer/
│   ├── Hero/
│   ├── Navbar/
│   ├── Projects/
│   ├── Skills/
│   └── common/RevealOnScroll/
├── data/          # Content data files
├── hooks/         # Custom React hooks
├── pages/         # Route pages
└── App.jsx
```

All content is driven by data files in `src/data/`, making it easy to update projects, skills, certifications, and contact information without touching the components.

## Deployment

This site is deployed on Vercel. The repository is connected for continuous deployment from the `main` branch.

## License

This project is for educational purposes as part of IT ELEC 4 – Web Systems and Technologies 2.
