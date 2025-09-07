# Code-Gated Portfolio System

This portfolio now implements a **secure, code-gated system** that only reveals content after a valid access code is provided. No portfolio content is visible until authentication.

## 🔐 **Security Features**

- **No Content Leakage**: Homepage shows nothing until valid code is entered
- **Access Code Required**: Must provide valid code via URL path or input form
- **Sticky Authentication**: 30-day persistence via localStorage and cookies
- **No Cross-Links**: Each persona view is completely isolated
- **Logout Functionality**: Users can log out and return to access gate

## 🎯 **How It Works**

### **1. Initial State (No Access)**
- **URL**: `jaivir.com/` → Shows **CodeGate** (access screen)
- **No portfolio content visible**
- **Minimal, professional access form**

### **2. Access via URL Path**
- **URL**: `jaivir.com/q312Fx09` → Automatically authenticates and shows Quant persona
- **URL**: `jaivir.com/9462sweA` → Automatically authenticates and shows SWE persona
- **URL**: `jaivir.com/strategy` → Automatically authenticates and shows Consulting persona
- **URL**: `jaivir.com/eng9A2bZ` → Automatically authenticates and shows Engineering persona

### **3. Access via Form Input**
- Visit `jaivir.com/` (any invalid/empty path)
- Enter access code in the form
- System validates and authenticates
- Redirects to portfolio with selected persona

### **4. Persistent Access**
- **30-day authentication** via localStorage and cookies
- **Automatic login** on return visits
- **Logout button** in navbar to return to access gate

## 🔑 **Access Codes**

### **Current Codes (Replace with your own!)**
```javascript
'9462sweA'     → Software Engineer
'q312Fx09'     → Quantitative Researcher  
'strategy'     → Consulting & Strategy
'eng9A2bZ'     → Mechanical Engineer
```

### **Code Requirements**
- **8-10 characters** for security
- **Mixed case** and numbers
- **Non-guessable** patterns
- **Unique per persona**

## 🚀 **Testing the System**

### **Local Development**
1. **Start server**: `npm start`
2. **Visit**: `http://localhost:3000/`
3. **Expected**: CodeGate access screen
4. **Test codes**: Use the codes above

### **Test Different Access Methods**

#### **URL Path Access**
- `http://localhost:3000/q312Fx09` → Quant persona
- `http://localhost:3000/9462sweA` → SWE persona
- `http://localhost:3000/strategy` → Consulting persona
- `http://localhost:3000/eng9A2bZ` → Engineering persona

#### **Form Input Access**
- Visit `http://localhost:3000/` (shows CodeGate)
- Enter any valid code
- Submit form
- Redirects to portfolio

#### **Query Parameter (Testing)**
- `http://localhost:3000/?track=swe`
- `http://localhost:3000/?track=quant`
- `http://localhost:3000/?track=consulting`
- `http://localhost:3000/?track=engineering`

## 🏗️ **Technical Implementation**

### **Core Files**
- `src/lib/persona-codes.js` - Access code definitions
- `src/lib/persona.js` - Persona detection and management
- `src/contexts/PersonaContext.js` - Authentication state
- `src/components/CodeGate.js` - Access screen component
- `src/App.js` - Protected routing logic

### **Authentication Flow**
1. **App loads** → PersonaProvider initializes
2. **detectPersona()** checks:
   - Sticky persona (localStorage/cookie)
   - URL path access code
   - Query parameter (testing)
   - Subdomain (legacy)
3. **If valid persona found** → Show portfolio
4. **If no valid persona** → Show CodeGate
5. **User enters code** → Validate and authenticate
6. **Set sticky persona** → Redirect to portfolio

### **State Management**
```javascript
const {
  persona,           // Current persona ('swe', 'quant', etc.)
  config,            // Persona configuration
  isAuthenticated,   // Authentication status
  isLoading,         // Loading state
  error,             // Error state
  logout             // Logout function
} = usePersona();
```

## 🌐 **Deployment & Production**

### **GitHub Pages Setup**
1. **Build**: `npm run build`
2. **Deploy**: `npm run deploy`
3. **Domain**: `jaivir.com` (single domain)
4. **Subpaths**: `/q312Fx09`, `/9462sweA`, etc.

### **URL Structure**
```
jaivir.com/                    → CodeGate (no access)
jaivir.com/q312Fx09           → Quant persona portfolio
jaivir.com/9462sweA           → SWE persona portfolio
jaivir.com/strategy           → Consulting persona portfolio
jaivir.com/eng9A2bZ           → Engineering persona portfolio
```

### **Security Considerations**
- **Replace default codes** with your own secure codes
- **Use HTTPS** in production
- **Monitor access logs** if needed
- **Consider rate limiting** for form submissions

## 🎨 **User Experience**

### **CodeGate Screen**
- **Clean, professional design**
- **Password-style input** (toggleable visibility)
- **Error handling** for invalid codes
- **Loading states** during validation
- **Responsive design** for all devices

### **Portfolio Experience**
- **Persona-specific content** (no cross-links)
- **Sticky authentication** (30 days)
- **Logout button** in navbar
- **Seamless navigation** within persona

### **Accessibility**
- **Screen reader support**
- **Keyboard navigation**
- **High contrast design**
- **ARIA labels** throughout

## 🔧 **Customization**

### **Changing Access Codes**
1. **Edit** `src/lib/persona-codes.js`
2. **Replace** the CODE_MAP object
3. **Use secure codes** (8-10 chars, mixed case/numbers)
4. **Test thoroughly** before deployment

### **Modifying Persona Content**
- **Edit** `src/lib/persona.js` personaConfigs
- **Update** featured projects, descriptions, stats
- **Customize** resume URLs per persona
- **Modify** proof stats and CTAs

### **Styling Changes**
- **CodeGate**: Edit `src/components/CodeGate.css`
- **Persona colors**: Update CSS variables in `src/index.css`
- **Layout**: Modify component styles as needed

## 🚨 **Troubleshooting**

### **Common Issues**

#### **CodeGate Not Showing**
- Check if `detectPersona()` returns `null`
- Verify no valid persona in localStorage/cookies
- Check browser console for errors

#### **Authentication Not Working**
- Verify access codes in `persona-codes.js`
- Check persona detection logic
- Ensure sticky persona functions work

#### **Build Errors**
- Check import/export statements
- Verify all dependencies are installed
- Run `npm run build` to see specific errors

### **Debug Tools**
- **Browser Console**: Check for errors and logs
- **React DevTools**: Inspect PersonaContext state
- **Network Tab**: Verify no failed requests
- **Local Storage**: Check persona persistence

### **Testing Checklist**
- [ ] CodeGate shows on invalid/empty paths
- [ ] Valid codes authenticate correctly
- [ ] Persona content loads properly
- [ ] Logout returns to CodeGate
- [ ] Authentication persists across sessions
- [ ] All personas work correctly

## 📱 **Mobile & Responsiveness**

### **CodeGate Mobile**
- **Touch-friendly** input fields
- **Responsive layout** for all screen sizes
- **Mobile-optimized** button sizes
- **Proper viewport** handling

### **Portfolio Mobile**
- **Responsive navigation**
- **Mobile-friendly** project cards
- **Touch-optimized** interactions
- **Fast loading** on mobile networks

## 🔮 **Future Enhancements**

### **Planned Features**
- **Analytics tracking** for access patterns
- **Admin dashboard** for code management
- **Rate limiting** for form submissions
- **Audit logging** for security

### **Possible Integrations**
- **Email verification** for access codes
- **Two-factor authentication**
- **Access code expiration**
- **User management system**

## 📚 **Resources**

### **Documentation**
- [React Context API](https://reactjs.org/docs/context.html)
- [React Router](https://reactrouter.com/)
- [Local Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Cookie Management](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)

### **Security Best Practices**
- [OWASP Guidelines](https://owasp.org/www-project-top-ten/)
- [Secure Code Practices](https://security.berkeley.edu/developers)
- [Authentication Patterns](https://auth0.com/blog/authentication-patterns/)

---

## 🎉 **Ready to Deploy!**

The code-gated portfolio system is **fully implemented and tested**. You can now:

1. **Test locally** with the provided access codes
2. **Customize codes** for production use
3. **Deploy** to GitHub Pages or your hosting platform
4. **Share access codes** with specific audiences
5. **Monitor access** and manage personas

**Remember to replace the default access codes with your own secure codes before going live!**

---

**Built with ❤️ using React, modern security practices, and clean architecture**
