# 🚀 HYPERVERSE DEPLOYMENT GUIDE

Complete guide to deploying your Hyperverse character site.

## 📋 Prerequisites

- Node.js 18+ installed
- Git installed
- Account on chosen hosting platform

---

## 🏃 Local Development

### First Time Setup

```bash
# Navigate to project
cd hyperverse-site

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Development Commands

```bash
npm run dev      # Start dev server with hot reload
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Check code quality
```

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

**Why Vercel?**
- Free tier available
- Automatic deployments from Git
- Global CDN
- Zero configuration needed

**Steps:**

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```

2. **Deploy to Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Vercel auto-detects Vite config
- Click "Deploy"
- Done! Your site is live

3. **Custom Domain (Optional)**
- In Vercel dashboard, go to Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions

**Build Settings:**
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

---

### Option 2: Netlify

**Steps:**

1. **Build Locally**
```bash
npm run build
```

2. **Deploy via Netlify**
- Go to [netlify.com](https://netlify.com)
- Drag and drop your `dist` folder
- Or connect to GitHub for auto-deployments

3. **Build Settings (for Git)**
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18

**netlify.toml** (optional):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### Option 3: GitHub Pages

**Steps:**

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Update package.json**
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/hyperverse-site"
}
```

3. **Deploy**
```bash
npm run deploy
```

4. **Enable GitHub Pages**
- Go to repository Settings → Pages
- Source: Deploy from gh-pages branch
- Save

---

### Option 4: AWS S3 + CloudFront

**For larger scale deployments**

1. **Build**
```bash
npm run build
```

2. **Create S3 Bucket**
- Name: your-site-name
- Enable static website hosting
- Make bucket public

3. **Upload**
```bash
aws s3 sync dist/ s3://your-bucket-name --delete
```

4. **CloudFront (Optional)**
- Create distribution
- Origin: Your S3 bucket
- Enable HTTPS

---

## 🔧 Environment Variables

Create `.env` file for environment-specific config:

```env
# .env.production
VITE_API_URL=https://api.yourdomain.com
VITE_APP_TITLE=The Hyperverse
VITE_GA_ID=your-google-analytics-id
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

---

## 🎯 Performance Optimization

### Before Deployment

1. **Optimize Images**
```bash
# Install image optimizer
npm install --save-dev vite-plugin-imagemin
```

2. **Enable Compression**
Already configured in Vite, but ensure your hosting serves gzip/brotli.

3. **Lazy Loading**
Routes are already code-split by default with React Router.

### After Deployment

1. **Test Performance**
- Use Lighthouse in Chrome DevTools
- Target scores: 90+ in all categories

2. **Monitor**
- Set up analytics (Google Analytics, Plausible, etc.)
- Monitor error tracking (Sentry)

---

## 📱 Mobile Testing

Test on multiple devices:
```bash
# Access from mobile on same network
npm run dev -- --host
```

Then visit `http://your-local-ip:3000` from mobile.

---

## 🔒 Security Checklist

Before going live:

- [ ] Remove console.logs from production
- [ ] Enable HTTPS (automatic on Vercel/Netlify)
- [ ] Set proper CORS headers if using API
- [ ] Add security headers
- [ ] Test all forms and inputs
- [ ] Verify no sensitive data in source

---

## 🚨 Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routes Don't Work on Refresh

Add redirect rules for SPA routing:

**Vercel** (automatic)

**Netlify** - Add `_redirects` file in `public/`:
```
/*  /index.html  200
```

**Nginx**:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Slow Load Times

- Check bundle size: `npm run build`
- Analyze with: `npm install --save-dev rollup-plugin-visualizer`
- Consider lazy loading more components
- Optimize images (WebP format)

---

## 📊 Analytics Setup

### Google Analytics

1. Get GA4 tracking ID
2. Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🎨 Custom Domain Setup

### Vercel
1. Add domain in project settings
2. Update DNS:
   - A record: `76.76.21.21`
   - CNAME: `cname.vercel-dns.com`

### Netlify
1. Add domain in site settings
2. Update DNS to Netlify nameservers

---

## 🔄 CI/CD Pipeline

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 📈 Post-Launch Checklist

- [ ] Test all pages on mobile and desktop
- [ ] Verify all character links work
- [ ] Check performance with Lighthouse
- [ ] Set up analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Share on social media
- [ ] Monitor error logs
- [ ] Set up uptime monitoring

---

## 🆘 Getting Help

**Issues?**
1. Check browser console for errors
2. Verify Node version: `node --version` (should be 18+)
3. Clear browser cache
4. Try incognito mode
5. Check hosting platform status page

**Still stuck?**
- Open GitHub issue
- Email: support@attn.money
- Twitter: @attnmoney

---

## 🎉 Success Metrics

Your site is successfully deployed when:
- ✅ All pages load without errors
- ✅ Navigation works on all routes
- ✅ Character cards display properly
- ✅ Mobile experience is smooth
- ✅ Lighthouse score is 90+
- ✅ Domain is live and HTTPS is enabled

---

**"At least we have mithril!"** 🛡️

Ready to deploy? Choose your platform above and follow the steps!
