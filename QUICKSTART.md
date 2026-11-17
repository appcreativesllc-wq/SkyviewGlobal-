# SkyView Electronics - Quick Start Guide

## Get the Site Running in 2 Minutes

### 1. Install Dependencies
```bash
cd /workspaces/SkyviewGlobal-
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to: **http://localhost:3000**

You're done! The site is now running.

---

## What You Can Explore

### Homepage
- Beautiful hero section with value proposition
- Featured products showcase
- FAQ section
- Call-to-action buttons

### Shop & Browse
- **URL**: http://localhost:3000/shop
- Search products by name
- Filter by camera type (Solar, 4G, Wi-Fi)
- Sort by price, name, or newest
- Adjust price range with sliders

### Product Details
- **URL**: Click any product card
- View full specifications
- See all features
- Check stock status
- Get related product recommendations

### Information Pages
- **About**: http://localhost:3000/about
- **Contact**: http://localhost:3000/contact
- **FAQ**: http://localhost:3000/faq
- **Delivery Info**: http://localhost:3000/delivery
- **Returns Policy**: http://localhost:3000/returns
- **Privacy**: http://localhost:3000/privacy
- **Terms**: http://localhost:3000/terms

---

## Production Build

### Build for Production
```bash
npm run build
npm start
```

This creates an optimized version ready for deployment.

---

## Project Structure Quick Reference

```
app/              ← All pages
├── page.tsx      ← Homepage
├── shop/         ← Product catalog
├── product/      ← Individual products
├── about/        ← About page
└── ...

components/       ← Reusable components
└── layout/
    ├── Header.tsx
    └── Footer.tsx

lib/              ← Data & utilities
├── products.ts   ← All product info
├── types.ts      ← Data types
└── utils.ts      ← Helper functions
```

---

## Make Changes

### Update Product Info
Edit `lib/products.ts`:
```typescript
{
  id: 'product-id',
  name: 'Product Name',
  price: 1000,  // Change this
  // other fields...
}
```

### Update Business Contact
Edit `components/layout/Footer.tsx` and `app/contact/page.tsx`:
```typescript
// Find and update:
// - Phone numbers
// - Email addresses
// - WhatsApp links
// - Business hours
```

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'premium-blue': '#1769E0',  // Change this
  'midnight-navy': '#0B1728', // Or this
}
```

---

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for TypeScript errors
npx tsc --noEmit

# Lint code
npm run lint
```

---

## Deployment to Vercel

### Quick Deploy
1. Push code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Click Deploy

Vercel automatically builds and deploys your changes.

---

## Browser Testing

### Desktop
- Open http://localhost:3000
- Use Firefox DevTools to test mobile sizes

### Mobile
On same network:
- Find your machine IP: `ipconfig getifaddr en0` (Mac) or `hostname -I` (Linux)
- Open: `http://YOUR_IP:3000`
- Test on actual mobile device

---

## Next: Add Shopping Cart

Ready to build Phase 3? Here's what comes next:

1. **Shopping Cart** (store items in localStorage)
2. **Checkout Form** (collect customer info)
3. **Payment Integration** (Paystack/Hubtel)
4. **Order Tracking** (track order status)

The foundation is ready. The data models are defined. Just implement the forms and APIs.

---

## Troubleshooting

### "Port 3000 is already in use"
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### "Module not found"
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### "Looks like you forgot to install dependencies"
```bash
npm install
```

---

## Documentation Files

- **README.md** - Full project documentation
- **DEVELOPMENT.md** - Detailed development guide
- **IMPLEMENTATION.md** - Comprehensive implementation details
- **package.json** - Dependencies and scripts

---

## Key Features

✅ 9 Security Cameras  
✅ Full Search & Filtering  
✅ Beautiful Responsive Design  
✅ Professional Product Pages  
✅ Complete Information Pages  
✅ Ghana-Specific Features  
✅ WhatsApp Integration  
✅ Mobile Optimized  

---

## Questions?

- Check **DEVELOPMENT.md** for detailed guides
- Review code comments in components
- Look at existing pages as examples

---

**Happy coding! 🚀**
