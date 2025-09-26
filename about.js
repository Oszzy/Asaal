// Initialize about page
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeChart();
    initializeCounters();
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
    
    // Initialize scroll animations
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

// Initialize impact chart
function initializeChart() {
    const chartElement = document.getElementById('impact-chart');
    if (!chartElement) return;
    
    const chart = echarts.init(chartElement);
    
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}%'
        },
        series: [
            {
                name: 'Impact Areas',
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
                        fontSize: '14',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { 
                        value: 35, 
                        name: 'Customer Wellness', 
                        itemStyle: { color: '#9CAF88' },
                        label: {
                            show: true,
                            position: 'inside',
                            formatter: '{b}\n{c}%',
                            fontSize: 10,
                            color: '#fff'
                        }
                    },
                    { 
                        value: 25, 
                        name: 'Sustainable Sourcing', 
                        itemStyle: { color: '#D4A574' },
                        label: {
                            show: true,
                            position: 'inside',
                            formatter: '{b}\n{c}%',
                            fontSize: 10,
                            color: '#fff'
                        }
                    },
                    { 
                        value: 20, 
                        name: 'Education', 
                        itemStyle: { color: '#2C3E2D' },
                        label: {
                            show: true,
                            position: 'inside',
                            formatter: '{b}\n{c}%',
                            fontSize: 10,
                            color: '#fff'
                        }
                    },
                    { 
                        value: 20, 
                        name: 'Community Support', 
                        itemStyle: { color: '#F7F5F3' },
                        label: {
                            show: true,
                            position: 'inside',
                            formatter: '{b}\n{c}%',
                            fontSize: 10,
                            color: '#2C3E2D'
                        }
                    }
                ]
            }
        ]
    };
    
    chart.setOption(option);
    
    // Make chart responsive
    window.addEventListener('resize', function() {
        chart.resize();
    });
}

// Initialize animated counters
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.count);
                animateCounter(counter, target);
                counterObserver.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Animate counter
function animateCounter(element, target) {
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        element.textContent = Math.floor(current).toLocaleString();
    }, 16);
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

// Timeline animation enhancement
function enhanceTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target.querySelector('.timeline-dot'),
                    scale: [0, 1],
                    duration: 500,
                    easing: 'easeOutBounce'
                });
                
                anime({
                    targets: entry.target.querySelector('.bg-white\\/90'),
                    translateX: [-50, 0],
                    opacity: [0, 1],
                    duration: 800,
                    delay: 200,
                    easing: 'easeOutCubic'
                });
                
                timelineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
}

// Team card hover effects
function initializeTeamCards() {
    const teamCards = document.querySelectorAll('.team-card');
    
    teamCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this.querySelector('.bg-sage\\/20'),
                scale: [1, 1.1],
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            anime({
                targets: this.querySelector('.bg-sage\\/20'),
                scale: [1.1, 1],
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
    });
}

// Value cards stagger animation
function animateValueCards() {
    const valueCards = document.querySelectorAll('.value-card');
    
    const valueObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: valueCards,
                    opacity: [0, 1],
                    translateY: [50, 0],
                    delay: anime.stagger(200),
                    duration: 800,
                    easing: 'easeOutCubic'
                });
                valueObserver.disconnect();
            }
        });
    }, { threshold: 0.2 });
    
    if (valueCards.length > 0) {
        valueObserver.observe(valueCards[0]);
    }
}

// Certification badges animation
function animateCertifications() {
    const badges = document.querySelectorAll('.certification-badge');
    
    const certObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: badges,
                    opacity: [0, 1],
                    scale: [0.8, 1],
                    delay: anime.stagger(150),
                    duration: 600,
                    easing: 'easeOutCubic'
                });
                certObserver.disconnect();
            }
        });
    }, { threshold: 0.3 });
    
    if (badges.length > 0) {
        certObserver.observe(badges[0]);
    }
}

// Parallax effect for hero background
function initializeParallax() {
    const hero = document.querySelector('.hero-bg');
    if (!hero) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        hero.style.transform = `translateY(${rate}px)`;
    });
}

// Enhanced scroll animations with stagger
function initializeEnhancedScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    
    const enhancedObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = Array.from(elements).indexOf(element) * 100;
                
                anime({
                    targets: element,
                    opacity: [0, 1],
                    translateY: [40, 0],
                    scale: [0.95, 1],
                    delay: delay,
                    duration: 800,
                    easing: 'easeOutCubic'
                });
                
                enhancedObserver.unobserve(element);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    elements.forEach(element => {
        enhancedObserver.observe(element);
    });
}

// Initialize all enhanced animations when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        enhanceTimelineAnimation();
        initializeTeamCards();
        animateValueCards();
        animateCertifications();
        initializeParallax();
        initializeEnhancedScrollAnimations();
    }, 500);
});

// Utility function for smooth page transitions
function initializePageTransitions() {
    const links = document.querySelectorAll('a[href$=".html"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Fade out current page
            anime({
                targets: 'body',
                opacity: [1, 0],
                duration: 300,
                easing: 'easeInCubic',
                complete: () => {
                    window.location.href = href;
                }
            });
        });
    });
}

// Initialize page transitions
document.addEventListener('DOMContentLoaded', function() {
    // Fade in page on load
    anime({
        targets: 'body',
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutCubic'
    });
    
    initializePageTransitions();
});

// Export functions for global access
window.enhanceTimelineAnimation = enhanceTimelineAnimation;
window.initializeTeamCards = initializeTeamCards;
window.animateValueCards = animateValueCards;
window.animateCertifications = animateCertifications;