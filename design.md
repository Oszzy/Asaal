# Asaal Website Design Style Guide

## Design Philosophy

### Visual Language
**Modern Minimalism with Organic Warmth**: The design embodies the intersection of scientific precision and natural wellness. Clean, sophisticated lines meet organic textures and flowing elements, creating a premium yet approachable aesthetic that reflects both the purity of essential oils and the expertise behind their formulation.

### Color Palette
**Primary Colors:**
- **Deep Black (#000000)**: Primary text, navigation, premium product containers
- **Pure White (#FFFFFF)**: Background, negative space, clean product displays
- **Sage Green (#00A86B)**: Primary accent, CTAs, highlights, natural elements

**Secondary Colors:**
- **Soft Mint (#E8F5E8)**: Subtle backgrounds, hover states
- **Charcoal Gray (#2D2D2D)**: Secondary text, subtle elements
- **Warm Cream (#FAFAFA)**: Section backgrounds, card backgrounds

### Typography
**Primary Font**: Inter (Sans-serif)
- Clean, modern, highly readable
- Excellent for both display and body text
- Strong hierarchy support

**Secondary Font**: Playfair Display (Serif)
- Used for elegant headings and premium product names
- Adds sophistication and warmth
- Perfect for brand storytelling

**Font Hierarchy:**
- H1: Playfair Display, 48px, Bold
- H2: Inter, 32px, Semi-bold
- H3: Inter, 24px, Medium
- Body: Inter, 16px, Regular
- Small text: Inter, 14px, Regular

## Visual Effects & Animation

### Core Libraries Used
1. **Anime.js**: Smooth micro-interactions, button hover effects, scroll animations
2. **p5.js**: Organic particle system for hero background, floating elements
3. **ECharts.js**: Data visualization for product benefits, wellness metrics
4. **Splide.js**: Product carousels, testimonial sliders, image galleries
5. **Typed.js**: Typewriter effect for hero headlines
6. **Splitting.js**: Text reveal animations, staggered letter effects
7. **Matter.js**: Subtle physics for floating product elements
8. **Pixi.js**: Advanced visual effects, shader backgrounds

### Animation Strategy
**Hero Section:**
- Subtle parallax background using p5.js particle system
- Typewriter animation for main headline with Typed.js
- Floating essential oil bottles with gentle physics
- Smooth scroll-triggered reveals

**Product Interactions:**
- 3D tilt effect on hover using CSS transforms
- Smooth scale transitions for product cards
- Color morphing for CTAs (green to darker green)
- Staggered loading animations for product grids

**Scroll Animations:**
- Gentle fade-in effects for sections (opacity 0.9 to 1.0)
- Subtle upward movement (16px translation)
- Progressive reveal of content blocks
- Parallax movement for decorative elements (±8% max)

### Visual Effects
**Background Effects:**
- Organic particle system representing essential oil molecules
- Subtle gradient overlays with sage green tints
- Clean geometric patterns as decorative elements
- Soft shadow effects for depth

**Interactive Elements:**
- Smooth hover states with color transitions
- Button press animations with scale feedback
- Form field focus states with green accent borders
- Loading states with organic spinner animations

## Layout & Composition

### Grid System
- 12-column responsive grid
- Generous white space for premium feel
- Consistent 24px spacing units
- Maximum content width: 1200px

### Section Structure
- Hero: Full viewport height with animated background
- Product showcase: Grid layout with hover effects
- Benefits: Icon-based layout with smooth animations
- Testimonials: Carousel with fade transitions
- Newsletter: Minimal form with validation feedback

### Mobile Responsiveness
- Mobile-first approach
- Touch-friendly interactions (44px minimum touch targets)
- Simplified animations for performance
- Optimized image loading with srcset

## Content Strategy

### Imagery Style
- High-quality, natural photography
- Soft, organic compositions
- Consistent lighting and color grading
- Focus on texture and natural elements

### Iconography
- Minimal line icons
- Consistent stroke width (2px)
- Sage green accent color
- Subtle hover animations

### Content Tone
- Professional yet approachable
- Scientific accuracy with warm delivery
- UK English spelling and terminology
- Clear, concise product descriptions

## Accessibility & Performance

### Accessibility Features
- WCAG 2.1 AA compliance
- High contrast ratios (4.5:1 minimum)
- Keyboard navigation support
- Screen reader optimization
- Reduced motion preferences respected

### Performance Optimization
- Lazy loading for images and animations
- Optimized asset delivery
- Minimal JavaScript bundle size
- Progressive enhancement approach
- 60fps animation performance target