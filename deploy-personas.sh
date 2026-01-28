#!/bin/bash

# Multi-Persona Portfolio Deployment Script
# This script helps deploy the portfolio with persona-specific subdomains

echo "🚀 Multi-Persona Portfolio Deployment Script"
echo "============================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Build the project
echo "📦 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

echo "✅ Build successful!"

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
npm run deploy

if [ $? -ne 0 ]; then
    echo "❌ Deployment failed. Please check your GitHub Pages configuration."
    exit 1
fi

echo "✅ Deployment successful!"

echo ""
echo "🌐 Next Steps for Subdomain Setup:"
echo "=================================="
echo ""
echo "1. Configure DNS Records:"
echo "   - Add CNAME records for each persona:"
echo "     * swe.jaivir.com → username.github.io"
echo "     * quant.jaivir.com → username.github.io"
echo "     * consulting.jaivir.com → username.github.io"
echo "     * eng.jaivir.com → username.github.io"
echo ""
echo "2. Test Each Persona:"
echo "   - Main site: https://jaivir.com (defaults to SWE)"
echo "   - SWE: https://swe.jaivir.com"
echo "   - Quant: https://quant.jaivir.com"
echo "   - Consulting: https://consulting.jaivir.com"
echo "   - Engineering: https://eng.jaivir.com"
echo ""
echo "3. Verify Persona Detection:"
echo "   - Each subdomain should show different content"
echo "   - Featured projects should change per persona"
echo "   - Proof stats should be persona-specific"
echo ""
echo "4. Test Persona Switcher:"
echo "   - Use the dropdown in the navbar to switch personas"
echo "   - Content should update dynamically"
echo "   - URL should reflect the selected persona"
echo ""
echo "🎉 Your multi-persona portfolio is now live!"
echo ""
echo "📚 For more information, see MULTI_PERSONA_README.md"
