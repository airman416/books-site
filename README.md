# Personal Website Project

## Project Goal
The goal of this project is to build a personal website that balances professionalism with authenticity. It serves as a holistic online presence for Armaan Agrawal, showcasing technical skills, personal thoughts, and experiences. The site will highlight technical projects while incorporating personal elements like blog articles to appeal to both technical and non-technical audiences. Key principles include:
- **Professional yet Authentic**: Present skills and achievements credibly without being overly corporate; infuse personality to build genuine connections.
- **Content-Driven UI**: Focus on high-quality, impressive content with a simplistic design that elevates fundamentals (e.g., clean typography, fast loading, intuitive navigation) rather than flashy animations.
- **Holistic Scope**: Include sections for technical work (e.g., project showcases), personal info, and a blog for thoughts/articles. Leave some investor-facing details intriguing to encourage outreach.
- **Performance and Accessibility**: Ensure fast page loads, mobile responsiveness, and broad appeal.
- **Minimalism**: Keep the codebase as small as possible while achieving the goals—avoid unnecessary features or bloat.

The site will support online presence by linking to external profiles: X.com/airman416, LinkedIn.com/in/agr1, and TikTok.

## Target Audience
The website is designed to appeal to a diverse group:
- **Recruiters for Software Engineering Jobs**: Emphasize technical skills, project fit, and achievements to demonstrate job readiness. Include resume-like sections with code samples, tech stack details, and quantifiable impacts.
- **Startup Founders**: Showcase drive, execution ability, and a "wow factor" through innovative project stories, personal anecdotes of overcoming challenges, and dynamic elements (e.g., interactive demos if minimal).
- **Investors**: Highlight potential and intrigue with partial stories or teasers (e.g., "Ongoing ventures—let's chat") to leave questions unanswered and encourage direct contact.
- **General Public**: Support broader online presence with engaging, accessible content that ties into social media (e.g., embedded feeds or links to X, LinkedIn, TikTok). Make it relatable for non-technical visitors through clear language and visuals.

The design appeals to technical users (e.g., code snippets, deep dives) and non-technical ones (e.g., narrative blogs, simple navigation).

## Tech Stack
The tech stack is chosen for modernity, performance, minimal code footprint, and free tools. It uses a modern framework for styling and speed, with a focus on static site generation (SSG) for lightning-fast loads. The site prioritizes SSG deployment and uses Astro's island architecture for interactive components to ensure only necessary JavaScript is loaded.

- **Framework**: Astro – A modern framework for building fast, content-focused websites with SSG by default. Integrate Svelte for interactive components using Astro's island architecture, which enables partial hydration—loading JavaScript only for dynamic "islands" on the page, keeping the rest static for optimal performance. This setup ensures lightning-fast load times by minimizing client-side JS.
- **Interactive Components**: Svelte – Used within Astro for any interactive elements (e.g., forms, dynamic demos). Svelte components are compiled to efficient vanilla JS, and with island architecture, they hydrate only when needed, prioritizing speed. Avoid SvelteKit as a full framework; instead, use Svelte directly in Astro for simplicity and minimalism.
- **Styling**: Tailwind CSS – Utility-first CSS framework integrated via Astro's official Tailwind integration. It generates pure CSS without requiring any JavaScript for styling—styles are compiled to static CSS files during build. This ensures all styling is CSS-only, with no runtime JS dependency. Tailwind integrates seamlessly with Astro components (including Svelte islands) by applying classes directly in markup, and PostCSS handles processing during the Astro build process.
- **Analytics**: PostHog – Free, open-source analytics tool. Integrate via a simple script tag or NPM package to track user behavior without compromising privacy or adding code complexity.
- **CMS**: Decap CMS (formerly Netlify CMS) – A free, open-source, Git-based CMS. It allows quick content changes (e.g., updating blog posts or project details) via a user-friendly admin interface. No database needed; content is stored in Git repo files (e.g., Markdown). Chosen for its seamless integration with Netlify, minimal setup, and zero cost.
- **Other**: 
  - Markdown for content (e.g., blogs/articles) – Simple and free for holistic, personal writing.
  - Git for version control – Free and standard.

All components are free (open-source with generous free tiers). The codebase will be minimal: A basic Astro app structure with only essential pages (e.g., home, projects, blog, about/contact), Tailwind for styling, Decap CMS config, Svelte for islands, and PostHog script.

## Tools and Platforms
All tools and platforms are free, with minimal setup to keep development straightforward.

- **Development Tools**:
  - **Node.js and NPM/Yarn**: For running Astro locally (free, install via official site or package manager).
  - **VS Code or Cursor**: Recommended IDE for editing (free).
  - **Git**: For version control and CMS integration (free).

- **CMS Setup (Decap CMS)**:
  - Integrates directly with the Git repo on GitHub.
  - Admin interface at `/admin` for editing content without code changes.
  - Content stored as Markdown/YAML files in the repo (e.g., `/content/blog/` for articles).

- **Analytics (PostHog)**:
  - Sign up for a free account at posthog.com.
  - Add the JS snippet to the Astro layout file for tracking, ensuring it's loaded only if necessary (e.g., not in static islands).

- **Deployment Platform**: Netlify – Free for personal sites. Provides continuous deployment from GitHub, automatic HTTPS, and built-in support for Decap CMS and Astro SSG builds. Deploy by linking the GitHub repo and configuring builds. Ensure SSG mode for lightning-fast, pre-rendered pages.

- **Hosting/Repo**: GitHub – Free public repo for the project code and content.

No paid tools are used. Ensure all integrations are via free tiers (e.g., PostHog's free plan covers basic analytics).

## Development Guide
This section explains every step from scratch so another agent can take over. Assume basic web dev knowledge; all commands are run in the terminal from the project root (`/Users/armaanagrawal/Documents/GitHub/Personal-Website`). The guide ensures the site is built with SSG, island architecture for interactivity, Tailwind for CSS-only styling, and prioritizes fast loads.

### 1. Setup Environment
- Install Node.js (v18+): Download from nodejs.org or use `nvm install 18`.
- Clone/init repo: If not already, `git init` or clone from GitHub.
- Install Astro: `npm create astro@latest .` (choose empty template, add Svelte integration when prompted: yes to Svelte, yes to TypeScript if desired, yes to Tailwind).

### 2. Configure Tech Stack
- **Tailwind CSS**: Added during Astro setup. Customize in `astro.config.mjs` and `tailwind.config.js` for simplistic styles (e.g., focus on sans-serif fonts, neutral colors). Ensure all styles are compiled to static CSS—no JS required for styling. Use Tailwind classes in Astro and Svelte components.
- **Svelte Integration**: Added during setup. Create Svelte components in `src/components/` and use them as islands in Astro pages with the `client:load` (or other directives) to enable partial hydration only for interactive parts, keeping the site fast and mostly static.
- **Decap CMS**:
  - Install: `npm install decap-cms-app`.
  - Create `src/pages/admin.astro` with the CMS import and config.
  - Create `static/admin/config.yml` (follow decapcms.org/docs for minimal config, integrating with Astro's content collections if using them).
  - Content files: Store in `/src/content/` or similar, fetched via Astro's content API for SSG rendering.
- **PostHog**:
  - Install: `npm install posthog-js`.
  - Initialize in a layout or base Astro file: Import and use `posthog.init()` with your project ID, but wrap in a client-side script to avoid loading in static parts.
- **Pages/Structure** (Minimal):
  - Use Astro's file-based routing: Create pages in `src/pages/` (e.g., index.astro for home, projects/index.astro).
  - Home: Intro, links to socials.
  - Projects: Technical showcases, with Svelte islands for any interactive demos.
  - Blog: Articles with personal thoughts, rendered from Markdown.
  - About/Contact: Holistic personal info, investor teasers.
  - Ensure all pages are SSG by default; use islands for any JS needs.

### 3. Implement Features
- **UI Design**: Use Tailwind for responsive, content-focused layout (e.g., grid for projects, clean prose for blogs). Ensure fast loads with Astro's built-in optimizations (image handling, asset bundling). All styling via CSS classes—no JS for styles.
- **Content Integration**: Use Astro's content collections or `gray-matter` to parse Markdown from CMS files, pre-rendering everything in SSG builds.
- **Island Architecture**: For any interactive component (e.g., contact form), wrap in Svelte and use Astro's &lt;Component client:load /&gt; to hydrate only that island, keeping the page static elsewhere for lightning-fast performance.
- **Analytics**: Track page views and events minimally, loading JS only client-side.
- **Social Links**: Add hyperlinks/icons for X, LinkedIn, TikTok.

### 4. Deployment
- Push to GitHub.
- Sign up at netlify.com, connect repo.
- Set build command: `astro build`, publish dir: `dist`.
- Enable Identity for Decap CMS auth (free). Netlify will handle SSG deployment automatically.

### 5. Testing and Iteration
- Local dev: `npm run dev`.
- Test speed: Use Lighthouse in Chrome to verify lightning-fast loads and SSG efficiency.
- Update content via CMS admin; commit changes trigger Netlify redeploys.

This setup ensures a minimal, effective site with SSG, island architecture, CSS-only styling, and prioritized performance. Expand only as needed.