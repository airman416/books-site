# Armaan Agrawal - Personal Website

A modern, minimalist personal website built with Astro, showcasing my work in startups, productivity, business, and technology.

## 🎨 Design System

### Color Palette
- **Primary Green**: `#06402B` - Used for buttons, tags, links, and accents throughout the site
- **Black**: `#000000` - Used for primary text and footer background
- **White**: `#FFFFFF` - Background color and text on dark backgrounds

### Typography
- **Headings**: Futura PT (Bold, sans-serif)
- **Body Text**: Abril Display (serif)
- Fonts loaded via Adobe Typekit

### Design Principles
- Minimalist, clean aesthetic
- No rounded borders (sharp, rectangular design)
- No hover transitions (instant state changes)
- Strong green color presence across interactive elements

### Interaction Paradigms
1. **Black text links**: Turn green (#06402B) on hover
2. **White text links**: Turn bold on hover
3. **No green text**: All text starts as either black or white, never green

## 🚀 Project Structure

```text
/
├── public/
│   ├── admin/           # Netlify CMS configuration
│   ├── images/          # Static images
│   ├── favicon.svg
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── posthog.astro      # Analytics component
│   │   └── ScrollReveal.svelte # Animation component
│   ├── content/
│   │   ├── blog/              # Blog posts (Markdown)
│   │   └── config.ts          # Content collections config
│   ├── layouts/
│   │   └── Layout.astro       # Main layout with header & footer
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   ├── about.astro        # About page
│   │   ├── projects.astro     # Projects page
│   │   └── blog/
│   │       ├── index.astro    # Blog listing
│   │       └── [...slug].astro # Individual blog posts
│   └── styles/
│       └── global.css         # Global styles and design tokens
└── package.json
```

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Fast, content-focused static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4 - Utility-first CSS framework
- **Content**: Markdown-based blog with Astro Content Collections
- **CMS**: Netlify CMS for content management
- **Analytics**: PostHog for user analytics
- **Deployment**: Netlify (automatic deployments from main branch)
- **Fonts**: Adobe Typekit (Futura PT, Abril Display)

## 📦 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🎯 Features

### Navigation
- **Persistent Initials Badge**: "A.A." in top left corner on all pages, always links to homepage
- **Footer Navigation**: Comprehensive footer with site links, social media, and resume download
- **Responsive Design**: Mobile-first approach with smooth responsive breakpoints

### Homepage
- Hero section with profile image
- "What I Do" section
- Featured work preview
- Call-to-action section with green background
- Two primary buttons: "Read My Writing" and "View Projects"

### Blog
- Markdown-based blog posts with frontmatter
- Post listing with dates, descriptions, and tags (green background with white text)
- Individual post pages with full content
- Tags displayed with green background
- Automatic date formatting
- Back navigation to blog listing
- Netilfy CMS for easy content management

### Projects
- Project showcase grid
- Project tags with green background and white text
- Images and descriptions for each project
- Status indicators (In Progress, Research, Completed)

### About
- Personal bio and background
- Focus areas with green accent border
- Current work description
- Social media links
- Resume download button (green background)

### Analytics
- PostHog integration for user behavior tracking
- Privacy-focused analytics

## 🎨 Design & Styling

### Color Usage
- **Green (#06402B)**:
  - Primary buttons (e.g., "Read My Writing", "Download Resume")
  - Button borders for outlined buttons
  - Tag backgrounds (blog and projects)
  - Link hover states (black text only)
  - Call-to-action sections
  - Accent borders
- **Black (#000000)**:
  - Primary text color
  - Footer background
  - Navigation initials
- **White (#FFFFFF)**:
  - Background color
  - Text on dark backgrounds (footer, green sections, buttons)

### Layout Components
- Consistent max-width containers for content
- Generous spacing using custom spacing scale
- Section-based page structure
- Fixed positioning for initials badge

## 🔗 SEO & Meta

- Canonical URLs
- Open Graph tags
- Twitter Card support
- Custom meta descriptions per page
- Sitemap generation (handled by Astro)

## 📝 Content Management

### Blog Posts
Blog posts are stored in `src/content/blog/` as Markdown files with frontmatter:

```markdown
---
title: "Post Title"
description: "Post description"
date: 2025-01-15
tags: ["tag1", "tag2"]
---

Your content here...
```

### Netlify CMS
Access the CMS at `/admin` to manage blog posts through a visual interface.

## 🚀 Deployment

The site is configured for automatic deployment on Netlify:
- Push to `main` branch triggers automatic build and deploy
- Build command: `npm run build`
- Publish directory: `dist`
- Configuration in `netlify.toml`

## 📄 License

© 2025 Armaan Agrawal. All rights reserved.

## 🤝 Contact

- **X (Twitter)**: [@airman416](https://x.com/airman416)
- **LinkedIn**: [agr1](https://linkedin.com/in/agr1)
- **TikTok**: [@armaanagrawal5](https://tiktok.com/@armaanagrawal5)