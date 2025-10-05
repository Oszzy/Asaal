# Asaal Website Project Outline

## File Structure

```
/mnt/okcomputer/output/
├── index.html                 # Homepage with hero and product showcase
├── shop.html                  # Product catalog with filtering
├── product.html               # Individual product detail page
├── about.html                 # Brand story and values
├── contact.html               # Contact form and information
├── main.js                    # Core JavaScript functionality
├── resources/                 # Assets folder
│   ├── hero-wellness.jpg      # Generated hero image
│   ├── hero-oils.jpg          # Alternative hero image
│   ├── logo-asaal.png         # Brand logo
│   ├── product-*.jpg          # Product images (15+ unique)
│   ├── wellness-*.jpg         # Lifestyle and wellness images
│   └── background-*.jpg       # Background textures and patterns
├── interaction.md             # Interaction design documentation
├── design.md                  # Design style guide
└── outline.md                 # This project outline
```

## Page Organization

### 1. Homepage (index.html)
**Purpose**: Brand introduction and product discovery
**Sections**:
- Navigation bar with logo and menu
- Animated hero section with typewriter effect
- Featured product collections (Best Sellers, New Arrivals)
- Benefits strip with icons (Organic • Sourced Ethically • GC-MS Tested)
- Product showcase grid with hover effects
- Newsletter signup with discount offer
- Footer with links and social media

**Key Features**:
- p5.js particle background animation
- Typed.js for hero headline animation
- Splide.js for product carousels
- Interactive product quick-view modals

### 2. Shop Page (shop.html)
**Purpose**: Complete product catalog with filtering
**Sections**:
- Navigation bar
- Shop header with search and filters
- Product grid with 20+ items
- Category sidebar (Single Oils, Blends, Starter Kits, Diffusers)
- Price range filter
- Sort options (Price, Popularity, Newest)
- Pagination or infinite scroll
- Footer

**Key Features**:
- Real-time search functionality
- Multi-criteria filtering system
- Product variant selection
- Add to cart animations
- Wishlist functionality

### 3. Product Detail Page (product.html)
**Purpose**: Detailed product information and purchase
**Sections**:
- Navigation bar
- Product image gallery with zoom
- Product information and pricing
- Variant selection (size, scent)
- Quantity selector
- Add to cart and buy now buttons
- Product description and benefits
- Ingredients list
- Usage instructions
- Safety information
- Customer reviews section
- Related products
- Footer

**Key Features**:
- Image zoom and gallery functionality
- Dynamic price updates for variants
- Stock status indicators
- Shipping calculator
- Review system with ratings

### 4. About Page (about.html)
**Purpose**: Brand story and values
**Sections**:
- Navigation bar
- Hero section with brand story
- Company values and mission
- Quality assurance information
- GC-MS testing explanation
- Sustainability practices
- Team information
- Footer

**Key Features**:
- Animated counters for statistics
- Timeline of company milestones
- Interactive quality testing visualization

### 5. Contact Page (contact.html)
**Purpose**: Customer support and inquiries
**Sections**:
- Navigation bar
- Contact form with validation
- Company information
- FAQ section
- Live chat integration
- Footer

**Key Features**:
- Form validation and submission
- Interactive FAQ accordion
- Google Maps integration

## Interactive Components

### 1. Shopping Cart System
- **Location**: Persistent across all pages
- **Functionality**: Add/remove items, quantity updates, price calculations
- **Technology**: Local storage + JavaScript animations
- **Features**: Mini cart dropdown, full cart page, checkout flow

### 2. Product Filter & Search
- **Location**: Shop page
- **Functionality**: Real-time filtering by category, price, benefits
- **Technology**: JavaScript array filtering + search algorithms
- **Features**: Instant results, filter combinations, clear filters

### 3. Newsletter Signup
- **Location**: Homepage footer, popup modal
- **Functionality**: Email validation, discount code generation
- **Technology**: Form validation + local storage
- **Features**: GDPR compliant, double opt-in simulation

### 4. Cookie Consent Banner
- **Location**: Bottom of page on first visit
- **Functionality**: Accept/decline options, preferences storage
- **Technology**: JavaScript + local storage
- **Features**: GDPR compliant, customizable preferences

## Technical Implementation

### Core Libraries Integration
1. **Anime.js**: Button hover effects, scroll animations, loading states
2. **p5.js**: Hero background particle system, organic animations
3. **ECharts.js**: Data visualization for product benefits, wellness metrics
4. **Splide.js**: Product carousels, image galleries, testimonial sliders
5. **Typed.js**: Hero headline typewriter effect, dynamic text
6. **Splitting.js**: Text reveal animations, staggered effects
7. **Matter.js**: Physics-based floating elements, interactive particles
8. **Pixi.js**: Advanced visual effects, shader backgrounds

### Responsive Design Strategy
- Mobile-first approach
- Breakpoints: 320px, 768px, 1024px, 1200px
- Touch-friendly interactions
- Optimized images with srcset
- Performance-focused animations

### Performance Optimization
- Lazy loading for images and animations
- Minified CSS and JavaScript
- Optimized asset delivery
- Progressive enhancement
- 60fps animation target

### Accessibility Features
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- High contrast ratios
- Reduced motion preferences

## Content Strategy

### Product Data Structure
```javascript
{
  id: "product-001",
  name: "Lavender Pure Essential Oil",
  price: "£18.99",
  category: "single-oils",
  benefits: ["Relaxation", "Sleep", "Stress Relief"],
  description: "Premium lavender essential oil...",
  images: ["lavender-1.jpg", "lavender-2.jpg"],
  variants: [
    { size: "10ml", price: "£18.99" },
    { size: "30ml", price: "£42.99" }
  ],
  inStock: true,
  rating: 4.8
}
```

### Sample Products (20+ items)
1. Lavender Essential Oil
2. Peppermint Essential Oil
3. Eucalyptus Essential Oil
4. Tea Tree Essential Oil
5. Lemon Essential Oil
6. Bergamot Essential Oil
7. Ylang Ylang Essential Oil
8. Rosemary Essential Oil
9. Frankincense Essential Oil
10. Chamomile Essential Oil
11. Sleep Well Blend
12. Energy Boost Blend
13. Stress Relief Blend
14. Immunity Support Blend
15. Focus Blend
16. Starter Kit (6 oils)
17. Wellness Collection
18. Ultrasonic Diffuser
19. Nebulizing Diffuser
20. Roller Ball Set
21. Carrier Oil Set
22. DIY Blending Kit

### Legal Pages
- Privacy Policy (GDPR compliant)
- Terms & Conditions
- Shipping & Returns Policy
- Cookie Policy