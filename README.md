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
The tech stack is chosen for modernity, performance, minimal code footprint, and free tools. It uses a modern framework for styling and speed, with a focus on static generation for fast loads.

- **Framework**: Next.js (React-based) – A modern, minimal framework for building fast, SEO-optimized websites. Use it for server-side rendering (SSR) or static site generation (SSG) to ensure quick page loads. It's lightweight, with built-in image optimization and routing, reducing boilerplate code.
- **Styling**: Tailwind CSS – Utility-first CSS framework for rapid, responsive design. It allows simplistic, impressive UIs without custom CSS bloat. Combine with Next.js for efficient bundling and minimal output size.
- **Analytics**: PostHog – Free, open-source analytics tool. Integrate via a simple script tag or NPM package to track user behavior without compromising privacy or adding code complexity.
- **CMS**: Decap CMS (formerly Netlify CMS) – A free, open-source, Git-based CMS. It allows quick content changes (e.g., updating blog posts or project details) via a user-friendly admin interface. No database needed; content is stored in Git repo files (e.g., Markdown). Chosen for its seamless integration with Netlify, minimal setup, and zero cost.
- **Other**: 
  - Markdown for content (e.g., blogs/articles) – Simple and free for holistic, personal writing.
  - Git for version control – Free and standard.

All components are free (open-source with generous free tiers). The codebase will be minimal: A basic Next.js app structure with only essential pages (e.g., home, projects, blog, about/contact), Tailwind for styling, Decap CMS config, and PostHog script.

## Tools and Platforms
All tools and platforms are free, with minimal setup to keep development straightforward.

- **Development Tools**:
  - **Node.js and NPM/Yarn**: For running Next.js locally (free, install via official site or package manager).
  - **VS Code or Cursor**: Recommended IDE for editing (free).
  - **Git**: For version control and CMS integration (free).

- **CMS Setup (Decap CMS)**:
  - Integrates directly with the Git repo on GitHub.
  - Admin interface at `/admin` for editing content without code changes.
  - Content stored as Markdown/YAML files in the repo (e.g., `/content/blog/` for articles).

- **Analytics (PostHog)**:
  - Sign up for a free account at posthog.com.
  - Add the JS snippet to the Next.js layout file for tracking.

- **Deployment Platform**: Netlify – Free for personal sites. Provides continuous deployment from GitHub, automatic HTTPS, and built-in support for Decap CMS. Deploy by linking the GitHub repo and configuring builds.

- **Hosting/Repo**: GitHub – Free public repo for the project code and content.

No paid tools are used. Ensure all integrations are via free tiers (e.g., PostHog's free plan covers basic analytics).

## Development Guide
This section explains every step from scratch so another agent can take over. Assume basic web dev knowledge; all commands are run in the terminal from the project root (`/Users/armaanagrawal/Documents/GitHub/Personal-Website`).

### 1. Setup Environment
- Install Node.js (v18+): Download from nodejs.org or use `nvm install 18`.
- Clone/init repo: If not already, `git init` or clone from GitHub.
- Install Next.js: `npx create-next-app@latest .` (choose TypeScript: yes, Tailwind: yes, App Router: yes for minimal setup).

### 2. Configure Tech Stack
- **Tailwind CSS**: Already included in create-next-app. Customize in `tailwind.config.js` for simplistic styles (e.g., focus on sans-serif fonts, neutral colors).
- **Decap CMS**:
  - Install: `npm install decap-cms-app`.
  - Create `admin/index.html` and `admin/config.yml` (follow decapcms.org/docs for minimal config).
  - Example config: Define collections for blog/posts and projects.
  - Content files: Store in `/public/content/` or similar, fetched via Next.js API routes or getStaticProps.
- **PostHog**:
  - Install: `npm install posthog-js`.
  - Initialize in `_app.js` or layout: Import and use `posthog.init()` with your project ID.
- **Pages/Structure** (Minimal):
  - Home: Intro, links to socials.
  - Projects: Technical showcases.
  - Blog: Articles with personal thoughts.
  - About/Contact: Holistic personal info, investor teasers.
  - Use Next.js App Router for routing.

### 3. Implement Features
- **UI Design**: Use Tailwind for responsive, content-focused layout (e.g., grid for projects, clean prose for blogs). Ensure fast loads with Next.js Image and static exports.
- **Content Integration**: Use `gray-matter` or similar to parse Markdown from CMS files.
- **Analytics**: Track page views and events minimally.
- **Social Links**: Add hyperlinks/icons for X, LinkedIn, TikTok.

### 4. Deployment
- Push to GitHub.
- Sign up at netlify.com, connect repo.
- Set build command: `next build`, publish dir: `.next`.
- Enable Identity for Decap CMS auth (free).

### 5. Testing and Iteration
- Local dev: `npm run dev`.
- Test speed: Use Lighthouse in Chrome.
- Update content via CMS admin; commit changes trigger Netlify redeploys.

This setup ensures a minimal, effective site. Expand only as needed.