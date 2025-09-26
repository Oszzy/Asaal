// Global variables
let cart = [];
let quizStep = 0;
let quizAnswers = {};
let particleSystem;

// Quiz data
const quizQuestions = [
    {
        question: "What's your primary wellness goal?",
        options: [
            { text: "Stress relief and relaxation", value: "stress", icon: "🧘‍♀️" },
            { text: "Better sleep quality", value: "sleep", icon: "😴" },
            { text: "Energy and focus", value: "energy", icon: "⚡" },
            { text: "Skin health", value: "skin", icon: "✨" }
        ]
    },
    {
        question: "How do you prefer to use essential oils?",
        options: [
            { text: "Diffuser/aromatherapy", value: "diffuser", icon: "🌬️" },
            { text: "Topical application", value: "topical", icon: "🤲" },
            { text: "Bath and spa", value: "bath", icon: "🛁" },
            { text: "Massage", value: "massage", icon: "💆‍♀️" }
        ]
    },
    {
        question: "What scent families appeal to you most?",
        options: [
            { text: "Floral (lavender, rose)", value: "floral", icon: "🌸" },
            { text: "Citrus (lemon, orange)", value: "citrus", icon: "🍊" },
            { text: "Woody (sandalwood, cedar)", value: "woody", icon: "🌲" },
            { text: "Herbal (peppermint, eucalyptus)", value: "herbal", icon: "🌿" }
        ]
    }
];

// Product recommendations based on quiz answers
const productRecommendations = {
    stress: {
        floral: ["Lavender Pure Oil", "Rose Absolute", "Chamomile Essential Oil"],
        woody: ["Sandalwood Pure Oil", "Cedarwood Essential Oil", "Frankincense Oil"],
        herbal: ["Clary Sage Oil", "Marjoram Essential Oil", "Ylang Ylang Oil"],
        citrus: ["Bergamot Essential Oil", "Neroli Oil", "Sweet Orange Oil"]
    },
    sleep: {
        floral: ["Lavender Pure Oil", "Roman Chamomile Oil", "Jasmine Absolute"],
        woody: ["Vetiver Essential Oil", "Cedarwood Oil", "Sandalwood Pure Oil"],
        herbal: ["Valerian Root Oil", "Hops Essential Oil", "Clary Sage Oil"],
        citrus: ["Mandarin Oil", "Sweet Orange Oil", "Bergamot Oil"]
    },
    energy: {
        citrus: ["Lemon Essential Oil", "Peppermint Oil", "Grapefruit Oil"],
        herbal: ["Rosemary Essential Oil", "Basil Oil", "Eucalyptus Pure Oil"],
        woody: ["Pine Essential Oil", "Cypress Oil", "Juniper Berry Oil"],
        floral: ["Geranium Oil", "Rosemary Oil", "Peppermint Oil"]
    },
    skin: {
        herbal: ["Tea Tree Essential Oil", "Lavender Oil", "Geranium Oil"],
        floral: ["Rose Absolute", "Jasmine Absolute", "Neroli Oil"],
        woody: ["Sandalwood Pure Oil", "Cedarwood Oil", "Frankincense Oil"],
        citrus: ["Lemon Essential Oil", "Bergamot Oil", "Sweet Orange Oil"]
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeCarousel();
    initializeCharts();
    initializeParticles();
    initializeScrollAnimations();
    loadCart();
});

// Initialize animations
function initializeAnimations() {
    // Split text for animation
    Splitting();
    
    // Animate hero text
    anime.timeline({
        easing: 'easeOutExpo',
        duration: 1000
    })
    .add({
        targets: '[data-splitting] .char',
        translateY: [100, 0],
        opacity: [0, 1],
        delay: anime.stagger(30)
    });
    
    // Animate fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
        anime({
            targets: element,
            opacity: [0, 1],
            translateY: [30, 0],
            delay: 500 + (index * 200),
            duration: 800,
            easing: 'easeOutCubic'
        });
    });
}

// Initialize product carousel
function initializeCarousel() {
    if (document.getElementById('products-carousel')) {
        new Splide('#products-carousel', {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '2rem',
            autoplay: true,
            interval: 4000,
            pauseOnHover: true,
            breakpoints: {
                1024: {
                    perPage: 2,
                },
                768: {
                    perPage: 1,
                }
            }
        }).mount();
    }
}

// Initialize charts
function initializeCharts() {
    // Benefits chart
    const benefitsChart = echarts.init(document.getElementById('benefits-chart'));
    const benefitsOption = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}%'
        },
        series: [
            {
                name: 'Wellness Benefits',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '16',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 35, name: 'Stress Relief', itemStyle: { color: '#9CAF88' } },
                    { value: 25, name: 'Better Sleep', itemStyle: { color: '#D4A574' } },
                    { value: 20, name: 'Energy Boost', itemStyle: { color: '#2C3E2D' } },
                    { value: 20, name: 'Skin Health', itemStyle: { color: '#F7F5F3' } }
                ]
            }
        ]
    };
    benefitsChart.setOption(benefitsOption);
    
    // Usage chart
    const usageChart = echarts.init(document.getElementById('usage-chart'));
    const usageOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['Aromatherapy', 'Topical', 'Bath', 'Massage', 'Cleaning'],
            axisLabel: {
                color: '#2C3E2D'
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: '#2C3E2D'
            }
        },
        series: [
            {
                name: 'Usage Frequency',
                type: 'bar',
                data: [85, 70, 60, 45, 40],
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#9CAF88' },
                        { offset: 1, color: '#D4A574' }
                    ])
                },
                barWidth: '60%'
            }
        ]
    };
    usageChart.setOption(usageOption);
    
    // Make charts responsive
    window.addEventListener('resize', function() {
        benefitsChart.resize();
        usageChart.resize();
    });
}

// Initialize particle system
function initializeParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    
    // Create canvas for particles
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    container.appendChild(canvas);
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle system
    const particles = [];
    const particleCount = 50;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 3 + 1;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        
        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = '#9CAF88';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animate);
    }
    animate();
}

// Initialize scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [30, 0],
                    duration: 800,
                    easing: 'easeOutCubic'
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Quiz functionality
function startQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    const heroStats = document.getElementById('hero-stats');
    
    quizContainer.style.display = 'block';
    heroStats.style.display = 'none';
    
    quizStep = 0;
    quizAnswers = {};
    showQuizQuestion();
    
    // Animate quiz appearance
    anime({
        targets: quizContainer,
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 500,
        easing: 'easeOutCubic'
    });
}

function showQuizQuestion() {
    const quizContent = document.getElementById('quiz-questions');
    const question = quizQuestions[quizStep];
    
    let optionsHTML = '';
    question.options.forEach(option => {
        optionsHTML += `
            <button class="quiz-option w-full text-left p-4 mb-3 rounded-xl border-2 border-sage/20 hover:border-sage hover:bg-sage/10 transition-all duration-300" 
                    onclick="selectQuizAnswer('${option.value}')">
                <div class="flex items-center space-x-3">
                    <span class="text-2xl">${option.icon}</span>
                    <span class="font-medium">${option.text}</span>
                </div>
            </button>
        `;
    });
    
    quizContent.innerHTML = `
        <div class="quiz-question">
            <div class="mb-6">
                <div class="flex justify-between items-center mb-4">
                    <span class="text-sm text-forest/60">Question ${quizStep + 1} of ${quizQuestions.length}</span>
                    <div class="w-24 bg-sage/20 rounded-full h-2">
                        <div class="bg-sage h-2 rounded-full transition-all duration-300" style="width: ${((quizStep + 1) / quizQuestions.length) * 100}%"></div>
                    </div>
                </div>
                <h4 class="text-xl font-display font-bold mb-6">${question.question}</h4>
            </div>
            ${optionsHTML}
        </div>
    `;
    
    // Animate question appearance
    anime({
        targets: '.quiz-question',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 500,
        easing: 'easeOutCubic'
    });
}

function selectQuizAnswer(value) {
    const questionKey = quizQuestions[quizStep].question.toLowerCase().includes('goal') ? 'goal' : 
                       quizQuestions[quizStep].question.toLowerCase().includes('use') ? 'usage' : 'scent';
    quizAnswers[questionKey] = value;
    
    // Animate selection
    const selectedOption = event.target.closest('.quiz-option');
    selectedOption.style.background = 'rgba(156, 175, 136, 0.2)';
    selectedOption.style.borderColor = '#9CAF88';
    
    setTimeout(() => {
        quizStep++;
        if (quizStep < quizQuestions.length) {
            showQuizQuestion();
        } else {
            showQuizResults();
        }
    }, 500);
}

function showQuizResults() {
    const recommendations = getRecommendations();
    const quizContent = document.getElementById('quiz-questions');
    
    let resultsHTML = `
        <div class="quiz-results text-center">
            <div class="mb-6">
                <div class="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <h4 class="text-2xl font-display font-bold mb-2">Perfect Matches Found!</h4>
                <p class="text-forest/70">Based on your answers, here are our top recommendations:</p>
            </div>
            
            <div class="space-y-4 mb-6">
    `;
    
    recommendations.forEach(rec => {
        resultsHTML += `
            <div class="bg-white/50 rounded-xl p-4 text-left">
                <h5 class="font-display font-bold text-lg mb-2">${rec.name}</h5>
                <p class="text-forest/70 text-sm mb-3">${rec.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-xl font-bold text-sage">${rec.price}</span>
                    <button class="btn-primary text-white px-4 py-2 rounded-full text-sm font-semibold" 
                            onclick="addToCart('${rec.id}')">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
    });
    
    resultsHTML += `
            </div>
            
            <div class="flex flex-col sm:flex-row gap-3">
                <button class="flex-1 border-2 border-sage text-sage hover:bg-sage hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300" 
                        onclick="restartQuiz()">
                    Retake Quiz
                </button>
                <a href="products.html" class="flex-1 btn-primary text-white px-6 py-3 rounded-full font-semibold text-center">
                    View All Products
                </a>
            </div>
        </div>
    `;
    
    quizContent.innerHTML = resultsHTML;
    
    // Animate results
    anime({
        targets: '.quiz-results',
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 500,
        easing: 'easeOutCubic'
    });
}

function getRecommendations() {
    const goal = quizAnswers.goal;
    const scent = quizAnswers.scent;
    
    const recommendedProducts = productRecommendations[goal]?.[scent] || [];
    
    // Sample product data
    const productData = {
        'Lavender Pure Oil': {
            id: 'lavender',
            name: 'Lavender Pure Oil',
            description: 'Calming and relaxing, perfect for stress relief and better sleep.',
            price: '£17.99'
        },
        'Eucalyptus Pure Oil': {
            id: 'eucalyptus',
            name: 'Eucalyptus Pure Oil',
            description: 'Refreshing and clarifying, great for respiratory health and energy.',
            price: '£19.99'
        },
        'Tea Tree Essential Oil': {
            id: 'tea-tree',
            name: 'Tea Tree Essential Oil',
            description: 'Powerful antiseptic properties for skin health and immune support.',
            price: '£15.99'
        },
        'Peppermint Oil': {
            id: 'peppermint',
            name: 'Peppermint Oil',
            description: 'Invigorating and cooling, perfect for energy and focus.',
            price: '£16.99'
        },
        'Sandalwood Pure Oil': {
            id: 'sandalwood',
            name: 'Sandalwood Pure Oil',
            description: 'Grounding and spiritual, ideal for meditation and relaxation.',
            price: '£34.99'
        },
        'Jasmine Absolute': {
            id: 'jasmine',
            name: 'Jasmine Absolute',
            description: 'Luxurious floral scent that promotes emotional balance and confidence.',
            price: '£27.99'
        }
    };
    
    return recommendedProducts.slice(0, 3).map(name => productData[name] || 
        Object.values(productData)[Math.floor(Math.random() * Object.keys(productData).length)]
    );
}

function restartQuiz() {
    quizStep = 0;
    quizAnswers = {};
    showQuizQuestion();
}

// Shopping cart functionality
function addToCart(productId) {
    const productData = {
        'eucalyptus': { name: 'Eucalyptus Pure Oil', price: 19.99 },
        'jasmine': { name: 'Jasmine Absolute', price: 27.99 },
        'tea-tree': { name: 'Tea Tree Essential Oil', price: 15.99 },
        'sandalwood': { name: 'Sandalwood Pure Oil', price: 34.99 },
        'lavender': { name: 'Lavender Pure Oil', price: 17.99 },
        'peppermint': { name: 'Peppermint Oil', price: 16.99 }
    };
    
    const product = productData[productId];
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    saveCart();
    showCartNotification(product.name);
}

function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Animate cart update
    anime({
        targets: cartCount,
        scale: [1, 1.3, 1],
        duration: 300,
        easing: 'easeOutCubic'
    });
}

function showCartNotification(productName) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 bg-sage text-white px-6 py-3 rounded-lg shadow-lg z-50';
    notification.innerHTML = `
        <div class="flex items-center space-x-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>${productName} added to cart!</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate notification
    anime({
        targets: notification,
        translateX: [300, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutCubic',
        complete: () => {
            setTimeout(() => {
                anime({
                    targets: notification,
                    translateX: [0, 300],
                    opacity: [1, 0],
                    duration: 300,
                    easing: 'easeInCubic',
                    complete: () => {
                        document.body.removeChild(notification);
                    }
                });
            }, 3000);
        }
    });
}

function saveCart() {
    localStorage.setItem('assal-cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('assal-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
}

// Newsletter subscription
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    // Simulate subscription
    const button = event.target.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    
    button.textContent = 'Subscribing...';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = 'Subscribed!';
        button.style.background = '#9CAF88';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            button.style.background = '';
            event.target.reset();
        }, 2000);
    }, 1000);
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(function() {
    // Reinitialize particles on resize
    const particlesContainer = document.getElementById('particles-container');
    if (particlesContainer) {
        particlesContainer.innerHTML = '';
        initializeParticles();
    }
}, 250));

// Export functions for global access
window.startQuiz = startQuiz;
window.selectQuizAnswer = selectQuizAnswer;
window.restartQuiz = restartQuiz;
window.addToCart = addToCart;
window.subscribeNewsletter = subscribeNewsletter;
window.toggleMobileMenu = toggleMobileMen