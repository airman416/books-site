# CDN Workflow for CMS Image Uploads

This guide explains how to handle images uploaded through the CMS to work with your Cloudflare R2 CDN.

## Current Setup

- **CMS uploads go to**: `public/images/`
- **CDN serves from**: Cloudflare R2 bucket
- **CDN URL**: `https://pub-8c3cb37dcf064449a354151a885b5892.r2.dev`

## Option 1: Manual Upload Workflow (Easiest) ⭐

**Best for**: Small number of images, occasional uploads

### How it works:
1. Upload image in CMS (saves to `public/images/`)
2. Manually upload to Cloudflare R2 bucket
3. Image is served from CDN

### Steps:

1. **Upload image in CMS**
   - Go to `/admin` in your site
   - Upload image for blog post, home page, etc.
   - Image saves to `public/images/filename.jpg`

2. **Upload to Cloudflare R2**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to R2 → your bucket (`armaanagrawal-images`)
   - Click "Upload" button
   - Select the file from `public/images/filename.jpg`
   - Upload

3. **Done!**
   - The image is now available at: `https://pub-8c3cb37dcf064449a354151a885b5892.r2.dev/filename.jpg`
   - The CDN configuration already handles serving it

### Tips:
- After uploading via CMS, commit and push to GitHub
- Then manually upload the same file to R2 bucket
- Keep filenames consistent between local and CDN

---

## Option 2: Automatic GitHub Actions Workflow

**Best for**: Frequent uploads, automated workflow

### Setup:

1. **Create GitHub Action** (`.github/workflows/sync-images.yml`):

```yaml
name: Sync Images to CDN

on:
  push:
    branches:
      - main
    paths:
      - 'public/images/**'

jobs:
  sync-images:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Upload to Cloudflare R2
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.CLOUDFLARE_R2_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.CLOUDFLARE_R2_SECRET_ACCESS_KEY }}
          aws-endpoint-url: https://${{ secrets.CLOUDFLARE_ACCOUNT_ID }}.r2.cloudflarestorage.com
      
      - name: Sync images to R2
        run: |
          aws s3 sync public/images/ s3://armaanagrawal-images/ \
            --exclude "*" \
            --include "*.jpg" \
            --include "*.png" \
            --include "*.jpeg" \
            --include "*.gif" \
            --include "*.webp"
```

2. **Add secrets to GitHub**:
   - Go to Settings → Secrets → Actions
   - Add:
     - `CLOUDFLARE_R2_ACCESS_KEY_ID`
     - `CLOUDFLARE_R2_SECRET_ACCESS_KEY`
     - `CLOUDFLARE_ACCOUNT_ID` (from Cloudflare dashboard)

3. **Get R2 credentials from Cloudflare**:
   - Go to R2 → Manage R2 API Tokens
   - Create API token with read/write permissions
   - Copy Access Key ID and Secret Access Key

### How it works:
- When you upload images via CMS and push to GitHub
- GitHub Action automatically uploads new images to R2
- No manual steps needed!

---

## Option 3: Use Cloud Storage as CMS Backend

**Best for**: Enterprise setup, professional workflow

### Setup Decap CMS with Cloud Storage:

Decap CMS can be configured to upload directly to cloud storage instead of GitHub.

1. **Update `public/admin/config.yml`**:

```yaml
backend:
  name: azure
  container_name: your-container
  path: "public/images"
  
  # Or use S3-compatible storage
  backend:
    name: s3
    bucket: armaanagrawal-images
    region: auto
    endpoint: https://pub-8c3cb37dcf064449a354151a885b5892.r2.dev
```

**Note**: Decap CMS doesn't natively support R2, but you can use a proxy or custom backend.

---

## Option 4: Hybrid Approach (Recommended)

**Best for**: Balance of automation and control

### Setup:

1. **Keep local copies** (for development):
   - CMS uploads to `public/images/`
   - Keep files in Git for local development

2. **Manual CDN upload** (for production):
   - After uploading via CMS, manually upload to R2
   - Or use the GitHub Action above

3. **Two-tier system**:
   - **Development**: Images from `public/images/`
   - **Production**: Images from CDN (when `cdn.enabled: true`)

### Benefits:
- No complex setup
- Fast local development
- CDN for production
- Full control over what goes to CDN

---

## Recommended Workflow

**For now, use Option 1 (Manual Upload):**

1. Upload image in CMS at `/admin`
2. Commit and push to GitHub
3. Manually upload same file to Cloudflare R2 bucket
4. Image is served from CDN

**When you're ready for automation:**
- Set up GitHub Action (Option 2)
- Images will sync automatically

---

## Testing Your Setup

1. Upload a test image via CMS
2. Check it exists in `public/images/`
3. Upload manually to R2
4. Verify it loads from: `https://pub-8c3cb37dcf064449a354151a885b5892.r2.dev/filename.jpg`
5. Check your site - image should load from CDN!

## Troubleshooting

**Image not loading from CDN?**
- Verify CDN is enabled in `siteSettings.json`
- Check the file exists in R2 bucket
- Verify the filename matches exactly (case-sensitive)

**Want to fallback to local images?**
- Set `cdn.enabled: false` in `siteSettings.json`
- Images will load from `public/images/`

## Next Steps

1. Choose your workflow (Option 1 for now)
2. Test with one image
3. Document your process
4. Consider automation when needed
