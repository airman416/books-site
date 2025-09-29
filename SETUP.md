# Local Development Setup

Quick guide to get the website running locally.

## Prerequisites

- Node.js 18+ installed
- Git installed
- Code editor (VS Code or Cursor recommended)

## Initial Setup

1. **Clone or navigate to the repository**
   ```bash
   cd /path/to/Personal-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your PostHog API key:
   ```
   POSTHOG_API_KEY=your_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:4321`

## Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## Project Structure

```
/
├── public/              # Static assets
│   ├── admin/          # Decap CMS files
│   ├── images/         # Image uploads
│   ├── resume.pdf      # Your resume
│   └── favicon.svg     # Site icon
├── src/
│   ├── components/     # Reusable components
│   │   └── ScrollReveal.svelte
│   ├── content/        # Content collections
│   │   ├── blog/       # Blog posts (markdown)
│   │   └── config.ts   # Content schema
│   ├── layouts/        # Page layouts
│   │   └── Layout.astro
│   ├── pages/          # Routes
│   │   ├── index.astro        # Home page
│   │   ├── about.astro        # About page
│   │   ├── projects.astro     # Projects page
│   │   └── blog/              # Blog pages
│   │       ├── index.astro    # Blog listing
│   │       └── [...slug].astro # Blog post template
│   └── styles/         # Global styles
│       └── global.css  # Tailwind + custom CSS
├── astro.config.mjs    # Astro configuration
├── package.json        # Dependencies
├── tsconfig.json       # TypeScript config
└── .gitignore         # Git ignore rules
```

## Making Changes

### Updating Content

**Option 1: Edit Files Directly**
- Blog posts: `src/content/blog/*.md`
- Pages: `src/pages/*.astro`
- Images: `public/images/`

**Option 2: Use CMS Locally**
1. Uncomment `local_backend: true` in `public/admin/config.yml`
2. Run `npx decap-server` in one terminal
3. Run `npm run dev` in another terminal
4. Access CMS at `http://localhost:4321/admin`

### Adding New Pages

Create new `.astro` files in `src/pages/`:

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Page Title" description="Page description">
  <!-- Your content here -->
</Layout>
```

### Adding New Blog Posts

Create new `.md` files in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Brief description"
date: 2025-02-01
tags: ["tag1", "tag2"]
---

Your blog post content in markdown...
```

### Styling

- Use Tailwind utility classes in components
- Custom styles go in `src/styles/global.css`
- Component-specific styles use `<style>` tags

**Key Design Rules:**
- No rounded borders
- Colors: Black (#000000), White (#FFFFFF), Green (#06402B)
- Fonts: Futura PT (headings), Abril Display (body)
- Ample spacing between elements
- No hover animations

## Testing

### Test Locally

```bash
npm run build
npm run preview
```

Visit `http://localhost:4321` to test the production build.

### Check for Issues

- Verify all pages load correctly
- Test navigation links
- Check blog post rendering
- Verify images load
- Test mobile responsiveness
- Check social links work

## Common Tasks

### Replace Placeholder Images

1. Add your images to `public/images/`
2. Update image paths in components:
   - `src/pages/index.astro` (hero and sections)
   - `src/pages/projects.astro` (project images)

### Update Resume

Replace `public/resume.pdf` with your actual resume.

### Update Social Links

Edit links in `src/layouts/Layout.astro` footer section.

### Customize Content

All placeholder content is in:
- `src/pages/index.astro` (home page copy)
- `src/pages/about.astro` (about page copy)
- `src/pages/projects.astro` (project descriptions)
- `src/content/blog/*.md` (blog posts)

### Modify Colors

Edit theme colors in `src/styles/global.css`:

```css
@theme {
  --color-green: #06402B;
  --color-black: #000000;
  --color-white: #FFFFFF;
}
```

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 4321
lsof -ti:4321 | xargs kill -9

# Or specify different port
npm run dev -- --port 3000
```

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .astro dist node_modules
npm install
npm run build
```

### TypeScript Errors

```bash
# Regenerate types
npm run astro sync
```

### Images Not Loading

- Ensure images are in `public/images/`
- Use paths starting with `/images/` not `./images/`
- Check file names match (case-sensitive)

## Next Steps

1. Replace placeholder content with your actual content
2. Add your real images
3. Update resume.pdf
4. Test everything locally
5. Follow DEPLOYMENT.md to deploy to Netlify

## Need Help?

- Astro Docs: https://docs.astro.build
- Tailwind CSS: https://tailwindcss.com/docs
- Svelte Docs: https://svelte.dev/docs
- Decap CMS: https://decapcms.org/docs
