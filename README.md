# Personal Website Project

## Project Goal
The goal of this project is to build a personal website that positions Armaan Agrawal as a leader in startups, productivity, business, and technology. It emphasizes a strong personal brand with consistent branding elements, incorporating many pictures, compelling copy, and simple, intuitive navigation to appeal to laymen. The site includes an easily accessible blog that supports on-the-fly updates via CMS in markdown format. Key principles include:
- **Leadership and Authenticity**: Showcase expertise and thought leadership in startups, productivity, business, and technology through authentic content, personal stories, and insights.
- **Personal Brand Focus**: Infuse the site with a consistent brand identity, using high-quality images of Armaan, great copywriting that highlights achievements and vision, and spaced-out, simple design.
- **Holistic Scope**: Include sections for thought leadership (e.g., blog articles), project showcases, personal bio, and contact, with links to social profiles (X.com/airman416, LinkedIn.com/in/agr1, TikTok) and a downloadable resume.
- **Performance and Accessibility**: Ensure fast page loads, mobile responsiveness, and easy navigation for all audiences, including non-technical users.
- **Minimalism**: Keep the codebase small, focusing on essential features with a clean, authentic aesthetic.

The site supports an online presence by linking to external profiles and featuring a blog for sharing insights on startups, productivity, business, and technology.

## Target Audience
The website is designed to appeal to:
- **Startup Founders and Entrepreneurs**: Showcase innovative thinking, execution in startups, and productivity strategies through stories and insights.
- **Investors**: Intrigue with leadership narratives, ongoing ventures, and teasers to encourage outreach.
- **General Public and Followers**: Provide engaging, accessible content on business and technology topics, with simple navigation and visual appeal for laymen.

The design balances technical depth with relatable content for broad appeal.

## Theme and Design Principles
- **Color Scheme**: Largely black and white, with occasional green highlights (#06402B). Light-mode only; no dark-mode support.
- **Fonts**:
  - Body Text: Abril Display (serif) – Use for main text content.
    - Include: &lt;link rel="stylesheet" href="https://use.typekit.net/kyi7jre.css"&gt;
    - Styles: abril-display (regular, italic, bold, bold italic); abril-fatface (regular, italic); abril-text (regular, italic, bold, bold italic).
  - Headings: Futura PT (sans-serif) – Use for titles and headings.
    - Include: &lt;link rel="stylesheet" href="https://use.typekit.net/kyi7jre.css"&gt;
    - Styles: futura-pt (book, book oblique, heavy, heavy oblique); futura-pt-bold (bold, bold oblique).
- **Layout and Style**:
  - Ample spacing for a clean, spaced-out feel.
  - No top navigation bar; use simple, easy navigation (e.g., footer links or side menu).
  - Prominently display name and face (e.g., hero section with photo).
  - No rounded borders.
  - No hover animations, but include subtle scroll animations for engagement.
  - Keep it simple, authentic, and focused on content with many pictures integrated throughout.
  - **Landing Page Optimization**: Hero section immediately conveys who Armaan is and what he's about, with compelling copy, prominent photo, and many optimized images loading quickly. Use Astro's image optimization for fast loads, lazy-loading for non-critical images, and eager loading for initial visible pictures.
  - **Image Management**: Allow images to be uploaded and managed via Decap CMS media library, storing in the repo for automatic deployment on changes without manual redeploys.
  - **Resume Download**: Place a downloadable resume link near social links, e.g., in the footer or contact section.

## Tech Stack
The tech stack supports the design and branding goals with modernity, performance, and minimalism. It uses SSG for fast loads and island architecture for interactivity.

- **Framework**: Astro – For fast, content-focused sites with SSG. Integrate Svelte for interactive components via island architecture to minimize JS. Use Astro's built-in image component for optimization (resizing, formatting, lazy-loading).
- **Interactive Components**: Svelte – For any dynamic elements, hydrated only as needed.
- **Styling**: Tailwind CSS – Utility-first, compiled to static CSS. Configure for the theme (black/white with green accents), fonts, spacing, and design rules (no rounded borders, no hovers, scroll animations via CSS or minimal JS).
- **Analytics**: PostHog – Free analytics integration.
- **CMS**: Decap CMS – Git-based, supports markdown for blog posts and media uploads for images, allowing on-the-fly updates via admin interface with automatic Netlify deploys.
- **Other**: Markdown for blog content, Git for version control.

All tools are free and keep the codebase minimal.

## Tools and Platforms
All free with minimal setup:

- **Development Tools**: Node.js, NPM, VS Code/Cursor, Git.
- **CMS Setup (Decap CMS)**: Integrates with GitHub; admin at /admin for markdown blog updates.
- **Analytics (PostHog)**: Free account, JS snippet for tracking.
- **Deployment**: Netlify – Free, continuous deployment, SSG support, CMS integration.
- **Hosting/Repo**: GitHub – Free public repo.

## Development Guide
Follow these steps to build the site with the specified theme, fonts, and design. Run commands from project root.

### 1. Setup Environment
- Install Node.js (v18+).
- Init repo: `git init` or clone.
- Install Astro: `npm create astro@latest .` (empty template, add Svelte and Tailwind).

### 2. Configure Tech Stack
- **Tailwind CSS**: Customize config for colors (#06402B green), spacing, no rounded borders. Add font families via @font-face or Typekit links.
- **Fonts**: Add Typekit links to layout.astro; apply font families in Tailwind classes.
- **Svelte**: For islands, e.g., scroll animations (use CSS where possible).
- **Decap CMS**: Install `decap-cms-app`; setup admin.astro and config.yml for markdown blog collection and media library for image management.
- **PostHog**: Install and init client-side.
- **Pages/Structure**:
  - Hero with name, photo, compelling copy, and multiple optimized images for immediate impact.
  - Sections: Home, Projects, Blog (markdown from CMS), About/Contact.
  - Simple navigation, many images, great copy focused on leadership.
  - Implement scroll animations (e.g., fade-ins via CSS intersections).
  - Add resume download link near social links.

### 3. Implement Features
- **Theme**: Apply black/white with green highlights in Tailwind.
- **Design**: Ensure spacing, no nav bar, prominent name/face, no rounds/hovers, fast-loading pictures on landing.
- **Blog**: Fetch markdown from CMS, render with Astro, accessible via simple link.
- **Content**: Write copy emphasizing leadership; integrate pictures managed via CMS.
- **Animations**: Add scroll-based via CSS or Svelte islands.
- **Image Optimization**: Use Astro Image for resizing, webp/avif formats, lazy-loading, and eager for hero images to ensure many pictures load quickly on page load.
- **Resume**: Add a link to download resume.pdf, placed near social links.

### 4. Deployment
- Push to GitHub.
- Connect to Netlify: build `astro build`, publish `dist`.
- Enable CMS auth.

### 5. Testing and Iteration
- Dev: `npm run dev`.
- Test: Check fonts, theme, navigation, blog updates, performance.
- Update blog via CMS for on-the-fly changes.

This ensures a branded, leadership-focused site with simple, authentic design.