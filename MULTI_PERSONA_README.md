# Multi-Persona Portfolio System

This portfolio now supports **4 different persona views** from a single codebase, automatically adapting content, projects, and messaging based on the visitor's context.

## 🎯 Personas

### 1. **Software Engineer (SWE)** - Default
- **Subdomain**: `swe.jaivir.com`
- **Focus**: Full-stack development, AI applications, mobile apps
- **Featured Projects**: Impression, Workly, Full-Stack Banking, VisionAssist, Custom CPU
- **Proof Stats**: 15+ Projects, 20+ Technologies, 3+ Years Experience

### 2. **Quantitative Researcher (Quant)**
- **Subdomain**: `quant.jaivir.com`
- **Focus**: Financial modeling, machine learning, research
- **Featured Projects**: ANN Trading, JPcommerce, Project Pure, VisionAssist, Custom CPU
- **Proof Stats**: 5+ Models, 85%+ Accuracy, 3+ Research Papers

### 3. **Consulting & Strategy**
- **Subdomain**: `consulting.jaivir.com`
- **Focus**: Business development, operations, entrepreneurship
- **Featured Projects**: JPcommerce, Vehicle Restoration, Project Pure, Crypto Mining, Hackerspace
- **Proof Stats**: $100K+ Revenue, 3+ Businesses, 40%+ Profit Margins

### 4. **Mechanical Engineer**
- **Subdomain**: `eng.jaivir.com` or `engineering.jaivir.com`
- **Focus**: CAD design, prototyping, fabrication
- **Featured Projects**: Autonomous Robot, Boulder Transport, Workshop Construction, Pump Platform, Mousetrap Vehicle
- **Proof Stats**: 25+ Projects, 500+ CAD Hours, 15+ Prototypes

## 🚀 How It Works

### Persona Detection Priority
1. **URL Query Parameter**: `?track=swe` (for testing/development)
2. **Subdomain**: `swe.jaivir.com` → SWE persona
3. **Default**: Falls back to SWE persona

### Dynamic Content Adaptation
- **Headlines & Subheads**: Persona-specific positioning
- **Proof Bar**: Relevant metrics for each persona
- **Featured Projects**: Curated top 3-6 projects per persona
- **CTAs**: Persona-appropriate call-to-action buttons
- **Navigation**: Persona badge in navbar

## 🛠️ Implementation Details

### Core Files
- `src/lib/persona.js` - Persona detection and configuration
- `src/contexts/PersonaContext.js` - React context provider
- `src/components/Navbar.js` - Persona switcher dropdown
- `src/pages/Home.js` - Persona-specific home page
- `src/pages/Projects.js` - Persona-specific projects page

### Persona Configuration
Each persona has:
- **Identity**: Name, short name, headline, subhead
- **Proof Stats**: 3 key metrics with values
- **Featured Projects**: Home page (3) and projects page (≤6) selections
- **Styling**: Primary color and visual identity
- **Description**: Persona-specific summary

### Project Curation
- **Featured Projects**: Highlighted at top of each persona view
- **Other Projects**: Accessible via tabs but not prominently featured
- **Smart Filtering**: Projects automatically categorized by relevance

## 🌐 Deployment & Subdomains

### GitHub Pages Setup
1. **Main Domain**: `jaivir.com` (defaults to SWE persona)
2. **Subdomains**: 
   - `swe.jaivir.com` → Software Engineer
   - `quant.jaivir.com` → Quantitative Researcher
   - `consulting.jaivir.com` → Consulting & Strategy
   - `eng.jaivir.com` → Mechanical Engineer

### DNS Configuration
```
CNAME swe.jaivir.com → username.github.io
CNAME quant.jaivir.com → username.github.io
CNAME consulting.jaivir.com → username.github.io
CNAME eng.jaivir.com → username.github.io
```

### Local Development Testing
Use query parameters to test different personas:
- `http://localhost:3000/?track=swe`
- `http://localhost:3000/?track=quant`
- `http://localhost:3000/?track=consulting`
- `http://localhost:3000/?track=engineering`

## 🎨 Customization

### Adding New Personas
1. **Update `personaConfigs`** in `src/lib/persona.js`
2. **Add subdomain mapping** in `subToPersona`
3. **Select featured projects** for the new persona
4. **Customize proof stats** and messaging

### Modifying Persona Content
- **Headlines**: Edit `headline` and `subhead` fields
- **Proof Stats**: Update `proofStats` array with new metrics
- **Featured Projects**: Modify `featuredHomeProjects` and `featuredProjectsPage` arrays
- **Description**: Update `description` field for persona summary

### Styling Changes
- **Colors**: Modify `primaryColor` in persona config
- **CSS Variables**: Update color schemes in CSS files
- **Components**: Customize persona-specific styling

## 🔧 Technical Features

### React Context
- **PersonaProvider**: Wraps entire app
- **usePersona Hook**: Access current persona and config
- **Real-time Updates**: Persona changes update all components

### Responsive Design
- **Mobile-First**: Works on all device sizes
- **Persona Switcher**: Collapsible dropdown on mobile
- **Adaptive Layouts**: Content adjusts to persona context

### Performance
- **Lazy Loading**: Projects load as needed
- **Optimized Images**: Efficient image handling
- **Minimal Re-renders**: Smart component updates

## 📱 User Experience

### Persona Switching
- **Navbar Dropdown**: Quick persona selection
- **Visual Feedback**: Active persona highlighted
- **Smooth Transitions**: Animated content updates

### Content Discovery
- **Featured Projects**: Most relevant work highlighted
- **Category Tabs**: Easy filtering of all projects
- **Consistent Navigation**: Same structure across personas

### Accessibility
- **Screen Reader Support**: Proper ARIA labels
- **Keyboard Navigation**: Full keyboard support
- **High Contrast**: Readable text and elements

## 🚀 Future Enhancements

### Planned Features
- **Analytics**: Track persona usage and engagement
- **A/B Testing**: Test different content variations
- **Personalization**: Remember user preferences
- **SEO Optimization**: Persona-specific meta tags

### Integration Possibilities
- **CMS Integration**: Dynamic content management
- **API Backend**: Real-time content updates
- **Analytics Dashboard**: Performance insights
- **Multi-language**: International persona support

## 🐛 Troubleshooting

### Common Issues
1. **Persona Not Detecting**: Check subdomain or query parameter
2. **Content Not Updating**: Verify PersonaProvider is wrapping app
3. **Styling Issues**: Check CSS variable definitions
4. **Build Errors**: Ensure all imports are correct

### Debug Tools
- **Persona Test Page**: `/persona-test` route for debugging
- **Console Logs**: Check browser console for errors
- **React DevTools**: Inspect context values
- **Network Tab**: Verify subdomain routing

## 📚 Resources

### Documentation
- [React Context API](https://reactjs.org/docs/context.html)
- [React Router](https://reactrouter.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [GitHub Pages](https://pages.github.com/)

### Code Examples
- **Persona Detection**: See `detectPersona()` function
- **Context Usage**: Check `usePersona()` hook examples
- **Component Integration**: Review Home.js and Projects.js

---

**Built with ❤️ using React, Tailwind CSS, and modern web technologies**
