# Asaal Essential Oils Website

A premium, fully-functional Shopify-style website for Asaal - a UK-based essential oils and wellness brand. Built with modern web technologies and featuring a sophisticated black/white/green aesthetic.

## 🌿 Features

### Design & UX
- **Modern Minimalist Design**: Clean, sophisticated aesthetic with sage green accents
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Premium Typography**: Playfair Display for headings, Inter for body text
- **Smooth Animations**: Anime.js, p5.js particles, and scroll-triggered effects
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation support

### E-commerce Functionality
- **Complete Shopping Cart**: Add/remove items, quantity controls, persistent storage
- **Product Filtering**: Category, price range, and benefit filters
- **Product Search**: Real-time search with autocomplete
- **Product Variants**: Size and price options with dynamic updates
- **Wishlist System**: Save favorite products for later
- **UK Localization**: GBP currency (£), UK shipping, VAT compliance

### Interactive Features
- **Animated Hero Section**: Typewriter effects with Typed.js
- **Particle Background**: Organic p5.js animation system
- **Product Carousels**: Splide.js for featured and related products
- **FAQ Accordion**: Smooth expand/collapse functionality
- **Newsletter Signup**: 10% discount code generation
- **Cookie Consent**: GDPR-compliant cookie banner

### Pages Included
1. **index.html** - Homepage with hero, featured products, and benefits
2. **shop.html** - Full product catalog with filtering and search
3. **product.html** - Detailed product page with variants and reviews
4. **about.html** - Brand story, values, and company information
5. **contact.html** - Contact form, FAQ, and business information

## 🛠 Technical Stack

### Core Technologies
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Tailwind CSS for rapid styling
- **JavaScript ES6+**: Modern JavaScript with classes and modules
- **Responsive Design**: Mobile-first approach with breakpoints

### Libraries Used
- **Anime.js**: Smooth micro-interactions and animations
- **Typed.js**: Typewriter effects for hero headlines
- **p5.js**: Particle system and organic animations
- **Splide.js**: Product carousels and image galleries
- **ECharts.js**: Data visualization (ready for analytics)

### Performance Optimizations
- **Lazy Loading**: Images and animations load on demand
- **Local Storage**: Cart and preferences persist across sessions
- **Reduced Motion**: Respects user accessibility preferences
- **Optimized Assets**: Compressed images and minified code

## 📁 File Structure

```
/
├── index.html              # Homepage
├── shop.html               # Product catalog
├── product.html            # Product detail page
├── about.html              # About us page
├── contact.html            # Contact & FAQ page
├── main.js                 # Core JavaScript functionality
├── resources/              # Assets folder
│   ├── hero-wellness.jpg   # Hero background image
│   ├── logo-asaal.png      # Brand logo
│   └── product-collection.jpg # Product showcase image
├── design.md               # Design style guide
├── interaction.md          # Interaction design documentation
├── outline.md              # Project structure outline
└── README.md               # This file
```

## 🚀 Deployment

### Local Development
1. Clone or download the project files
2. Navigate to the project directory
3. Start a local server:
   ```bash
   python -m http.server 8000
   ```
4. Open `http://localhost:8000` in your browser

### Production Deployment
1. **Upload all files** to your web server maintaining the directory structure
2. **Ensure HTTPS** is enabled for security and SEO
3. **Configure domain** to point to the index.html file
4. **Set up redirects** for SEO optimization:
   - `www.asaal.co.uk` → `asaal.co.uk`
   - `http` → `https`

### Shopify Integration (Future)
This website is designed to be easily integrated with Shopify:
1. **Theme Files**: Convert HTML templates to Shopify Liquid
2. **Product Data**: Import product CSV to Shopify admin
3. **Collections**: Set up automated collections based on tags
4. **Apps**: Install recommended Shopify apps (see below)

## 🎨 Customization

### Brand Colors
- **Primary Green**: `#00A86B` (sage green)
- **Light Green**: `#E8F5E8` (backgrounds)
- **Charcoal**: `#2D2D2D` (dark text)
- **White**: `#FFFFFF` (backgrounds)

### Typography
- **Display Font**: Playfair Display (headings)
- **Body Font**: Inter (body text)
- **Font Sizes**: Responsive scaling from 14px to 48px+

### Images
- **Hero Images**: Replace `resources/hero-wellness.jpg`
- **Product Images**: Update image URLs in HTML files
- **Logo**: Replace `resources/logo-asaal.png`

## 🔧 Configuration

### Contact Information
Update in `contact.html`:
- Email: `support@asaal.co.uk`
- Phone: `+44 20 3987 6543`
- Business address and hours

### Social Media Links
Update social media URLs in footer of all HTML files

### Analytics & Tracking
Add your tracking codes:
- Google Analytics 4
- Meta Pixel (Facebook)
- Google Tag Manager

## 📊 Shopify App Recommendations

### Essential Apps
1. **SEO**: Yoast SEO or SEO Manager
2. **Reviews**: Shopify Product Reviews or Judge.me
3. **Email Marketing**: Klaviyo or Mailchimp
4. **Image Optimization**: TinyIMG or Image Optimizer

### Advanced Features
1. **Loyalty**: Smile.io or LoyaltyLion
2. **Subscriptions**: ReCharge or Bold Subscriptions
3. **Upsells**: Zipify OCU or Bold Upsell
4. **Analytics**: Google Analytics Enhanced Ecommerce

## 🎯 SEO Optimization

### Meta Tags
All pages include:
- Title tags with brand and keywords
- Meta descriptions for search snippets
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs

### Structured Data
- Product schema for rich snippets
- Organization schema for brand info
- Breadcrumb schema for navigation

### Performance
- Optimized images with proper alt text
- Fast loading times (< 3 seconds)
- Mobile-friendly design
- HTTPS security

## 🔒 Security & Compliance

### GDPR Compliance
- Cookie consent banner
- Privacy policy links
- Data collection transparency
- User consent management

### Accessibility
- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader optimization
- High contrast ratios (4.5:1 minimum)

## 📱 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile**: iOS Safari, Chrome Mobile

## 🎨 Animation Features

### Scroll Animations
- Subtle fade-in effects (opacity 0.9 to 1.0)
- Gentle upward movement (16px translation)
- Progressive reveal of content blocks
- Respects reduced motion preferences

### Interactive Elements
- Button hover effects with scale transforms
- Product card hover with shadow expansion
- Smooth transitions on all interactive elements
- Loading states for better UX

## 🛍️ Shopping Features

### Cart Functionality
- Persistent cart using localStorage
- Add/remove items with animations
- Quantity controls with validation
- Real-time total calculations
- Mini cart dropdown

### Product Features
- Image galleries with thumbnails
- Variant selection (size, price)
- Stock status indicators
- Shipping calculator
- Customer reviews display

## 📞 Support

For technical support or questions about implementation:
- Email: support@asaal.co.uk
- Response time: Within 24 hours
- Business hours: Mon-Fri 9AM-6PM GMT

## 📄 License

This website template is created for Asaal Wellness Ltd. All rights reserved.

---

**Built with ❤️ for natural wellness**