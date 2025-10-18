# Decap CMS Draft/Publish Workflow

This setup allows you to save changes in Decap CMS without triggering builds immediately. You can make multiple changes and then publish them all at once.

## How It Works

1. **Draft Mode**: When you save changes in Decap CMS, they're saved to a draft branch
2. **No Builds**: Netlify is configured to skip builds on the draft branch
3. **Publish When Ready**: Use the publish script to merge changes to main and trigger a build

## Using the Workflow

### Making Changes
1. Go to your Decap CMS admin panel (`/admin`)
2. Make your changes as usual
3. Click "Save" - this saves to the draft branch (no build triggered)
4. Repeat for multiple changes

### Publishing Changes
When you're ready to publish all your changes:

```bash
# From your project root
./scripts/publish-drafts.sh
```

This script will:
- Commit any pending changes
- Merge them to the main branch
- Push to trigger a Netlify build
- Your site will be updated with all changes

### Alternative: Manual Publishing
You can also publish manually:
1. Commit your changes: `git add . && git commit -m "Update content"`
2. Push to main: `git push origin main`
3. Netlify will automatically build and deploy

## Configuration Details

- **Decap CMS**: Configured with `publish_mode: editorial_workflow`
- **Netlify**: Set to only build on main branch, skip builds on draft branch
- **Git**: Uses draft branch for saves, main branch for published content

## Benefits

- ✅ Make multiple changes without triggering builds
- ✅ Review all changes before publishing
- ✅ Single build for multiple content updates
- ✅ Faster content editing workflow
- ✅ Reduced build minutes usage
