// Asaal Website Main JavaScript
// Core functionality for wellness brand website

class AsaalWebsite {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('asaal-cart')) || [];
        this.wishlist = JSON.parse(localStorage.getItem('asaal-wishlist')) || [];
        this.cookieConsent = localStorage.getItem('asaal-cookies') || false;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initAnimations();
        this.initCart();
        this.initCookieConsent();
        this.initNewsletter();
        this.initScrollAnimations();
        
        // Page-specific initializations
        if (document.querySelector('.hero-section')) {
            this.initHeroAnimations();
        }
        if (document.querySelector('.shop-grid')) {
            this.initShopFilters();
        }
        if (document.querySelector('.product-page')) {
            this.initProductPage();
        }
    }

    setupEventListeners() {
        // Navigation
        document.addEventListener('click', (e) => {
            if (e.target.matches('.nav-toggle')) {
                this.toggleMobileNav();
            }
            if (e.target.matches('.cart-toggle')) {
                this.toggleCart();
            }
            if (e.target.matches('.wishlist-toggle')) {
                this.toggleWishlist();
            }
        });

        // Cart functionality
        document.addEventListener('click', (e) => {
            if (e.target.matches('.add-to-cart')) {
                e.preventDefault();
                const productId = e.target.dataset.productId;
                this.addToCart(productId);
            }
            if (e.target.matches('.remove-from-cart')) {
                const productId = e.target.dataset.productId;
                this.removeFromCart(productId);
            }
        });

        // Search functionality
        const searchInput = document.querySelector('#search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });
        }

        // Form submissions
        document.addEventListener('submit', (e) => {
            if (e.target.matches('.newsletter-form')) {
                e.preventDefault();
                this.handleNewsletterSubmit(e.target);
            }
            if (e.target.matches('.contact-form')) {
                e.preventDefault();
                this.handleContactSubmit(e.target);
            }
        });
    }

    // Hero Animations
    initHeroAnimations() {
        // Typewriter effect for hero headline
        if (typeof Typed !== 'undefined' && document.querySelector('.hero-headline')) {
            new Typed('.hero-headline', {
                strings: [
                    'Pure Wellness, Naturally',
                    'Essential Oils for Life',
                    'Your Journey to Wellness'
                ],
                typeSpeed: 60,
                backSpeed: 40,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        }

        // Floating particles animation
        this.initParticleBackground();

        // Scroll-triggered hero animations
        this.animateHeroElements();
    }

    initParticleBackground() {
        if (typeof p5 === 'undefined') return;

        const heroSection = document.querySelector('.hero-section');
        if (!heroSection) return;

        const sketch = (p) => {
            let particles = [];
            const numParticles = 50;

            p.setup = () => {
                const canvas = p.createCanvas(heroSection.offsetWidth, heroSection.offsetHeight);
                canvas.parent('particle-canvas');
                canvas.style('position', 'absolute');
                canvas.style('top', '0');
                canvas.style('left', '0');
                canvas.style('z-index', '1');
                canvas.style('pointer-events', 'none');

                // Create particles
                for (let i = 0; i < numParticles; i++) {
                    particles.push({
                        x: p.random(p.width),
                        y: p.random(p.height),
                        vx: p.random(-0.5, 0.5),
                        vy: p.random(-0.5, 0.5),
                        size: p.random(2, 6),
                        opacity: p.random(0.1, 0.3)
                    });
                }
            };

            p.draw = () => {
                p.clear();
                
                particles.forEach(particle => {
                    // Update position
                    particle.x += particle.vx;
                    particle.y += particle.vy;

                    // Wrap around edges
                    if (particle.x < 0) particle.x = p.width;
                    if (particle.x > p.width) particle.x = 0;
                    if (particle.y < 0) particle.y = p.height;
                    if (particle.y > p.height) particle.y = 0;

                    // Draw particle
                    p.fill(0, 168, 107, particle.opacity * 255); // Sage green
                    p.noStroke();
                    p.ellipse(particle.x, particle.y, particle.size);
                });
            };

            p.windowResized = () => {
                p.resizeCanvas(heroSection.offsetWidth, heroSection.offsetHeight);
            };
        };

        new p5(sketch);
    }

    animateHeroElements() {
        if (typeof anime === 'undefined') return;

        // Animate hero elements on load
        anime.timeline({
            easing: 'easeOutExpo'
        })
        .add({
            targets: '.hero-content > *',
            translateY: [50, 0],
            opacity: [0, 1],
            delay: anime.stagger(200, {start: 500})
        })
        .add({
            targets: '.hero-cta',
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 800
        }, '-=400');
    }

    // Scroll Animations
    initScrollAnimations() {
        if (typeof anime === 'undefined') return;

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateSection(entry.target);
                }
            });
        }, observerOptions);

        // Observe all animatable sections
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    animateSection(section) {
        const elements = section.querySelectorAll('.animate-element');
        
        anime({
            targets: elements,
            translateY: [20, 0],
            opacity: [0.9, 1],
            duration: 600,
            delay: anime.stagger(100),
            easing: 'easeOutQuad'
        });
    }

    // Cart Functionality
    initCart() {
        this.updateCartUI();
        this.updateCartCount();
    }

    addToCart(productId) {
        const product = this.getProductById(productId);
        if (!product) return;

        const existingItem = this.cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                ...product,
                quantity: 1,
                addedAt: new Date().toISOString()
            });
        }

        this.saveCart();
        this.updateCartUI();
        this.updateCartCount();
        this.showCartNotification(product.name);

        // Animate add to cart button
        const button = document.querySelector(`[data-product-id="${productId}"]`);
        if (button) {
            this.animateAddToCart(button);
        }
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartUI();
        this.updateCartCount();
    }

    updateCartUI() {
        const cartContainer = document.querySelector('.cart-items');
        const cartTotal = document.querySelector('.cart-total');
        
        if (!cartContainer) return;

        if (this.cart.length === 0) {
            cartContainer.innerHTML = '<p class="text-gray-500">Your cart is empty</p>';
            if (cartTotal) cartTotal.textContent = '£0.00';
            return;
        }

        const cartHTML = this.cart.map(item => `
            <div class="cart-item flex items-center justify-between p-4 border-b">
                <div class="flex items-center space-x-3">
                    <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-cover rounded">
                    <div>
                        <h4 class="font-medium">${item.name}</h4>
                        <p class="text-sm text-gray-500">Qty: ${item.quantity}</p>
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <span class="font-medium">${item.price}</span>
                    <button class="remove-from-cart text-red-500 hover:text-red-700" data-product-id="${item.id}">
                        ×
                    </button>
                </div>
            </div>
        `).join('');

        cartContainer.innerHTML = cartHTML;

        // Update total
        const total = this.cart.reduce((sum, item) => {
            const price = parseFloat(item.price.replace('£', ''));
            return sum + (price * item.quantity);
        }, 0);

        if (cartTotal) {
            cartTotal.textContent = `£${total.toFixed(2)}`;
        }
    }

    updateCartCount() {
        const countElement = document.querySelector('.cart-count');
        if (!countElement) return;

        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        countElement.textContent = totalItems;
        countElement.style.display = totalItems > 0 ? 'block' : 'none';
    }

    saveCart() {
        localStorage.setItem('asaal-cart', JSON.stringify(this.cart));
    }

    animateAddToCart(button) {
        if (typeof anime === 'undefined') return;

        anime({
            targets: button,
            scale: [1, 1.1, 1],
            duration: 300,
            easing: 'easeOutQuad'
        });

        // Show success state
        const originalText = button.textContent;
        button.textContent = 'Added!';
        button.classList.add('bg-green-600');
        
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('bg-green-600');
        }, 1500);
    }

    showCartNotification(productName) {
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full';
        notification.textContent = `${productName} added to cart`;
        
        document.body.appendChild(notification);

        if (typeof anime !== 'undefined') {
            anime({
                targets: notification,
                translateX: [400, 0],
                duration: 300,
                easing: 'easeOutQuad',
                complete: () => {
                    setTimeout(() => {
                        anime({
                            targets: notification,
                            translateX: [0, 400],
                            duration: 300,
                            easing: 'easeInQuad',
                            complete: () => notification.remove()
                        });
                    }, 2000);
                }
            });
        }
    }

    // Shop Filters
    initShopFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const searchInput = document.querySelector('#search-input');
        const sortSelect = document.querySelector('#sort-select');

        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.applyFilter(btn.dataset.filter);
                this.updateActiveFilter(btn);
            });
        });

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });
        }

        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.handleSort(e.target.value);
            });
        }
    }

    applyFilter(filter) {
        const products = document.querySelectorAll('.product-card');
        
        products.forEach(product => {
            const category = product.dataset.category;
            const shouldShow = filter === 'all' || category === filter;
            
            product.style.display = shouldShow ? 'block' : 'none';
            
            if (typeof anime !== 'undefined' && shouldShow) {
                anime({
                    targets: product,
                    opacity: [0, 1],
                    scale: [0.9, 1],
                    duration: 300,
                    delay: Math.random() * 200
                });
            }
        });
    }

    updateActiveFilter(activeButton) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active', 'bg-green-600', 'text-white');
            btn.classList.add('bg-gray-200', 'text-gray-700');
        });
        
        activeButton.classList.add('active', 'bg-green-600', 'text-white');
        activeButton.classList.remove('bg-gray-200', 'text-gray-700');
    }

    handleSearch(query) {
        const products = document.querySelectorAll('.product-card');
        const searchTerm = query.toLowerCase();

        products.forEach(product => {
            const name = product.querySelector('.product-name').textContent.toLowerCase();
            const description = product.querySelector('.product-description').textContent.toLowerCase();
            const shouldShow = name.includes(searchTerm) || description.includes(searchTerm);
            
            product.style.display = shouldShow ? 'block' : 'none';
        });
    }

    handleSort(sortBy) {
        const container = document.querySelector('.shop-grid');
        const products = Array.from(container.querySelectorAll('.product-card'));

        products.sort((a, b) => {
            switch (sortBy) {
                case 'price-low':
                    return this.getPrice(a) - this.getPrice(b);
                case 'price-high':
                    return this.getPrice(b) - this.getPrice(a);
                case 'name':
                    return a.querySelector('.product-name').textContent.localeCompare(
                        b.querySelector('.product-name').textContent
                    );
                default:
                    return 0;
            }
        });

        products.forEach(product => container.appendChild(product));
    }

    getPrice(element) {
        const priceText = element.querySelector('.product-price').textContent;
        return parseFloat(priceText.replace('£', ''));
    }

    // Newsletter Functionality
    initNewsletter() {
        const newsletterModal = document.querySelector('.newsletter-modal');
        if (!newsletterModal) return;

        // Show modal after 30 seconds or on exit intent
        setTimeout(() => {
            if (!localStorage.getItem('newsletter-shown')) {
                this.showNewsletterModal();
            }
        }, 30000);

        // Exit intent detection
        document.addEventListener('mouseleave', (e) => {
            if (e.clientY <= 0 && !localStorage.getItem('newsletter-shown')) {
                this.showNewsletterModal();
            }
        });
    }

    showNewsletterModal() {
        const modal = document.querySelector('.newsletter-modal');
        if (!modal) return;

        modal.classList.remove('hidden');
        modal.classList.add('flex');
        
        if (typeof anime !== 'undefined') {
            anime({
                targets: modal,
                opacity: [0, 1],
                duration: 300
            });
            
            anime({
                targets: modal.querySelector('.modal-content'),
                scale: [0.8, 1],
                opacity: [0, 1],
                duration: 400,
                delay: 100
            });
        }

        localStorage.setItem('newsletter-shown', 'true');
    }

    handleNewsletterSubmit(form) {
        const email = form.querySelector('input[type="email"]').value;
        const successMessage = form.querySelector('.success-message');
        
        // Simulate API call
        setTimeout(() => {
            successMessage.classList.remove('hidden');
            form.reset();
            
            // Generate discount code
            const discountCode = this.generateDiscountCode();
            this.showDiscountCode(discountCode);
        }, 1000);
    }

    generateDiscountCode() {
        return 'WELCOME' + Math.random().toString(36).substr(2, 4).toUpperCase();
    }

    showDiscountCode(code) {
        const modal = document.querySelector('.newsletter-modal');
        const content = modal.querySelector('.modal-content');
        
        content.innerHTML = `
            <div class="text-center">
                <h3 class="text-2xl font-bold mb-4">Thank You!</h3>
                <p class="mb-4">Here's your 10% discount code:</p>
                <div class="bg-green-100 p-4 rounded-lg mb-4">
                    <code class="text-green-800 font-bold text-xl">${code}</code>
                </div>
                <p class="text-sm text-gray-600 mb-4">Use this code at checkout</p>
                <button class="close-modal bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                    Continue Shopping
                </button>
            </div>
        `;
        
        modal.querySelector('.close-modal').addEventListener('click', () => {
            this.closeNewsletterModal();
        });
    }

    closeNewsletterModal() {
        const modal = document.querySelector('.newsletter-modal');
        if (!modal) return;

        if (typeof anime !== 'undefined') {
            anime({
                targets: modal,
                opacity: [1, 0],
                duration: 300,
                complete: () => {
                    modal.classList.add('hidden');
                    modal.classList.remove('flex');
                }
            });
        } else {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    }

    // Cookie Consent
    initCookieConsent() {
        if (this.cookieConsent) return;

        const banner = document.querySelector('.cookie-banner');
        if (!banner) return;

        banner.classList.remove('hidden');
        
        banner.querySelector('.accept-cookies').addEventListener('click', () => {
            localStorage.setItem('asaal-cookies', 'accepted');
            this.cookieConsent = true;
            banner.classList.add('hidden');
        });

        banner.querySelector('.decline-cookies').addEventListener('click', () => {
            localStorage.setItem('asaal-cookies', 'declined');
            this.cookieConsent = true;
            banner.classList.add('hidden');
        });
    }

    // Product Page Functionality
    initProductPage() {
        this.initProductGallery();
        this.initProductVariants();
        this.initQuantitySelector();
    }

    initProductGallery() {
        const thumbnails = document.querySelectorAll('.thumbnail');
        const mainImage = document.querySelector('.main-product-image');
        
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                const newSrc = thumbnail.src.replace('-thumb', '');
                mainImage.src = newSrc;
                
                // Update active thumbnail
                thumbnails.forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');
            });
        });
    }

    initProductVariants() {
        const variantButtons = document.querySelectorAll('.variant-btn');
        const priceDisplay = document.querySelector('.product-price');
        
        variantButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active variant
                variantButtons.forEach(b => b.classList.remove('active'));
                button.classList.add('active');
                
                // Update price if needed
                const newPrice = button.dataset.price;
                if (newPrice && priceDisplay) {
                    priceDisplay.textContent = `£${newPrice}`;
                }
            });
        });
    }

    initQuantitySelector() {
        const decreaseBtn = document.querySelector('.qty-decrease');
        const increaseBtn = document.querySelector('.qty-increase');
        const quantityInput = document.querySelector('.quantity-input');
        
        if (decreaseBtn) {
            decreaseBtn.addEventListener('click', () => {
                const current = parseInt(quantityInput.value);
                if (current > 1) {
                    quantityInput.value = current - 1;
                }
            });
        }
        
        if (increaseBtn) {
            increaseBtn.addEventListener('click', () => {
                const current = parseInt(quantityInput.value);
                quantityInput.value = current + 1;
            });
        }
    }

    // Utility Functions
    getProductById(id) {
        // Mock product data - in real implementation, this would fetch from API
        const products = {
            'lavender-oil': {
                id: 'lavender-oil',
                name: 'Lavender Pure Essential Oil',
                price: '£18.99',
                image: 'resources/product-collection.jpg',
                category: 'single-oils'
            },
            'peppermint-oil': {
                id: 'peppermint-oil',
                name: 'Peppermint Essential Oil',
                price: '£16.99',
                image: 'resources/product-collection.jpg',
                category: 'single-oils'
            }
            // Add more products as needed
        };
        
        return products[id];
    }

    // Mobile Navigation
    toggleMobileNav() {
        const nav = document.querySelector('.mobile-nav');
        if (!nav) return;

        nav.classList.toggle('hidden');
        
        if (typeof anime !== 'undefined') {
            if (!nav.classList.contains('hidden')) {
                anime({
                    targets: nav,
                    translateX: ['-100%', '0%'],
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            }
        }
    }

    // Cart Toggle
    toggleCart() {
        const cart = document.querySelector('.cart-sidebar');
        if (!cart) return;

        cart.classList.toggle('hidden');
        
        if (typeof anime !== 'undefined') {
            if (!cart.classList.contains('hidden')) {
                anime({
                    targets: cart,
                    translateX: ['100%', '0%'],
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            }
        }
    }

    // Initialize all animations
    initAnimations() {
        // Button hover effects
        document.querySelectorAll('.btn-hover').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: btn,
                        scale: 1.05,
                        duration: 200,
                        easing: 'easeOutQuad'
                    });
                }
            });
            
            btn.addEventListener('mouseleave', () => {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: btn,
                        scale: 1,
                        duration: 200,
                        easing: 'easeOutQuad'
                    });
                }
            });
        });
    }
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AsaalWebsite();
});

// Handle page visibility for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when page is not visible
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            el.style.animationPlayState = 'paused';
        });
    } else {
        // Resume animations when page becomes visible
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AsaalWebsite;
}