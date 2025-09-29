# Deployment Guide

This guide covers deploying your personal website to Netlify with Decap CMS integration.

## Prerequisites

- GitHub account
- Netlify account (free tier works)
- PostHog account (free tier works)

## Step 1: Push to GitHub

```bash
git add .
git commit -m "Initial website setup"
git push origin main
```

## Step 2: Deploy to Netlify

1. Go to [Netlify](https://netlify.com) and sign in
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub and select this repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Add environment variable:
   - **Key**: `POSTHOG_API_KEY`
   - **Value**: Your PostHog API key
6. Click "Deploy site"

## Step 3: Setup Custom Domain

1. In Netlify site settings, go to "Domain management"
2. Add custom domain: `armaanagrawal.com`
3. Follow Netlify's instructions to update DNS settings
4. Enable HTTPS (automatic with Netlify)

## Step 4: Enable Decap CMS Authentication

### Option A: Netlify Identity (Recommended for simplicity)

1. In Netlify site settings, go to "Identity"
2. Click "Enable Identity"
3. Under "Registration preferences", select "Invite only"
4. Under "Services" → "Git Gateway", click "Enable Git Gateway"
5. Go to "Identity" tab and click "Invite users"
6. Enter your email address
7. Check your email and accept the invitation
8. Access CMS at: `https://armaanagrawal.com/admin`

### Option B: GitHub OAuth (Alternative)

1. Go to GitHub Settings → Developer settings → OAuth Apps
2. Create new OAuth App:
   - **Homepage URL**: `https://armaanagrawal.com`
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`
3. Copy Client ID and Client Secret
4. In Netlify site settings → Access control → OAuth
5. Install GitHub OAuth provider with your credentials

## Step 5: Configure PostHog

1. Go to [PostHog](https://posthog.com) and sign in
2. Create a new project or use existing
3. Copy your Project API Key
4. Add to Netlify environment variables (if not done in Step 2)
5. Redeploy site to apply changes

## Step 6: Test Everything

1. Visit your site: `https://armaanagrawal.com`
2. Test all pages: Home, Projects, Blog, About
3. Test blog post pages
4. Access CMS: `https://armaanagrawal.com/admin`
5. Try creating a test blog post via CMS
6. Verify PostHog is tracking (check PostHog dashboard)

## Updating Content

### Via CMS (Recommended)

1. Go to `https://armaanagrawal.com/admin`
2. Login with your credentials
3. Create/edit blog posts
4. Upload images via media library
5. Save and publish
6. Netlify will automatically rebuild and deploy

### Via Git (Alternative)

1. Edit markdown files in `src/content/blog/`
2. Commit and push changes
3. Netlify automatically rebuilds and deploys

## Troubleshooting

### CMS Not Loading

- Check that Git Gateway is enabled in Netlify Identity
- Verify you're logged in to Netlify Identity
- Clear browser cache and try again

### Images Not Showing

- Ensure images are in `public/images/` directory
- Check image paths start with `/images/`
- Verify images are committed to Git

### Build Failing

- Check build logs in Netlify
- Verify all dependencies are in `package.json`
- Ensure Node.js version is 18+
- Check for TypeScript errors

### PostHog Not Tracking

- Verify API key is set in Netlify environment variables
- Check browser console for errors
- Confirm PostHog script loads (Network tab)
- Check PostHog dashboard for events

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Variables

Create `.env` file for local development:

```
POSTHOG_API_KEY=your_actual_api_key
```

Never commit `.env` to Git!

## Content Management Tips

### Adding Blog Posts via CMS

1. Login to CMS at `/admin`
2. Click "Blog Posts" → "New Blog Post"
3. Fill in all fields
4. Upload featured image (optional)
5. Write content in markdown
6. Save draft or publish
7. Wait for Netlify to rebuild (1-2 minutes)

### Adding Images

1. In CMS, use the image field or click "Media"
2. Upload images (will be stored in `public/images/`)
3. Reference in markdown: `![Alt text](/images/filename.jpg)`

### Markdown Formatting

```markdown
# Heading 1
## Heading 2
### Heading 3

**bold text**
*italic text*

[Link text](https://url.com)
![Image alt](/images/image.jpg)

- Bullet point
- Another point

1. Numbered list
2. Another item
```

## Performance Optimization

- Images are lazy-loaded by default
- Hero images use eager loading
- Static site generation for fast loads
- Minimal JavaScript (Svelte islands)
- Tailwind CSS compiled to static CSS

## Security Notes

- CMS access is restricted (invite-only)
- Environment variables are secure in Netlify
- HTTPS enabled by default
- No sensitive data in Git

## Support

If you encounter issues:

1. Check Netlify build logs
2. Review browser console for errors
3. Verify all steps in this guide
4. Check Astro documentation: https://docs.astro.build
5. Check Decap CMS docs: https://decapcms.org/docs
