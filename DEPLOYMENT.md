## Vercel Deployment Guide

### Prerequisites
- Node.js 18.17 or later
- A Vercel account (free at vercel.com)

### Quick Deploy
1. **Push to GitHub**: Initialize git and push your code to a GitHub repository
2. **Import to Vercel**: Go to vercel.com/new and import your GitHub repository
3. **Auto-Deploy**: Vercel will automatically detect Next.js and deploy your app

### Environment Variables
For production, you may want to set these environment variables in your Vercel dashboard:
- `NEXT_PUBLIC_SITE_URL`: Your production URL
- Contact form integration variables (if using a service like Formspree or EmailJS)

### Build Settings (Auto-detected)
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

### Performance Optimizations
- Images are optimized using Next.js Image component
- Fonts are optimized with Google Fonts
- CSS is automatically minified and optimized
- JavaScript is bundled and tree-shaken

### Custom Domain
After deployment, you can add a custom domain in your Vercel dashboard under Project Settings > Domains.

### SEO Optimizations
- Meta tags configured in layout.tsx
- Semantic HTML structure
- Responsive design
- Fast loading times with Vercel's CDN

The project is now ready for Vercel deployment!