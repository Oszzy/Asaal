# ASSAL Essential Oils Website - Project Outline

## File Structure
```
/mnt/okcomputer/output/
├── index.html              # Homepage with hero section and wellness quiz
├── products.html           # Product catalog with filtering and blend creator
├── about.html              # Brand story and wellness philosophy
├── contact.html            # Consultation booking and contact form
├── main.js                 # Core JavaScript functionality
├── resources/              # Local assets folder
│   ├── logo.png           # ASSAL Tree of Life logo
│   ├── hero-wellness.jpg   # Generated hero image
│   ├── hero-lab.jpg        # Lab/generator hero image
│   ├── bg-texture.jpg      # Background texture
│   └── product-images/     # Essential oil product photos
└── design.md              # Design style guide
└── interaction.md         # Interaction specifications
└── outline.md             # This project outline
```

## Page Breakdown

### 1. Index.html - Homepage
**Purpose**: Brand introduction and user engagement
**Sections**:
- Navigation bar with logo and menu
- Hero section with wellness quiz (interactive component #1)
- Featured products carousel with infinite scroll
- Wellness benefits visualization using ECharts
- Customer testimonials with smooth transitions
- Newsletter signup with animated feedback
- Footer with consistent styling

**Key Features**:
- Essential oil wellness quiz with personalized recommendations
- Particle background effect using p5.js
- Smooth scroll animations with Anime.js

### 2. Products.html - Product Catalog
**Purpose**: Complete product browsing and shopping experience
**Sections**:
- Navigation bar
- Product filter sidebar (interactive component #2)
- Product grid with 20+ essential oils
- Custom blend creator tool (interactive component #3)
- Shopping cart functionality
- Product detail modals with image galleries

**Key Features**:
- Advanced filtering by scent family, benefits, price
- Interactive blend creator with drag-and-drop
- Real-time cart updates and wishlist
- Product comparison feature

### 3. About.html - Brand Story
**Purpose**: Build trust and communicate brand values
**Sections**:
- Navigation bar
- Brand story hero section
- Mission and values with animated counters
- Sourcing and sustainability information
- Team member profiles with hover effects
- Certification and quality assurance

**Key Features**:
- Animated statistics and achievements
- Interactive timeline of brand journey
- Parallax scrolling effects

### 4. Contact.html - Consultation & Support
**Purpose**: Customer service and consultation booking
**Sections**:
- Navigation bar
- Contact form with validation
- Virtual consultation scheduler (interactive component #4)
- Location and hours information
- FAQ section with expandable answers
- Social media links

**Key Features**:
- Interactive calendar booking system
- Form validation with real-time feedback
- Live chat integration
- Appointment confirmation system

## Technical Implementation

### Core Libraries Integration:
1. **Anime.js**: Page transitions, scroll animations, micro-interactions
2. **ECharts.js**: Wellness data visualization, benefits charts
3. **p5.js**: Organic background effects, particle systems
4. **Splide.js**: Product carousels, image galleries
5. **Shader-park**: Subtle background textures and effects

### Interactive Components:
1. **Wellness Quiz**: Multi-step form with personalized recommendations
2. **Product Filtering**: Real-time catalog filtering with smooth animations
3. **Blend Creator**: Drag-and-drop interface for custom oil blends
4. **Consultation Scheduler**: Calendar-based booking system

### Responsive Design:
- Mobile-first approach with breakpoints at 768px, 1024px, 1440px
- Touch-friendly interactions for mobile devices
- Optimized images and lazy loading for performance

### Performance Optimization:
- Minified CSS and JavaScript
- Compressed images with WebP fallbacks
- Lazy loading for below-the-fold content
- CDN delivery for external libraries

## Content Strategy

### Product Data Structure:
Each essential oil product includes:
- Name and botanical name
- Scent family classification
- Primary benefits and uses
- Price and size options
- High-quality product images
- Customer reviews and ratings

### Educational Content:
- Essential oil usage guides
- Safety information and dilution charts
- Wellness tips and aromatherapy basics
- Seasonal blend recommendations

### SEO Optimization:
- Semantic HTML structure
- Meta descriptions and title tags
- Schema markup for products
- Alt text for all images
- Clean URL structure