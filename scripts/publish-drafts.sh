#!/bin/bash

# Script to publish draft changes to main branch
# This will trigger a Netlify build

echo "🔄 Publishing draft changes to main branch..."

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Check if there are any changes to commit
if git diff --quiet && git diff --cached --quiet; then
    echo "ℹ️  No changes to publish"
    exit 0
fi

# Get current branch
current_branch=$(git branch --show-current)

# If we're on main, just commit and push
if [ "$current_branch" = "main" ]; then
    echo "📝 Committing changes to main branch..."
    git add .
    git commit -m "Update content via Decap CMS"
    git push origin main
    echo "✅ Changes published! Netlify build will start automatically."
else
    echo "📝 Committing changes to $current_branch..."
    git add .
    git commit -m "Draft changes via Decap CMS"
    
    echo "🔄 Switching to main branch..."
    git checkout main
    
    echo "📥 Merging changes from $current_branch..."
    git merge $current_branch
    
    echo "🚀 Pushing to main branch..."
    git push origin main
    
    echo "✅ Changes published! Netlify build will start automatically."
fi

echo ""
echo "🎉 Your changes are now live! Check your Netlify dashboard for build status."
