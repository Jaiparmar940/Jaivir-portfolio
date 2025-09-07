#!/bin/bash

# Simple deployment script for Jaivir Portfolio
# This script builds the React app and deploys it to GitHub Pages

echo "🚀 Starting deployment process..."

# Build the React app
echo "📦 Building React app..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix the errors and try again."
    exit 1
fi

echo "✅ Build successful!"

# Copy built files to root directory
echo "📋 Copying built files to root..."
cp build/index.html .
cp build/asset-manifest.json .
cp build/manifest.json .
cp build/favicon.ico .
cp -r build/static .
cp -r build/icons .
cp build/*.pdf .

echo "✅ Files copied successfully!"

# Commit and push changes
echo "📤 Committing and pushing changes..."
git add .
git commit -m "Deploy latest changes to GitHub Pages

- Rebuild and deploy React app
- Update static assets
- Deploy to jaivirparmar.com"

git push origin main

if [ $? -eq 0 ]; then
    echo "🎉 Deployment successful!"
    echo "🌐 Your site is now live at: https://jaivirparmar.com"
    echo "🔗 Consulting variant: https://jaivirparmar.com/strategy"
else
    echo "❌ Push failed! Please check your git configuration."
    exit 1
fi
