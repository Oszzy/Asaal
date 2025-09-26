// Product data
const products = [
    {
        id: 'lavender-oil',
        name: 'Lavender Pure Oil',
        price: 13.99,
        image: 'https://kimi-web-img.moonshot.cn/img/tattwamasi.in/3e6a304f8fab74e42d09507bec33aecb5900c5e2.png',
        category: 'floral',
        benefits: ['stress', 'sleep', 'skin'],
        sizes: ['5ml', '10ml', '15ml'],
        description: 'Pure lavender essential oil known for its calming and relaxing properties. Perfect for stress relief, better sleep, and skin care.',
        usage: 'Add 3-5 drops to diffuser, or dilute with carrier oil for topical application.',
        scentFamily: 'floral',
        topNotes: false,
        middleNotes: true,
        baseNotes: false
    },
    {
        id: 'eucalyptus-oil',
        name: 'Eucalyptus Pure Oil',
        price: 15.99,
        image: 'https://kimi-web-img.moonshot.cn/img/tattwamasi.in/3e6a304f8fab74e42d09507bec33aecb5900c5e2.png',
        category: 'herbal',
        benefits: ['energy', 'focus', 'skin'],
        sizes: ['10ml', '15ml', '30ml'],
        description: 'Refreshing and clarifying eucalyptus oil. Excellent for respiratory health, mental clarity, and natural cleaning.',
        usage: 'Use in diffuser for respiratory support, or add to steam inhalation.',
        scentFamily: 'herbal',
        topNotes: true,
        middleNotes: true,
        baseNotes: false
    },
    {
        id: 'tea-tree-oil',
        name: 'Tea Tree Essential Oil',
        price: 15.99,
        image: 'https://kimi-web-img.moonshot.cn/img/media.instamojo.com/e671fb8830cf8a9d5ea13d4a5344ccf272754808.jpg',
        category: 'herbal',
        benefits: ['skin', 'focus'],
        sizes: ['5ml', '10ml', '15ml'],
        description: 'Powerful natural antiseptic with numerous skin benefits. Ideal for acne treatment and immune support.',
        usage: 'Apply diluted to skin imperfections, or use in household cleaning solutions.',
        scentFamily: 'herbal',
        topNotes: true,
        middleNotes: false,
        baseNotes: false
    },
    {
        id: 'peppermint-oil',
        name: 'Peppermint Essential Oil',
        price: 16.99,
        image: 'https://kimi-web-img.moonshot.cn/img/tattwamasi.in/3e6a304f8fab74e42d09507bec33aecb5900c5e2.png',
        category: 'herbal',
        benefits: ['energy', 'focus'],
        sizes: ['5ml', '10ml', '30ml'],
        description: 'Invigorating and cooling peppermint oil. Perfect for energy boost, headache relief, and mental clarity.',
        usage: 'Diffuse for energy, or apply diluted to temples for headache relief.',
        scentFamily: 'herbal',
        topNotes: true,
        middleNotes: false,
        baseNotes: false
    },
    {
        id: 'lemon-oil',
        name: 'Lemon Essential Oil',
        price: 14.99,
        image: 'https://kimi-web-img.moonshot.cn/img/tattwamasi.in/3e6a304f8fab74e42d09507bec33aecb5900c5e2.png',
        category: 'citrus',
        benefits: ['energy', 'skin', 'focus'],
        sizes: ['10ml', '15ml', '30ml'],
        description: 'Bright and uplifting lemon oil. Excellent for mood enhancement, natural cleaning, and skin brightening.',
        usage: 'Add to diffuser for mood boost, or use in DIY cleaning products.',
        scentFamily: 'citrus',
        topNotes: true,
        middleNotes: false,
        baseNotes: false
    },
    {
        id: 'sandalwood-oil',
        name: 'Sandalwood Pure Oil',
        price: 27.99,
        image: 'https://kimi-web-img.moonshot.cn/img/purelyessential.com.au/a5465bbea3aa1922af53471ee3b4db7353d1ee8b.jpg',
        category: 'woody',
        benefits: ['stress', 'sleep', 'focus'],
        sizes: ['5ml', '10ml'],
        description: 'Sacred sandalwood oil with grounding properties. Ideal for meditation, spiritual practices, and deep relaxation.',
        usage: 'Use in meditation, or apply to pulse points for grounding effect.',
        scentFamily: 'woody',
        topNotes: false,
        middleNotes: false,
        baseNotes: true
    },
    {
        id: 'jasmine-absolute',
        name: 'Jasmine Absolute',
        price: 27.99,
        image: 'https://kimi-web-img.moonshot.cn/img/realfoodrn.com/c505aabc52174255917a5994ae2b586d2a5bbb82.jpg',
        category: 'floral',
        benefits: ['stress', 'sleep', 'skin'],
        sizes: ['5ml', '10ml'],
        description: 'Luxurious jasmine absolute with exotic floral aroma. Promotes emotional balance, confidence, and romantic mood.',
        usage: 'Use in perfumes, or diffuse for emotional support and relaxation.',
        scentFamily: 'floral',
        topNotes: false,
        middleNotes: true,
        baseNotes: false
    },
    {
        id: 'bergamot-oil',
        name: 'Bergamot Essential Oil',
        price: 21.99,
        image: 'https://kimi-web-img.moonshot.cn/img/tattwamasi.in/3e6a304f8fab74e42d09507bec33aecb5900c5e2.png',
        category: 'citrus',
        benefits: ['stress', 'skin', 'focus'],
        sizes: ['10ml', '15ml'],
        description: 'Uplifting bergamot oil with balancing properties. Excellent for mood enhancement, skin care, and stress relief.',
        usage: 'Diffuse for mood support, or use in skin care formulations.',
        scentFamily: 'citrus',
        topNotes: true,
        middleNotes: true,
        baseNotes: false
    },
    {
        id: 'rose-absolute',
        name: 'Rose Absolute',
        price: 30.99,
        image: 'https://kimi-web-img.moonshot.cn/img/m.media-amazon.com/6ec2e50109c955931a526386cb5c934b6cf8fecd.jpg',
        category: 'floral',
        benefits: ['stress', 'skin', 'sleep'],
        sizes: ['5ml', '10ml'],
        description: 'Pure rose absolute with divine floral fragrance. Promotes self-love, emotional healing, and luxurious skin care.',
        usage: 'Use in luxury skin care, or diffuse for emotional support.',
        scentFamily: 'floral',
        topNotes: false,
        middleNotes: true,
        baseNotes: false
    },
    {
        id: 'cedarwood-oil',
        name: 'Cedarwood Essential Oil',
        price: 18.99,
        image: 'https://kimi-web-img.moonshot.cn/img/purelyessential.com.au/a5465bbea3aa1922af53471ee3b4db7353d1ee8b.jpg',
        category: 'woody',
        benefits: ['stress', 'sleep', 'focus'],
        sizes: ['10ml', '15ml', '30ml'],
        description: 'Grounding cedarwood oil with warm, woody aroma. Perfect for meditation, sleep support, and emotional balance.',
        usage: 'Diffuse for grounding, or add to meditation practice.',
        scentFamily: 'woody',
        topNotes: false,
        middleNotes: false,
        baseNotes: true
    },
    {
        id: 'rosemary-oil',
        name: 'Rosemary Essential Oil',
        price: 16.99,
        image: 'https://kimi-web-img.moonshot.cn/img/tattwamasi.in/3e6a304f8fab74e42d09507bec33aecb5900c5e2.png',
        category: 'herbal',
        benefits: ['energy', 'focus', 'skin'],
        sizes: ['10ml', '15ml', '30ml'],
        description: 'Stimulating rosemary oil for mental clarity and focus. Excellent for study, work, and memory enhancement.',
        usage: 'Diffuse while working, or use in hair care formulations.',
        scentFamily: 'herbal',
        topNotes: true,
        middleNotes: true,
        baseNotes: false
    },
    {
        id: 'sweet-orange-oil',
        name: 'Sweet Orange Essential Oil',
        price: 13.99,
        image: 'https://kimi-web-img.moonshot.cn/img/tattwamasi.in/3e6a304f8fab74e42d09507bec33aecb5900c5e2.png',
        category: 'citrus',
        benefits: ['energy', 'stress', 'skin'],
        sizes: ['10ml', '15ml', '30ml'],
        description: 'Cheerful sweet orange oil with uplifting properties. Great for mood enhancement, natural cleaning, and immune support.',
        usage: 'Diffuse for happiness, or add to cleaning products.',
        scentFamily: 'citrus',
        topNotes: true,
        middleNotes: false,
        baseNotes: false
    },
    {
        id: 'ylang-ylang-oil',
        name: 'Ylang Ylang Essential Oil',
        price: 23.99,
        image: 'https://kimi-web-img.moonshot.cn/img/realfoodrn.com/c505aabc52174255917a5994ae2b586d2a5bbb82.jpg',
        category: 'floral',
        benefits: ['stress', 'sleep', 'skin'],
        sizes: ['5ml', '10ml', '15ml'],
        description: 'Exotic ylang ylang oil with intense floral aroma. Balances emotions, promotes relaxation, and enhances romance.',
        usage: 'Use in perfumes, or diffuse for emotional balance.',
        scentFamily: 'floral',
        topNotes: false,
        middleNotes: true,
        baseNotes: true
    },
    {
        id: 'frankincense-oil',
        name: 'Frankincense Essential Oil',
        price: 28.99,
        image: 'https://kimi-web-img.moonshot.cn/img/purelyessential.com.au/a5465bbea3aa1922af53471ee3b4db7353d1ee8b.jpg',
        category: 'woody',
        benefits: ['stress', 'focus', 'sleep'],
        sizes: ['5ml', '10ml', '15ml'],
        description: 'Sacred frankincense oil used for centuries in spiritual practices. Promotes meditation, skin health, and emotional balance.',
        usage: 'Use in meditation, or apply to skin for anti-aging benefits.',
        scentFamily: 'woody',
        topNotes: false,
        middleNotes: false,
        baseNotes: true
    },
    {
        id: 'geranium-oil',
        name: 'Geranium Essential Oil',
        price: 20.99,
        image: 'https://kimi-web-img.moonshot.cn/img/realfoodrn.com/c505aabc52174255917a5994ae2b586d2a5bbb82.jpg',
        category: 'floral',
        benefits: ['stress', 'skin', 'focus'],
        sizes: ['10ml', '15ml', '30ml'],
        description: 'Balancing geranium oil with rosy aroma. Excellent for hormonal balance, skin care, and emotional stability.',
        usage: 'Use in skin care, or diffuse for hormonal support.',
        scentFamily: 'floral',
        topNotes: false,
        middleNotes: true,
        baseNotes: false
    },
    {
        id: 'patchouli-oil',
        name: 'Patchouli Essential Oil',
        price: 15.99,
        image: 'https://kimi-web-img.moonshot.cn/img/purelyessential.com.au/a5465bbea3aa1922af53471ee3b4db7353d1ee8b.jpg',
        category: 'woody',
        benefits: ['stress', 'skin', 'sleep'],
        sizes: ['10ml', '15ml', '30ml'],
        description: 'Earthy patchouli oil with grounding properties. Promotes emotional balance, skin healing, and spiritual connection.',
        usage: 'Use in meditation, or apply to skin for healing.',
        scentFamily: 'woody',
        topNotes: false,
        middleNotes: false,
        baseNotes: true
    },
    {
        id: 'grapefruit-oil',
        name: 'Grapefruit Essential Oil',
        price: 15.99,
        image: 'https://kimi-web-img.moonshot.cn/img/tattwamasi.in/3e6a304f8fab74e42d09507bec33aecb5900c5e2.png',
        category: 'citrus',
        benefits: ['energy', 'skin', 'stress'],
        sizes: ['10ml', '15ml', '30ml'],
        description: 'Energizing grapefruit oil with detoxifying properties. Great for weight management, mood enhancement, and lymphatic support.',
        usage: 'Diffuse for energy, or add to cellulite massage blends.',
        scentFamily: 'citrus',
        topNotes: true,
        middleNotes: false,
        baseNotes: false
    },
    {
        id: 'chamomile-oil',
        name: 'Chamomile Essential Oil',
        price: 24.99,
        image: 'https://kimi-web-img.moonshot.cn/img/jambestbuy.com/2211721a78be0caf14c0325b29fab13145dbad6f.png',
        category: 'herbal',
        benefits: ['stress', 'sleep', 'skin'],
        sizes: ['5ml', '10ml'],
        description: 'Gentle chamomile oil with soothing properties. Perfect for sensitive skin, sleep support, and emotional comfort.',
        usage: 'Use in bedtime blends, or apply to sensitive skin.',
        scentFamily: 'herbal',
        topNotes: false,
        middleNotes: true,
        baseNotes: false
    },
    {
        id: 'neroli-oil',
        name: 'Neroli Essential Oil',
        price: 35.99,
        image: 'https://kimi-web-img.moonshot.cn/img/realfoodrn.com/c505aabc52174255917a5994ae2b586d2a5bbb82.jpg',
        category: 'floral',
        benefits: ['stress', 'skin', 'sleep'],
        sizes: ['5ml', '10ml'],
        description: 'Luxurious neroli oil from orange blossoms. Promotes cell regeneration, emotional healing, and skin rejuvenation.',
        usage: 'Use in anti-aging skin care, or diffuse for emotional support.',
        scentFamily: 'floral',
        topNotes: false,
        middleNotes: true,
        baseNotes: false
    },
    {
        id: 'vetiver-oil',
        name: 'Vetiver Essential Oil',
        price: 26.99,
        image: 'https://kimi-web-img.moonshot.cn/img/purelyessential.com.au/a5465bbea3aa1922af53471ee3b4db7353d1ee8b.jpg',
        category: 'woody',
        benefits: ['stress', 'sleep', 'focus'],
        sizes: ['5ml', '10ml', '15ml'],
        description: 'Deep and earthy vetiver oil with grounding properties. Excellent for anxiety relief, focus, and deep relaxation.',
        usage: 'Use in meditation, or diffuse for anxiety relief.',
        scentFamily: 'woody',
        topNotes: false,
        middleNotes: false,
        baseNotes: true
    }
];

// Global variables
let filteredProducts = [...products];
let currentProduct = null;
let blendOils = [];
let draggedOil = null;

// Initialize products page
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    initializeFilters();
    initializeBlendCreator();
    loadCart();
    initializeAnimations();
});

// Load and display products
function loadProducts() {
    const grid = document.getElementById('products-grid');
    const productCount = document.getElementById('product-count');
    
    grid.innerHTML = '';
    
    filteredProducts.forEach((product, index) => {
        const productCard = createProductCard(product, index);
        grid.appendChild(productCard);
    });
    
    productCount.textContent = `Showing ${filteredProducts.length} of ${products.length} products`;
    
    // Animate product cards
    anime({
        targets: '.product-card',
        opacity: [0, 1],
        translateY: [30, 0],
        delay: anime.stagger(100),
        duration: 600,
        easing: 'easeOutCubic'
    });
}

// Create product card element
function createProductCard(product, index) {
    const card = document.createElement('div');
    card.className = 'product-card rounded-2xl p-6 fade-in';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const benefitTags = product.benefits.map(benefit => 
        `<span class="px-2 py-1 bg-sage/20 text-sage text-xs rounded-full">${benefit}</span>`
    ).join('');
    
    card.innerHTML = `
        <div class="relative mb-4">
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded-xl">
            <button class="absolute top-3 right-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors" onclick="toggleWishlist('${product.id}')">
                <span class="text-sage">♡</span>
            </button>
        </div>
        
        <h3 class="text-xl font-display font-bold mb-2">${product.name}</h3>
        <p class="text-forest/70 mb-3 text-sm line-clamp-2">${product.description}</p>
        
        <div class="flex flex-wrap gap-1 mb-4">
            ${benefitTags}
        </div>
        
        <div class="flex justify-between items-center">
            <span class="text-2xl font-bold text-sage">£${product.price}</span>
            <div class="flex space-x-2">
                <button class="px-4 py-2 border-2 border-sage text-sage hover:bg-sage hover:text-white rounded-full text-sm font-semibold transition-all duration-300" onclick="openProductModal('${product.id}')">
                    View
                </button>
                <button class="btn-primary text-white px-4 py-2 rounded-full text-sm font-semibold" onclick="addToCart('${product.id}')">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Initialize filters
function initializeFilters() {
    // Filter tags
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            // Remove active class from all tags
            document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
            // Add active class to clicked tag
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            applyFilter(filter);
        });
    });
    
    // Checkbox filters
    document.querySelectorAll('.price-filter, .benefit-filter, .size-filter').forEach(checkbox => {
        checkbox.addEventListener('change', applyCheckboxFilters);
    });
    
    // Sort dropdown
    document.getElementById('sort-select').addEventListener('change', function() {
        sortProducts(this.value);
    });
}

// Apply filter
function applyFilter(filter) {
    if (filter === 'all') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => {
            return product.category === filter || product.benefits.includes(filter);
        });
    }
    
    loadProducts();
}

// Apply checkbox filters
function applyCheckboxFilters() {
    const priceFilters = Array.from(document.querySelectorAll('.price-filter:checked'))
        .map(cb => ({ min: parseFloat(cb.dataset.min), max: parseFloat(cb.dataset.max) }));
    
    const benefitFilters = Array.from(document.querySelectorAll('.benefit-filter:checked'))
        .map(cb => cb.dataset.benefit);
    
    const sizeFilters = Array.from(document.querySelectorAll('.size-filter:checked'))
        .map(cb => cb.dataset.size);
    
    filteredProducts = products.filter(product => {
        // Price filter
        const priceMatch = priceFilters.length === 0 || priceFilters.some(range => 
            product.price >= range.min && product.price <= range.max
        );
        
        // Benefit filter
        const benefitMatch = benefitFilters.length === 0 || benefitFilters.some(benefit => 
            product.benefits.includes(benefit)
        );
        
        // Size filter
        const sizeMatch = sizeFilters.length === 0 || sizeFilters.some(size => 
            product.sizes.includes(size)
        );
        
        return priceMatch && benefitMatch && sizeMatch;
    });
    
    loadProducts();
}

// Sort products
function sortProducts(sortBy) {
    switch (sortBy) {
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'popularity':
            // Simulate popularity based on benefits count
            filteredProducts.sort((a, b) => b.benefits.length - a.benefits.length);
            break;
    }
    
    loadProducts();
}

// Clear all filters
function clearFilters() {
    // Uncheck all checkboxes
    document.querySelectorAll('.price-filter, .benefit-filter, .size-filter').forEach(cb => {
        cb.checked = false;
    });
    
    // Reset filter tag
    document.querySelectorAll('.filter-tag').forEach(tag => tag.classList.remove('active'));
    document.querySelector('.filter-tag[data-filter="all"]').classList.add('active');
    
    // Reset products
    filteredProducts = [...products];
    loadProducts();
}

// Initialize blend creator
function initializeBlendCreator() {
    const oilSelection = document.getElementById('oil-selection');
    
    // Create oil droplets
    products.slice(0, 12).forEach(product => {
        const droplet = document.createElement('div');
        droplet.className = 'oil-droplet flex items-center justify-center text-white font-bold text-xs';
        droplet.style.background = getOilColor(product.scentFamily);
        droplet.textContent = product.name.split(' ')[0].substring(0, 3);
        droplet.draggable = true;
        droplet.dataset.productId = product.id;
        droplet.dataset.price = product.price;
        droplet.dataset.name = product.name;
        droplet.dataset.family = product.scentFamily;
        
        // Add drag event listeners
        droplet.addEventListener('dragstart', handleDragStart);
        droplet.addEventListener('click', () => addOilToBlend(product));
        
        oilSelection.appendChild(droplet);
    });
    
    // Add drop event listeners to pyramid levels
    document.querySelectorAll('.blend-pyramid').forEach(level => {
        level.addEventListener('dragover', handleDragOver);
        level.addEventListener('drop', handleDrop);
        level.addEventListener('dragenter', handleDragEnter);
        level.addEventListener('dragleave', handleDragLeave);
    });
}

// Get oil color based on scent family
function getOilColor(family) {
    const colors = {
        floral: 'linear-gradient(135deg, #E91E63, #F8BBD9)',
        citrus: 'linear-gradient(135deg, #FF9800, #FFEB3B)',
        woody: 'linear-gradient(135deg, #795548, #8D6E63)',
        herbal: 'linear-gradient(135deg, #4CAF50, #81C784)'
    };
    return colors[family] || colors.herbal;
}

// Drag and drop handlers
function handleDragStart(e) {
    draggedOil = {
        id: e.target.dataset.productId,
        name: e.target.dataset.name,
        price: parseFloat(e.target.dataset.price),
        family: e.target.dataset.family
    };
    e.dataTransfer.effectAllowed = 'copy';
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
}

function handleDragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function handleDragLeave(e) {
    e.target.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    e.target.classList.remove('drag-over');
    
    if (draggedOil) {
        const level = e.target.dataset.level;
        addOilToPyramid(draggedOil, level);
        draggedOil = null;
    }
}

// Add oil to blend
function addOilToBlend(product) {
    if (blendOils.find(oil => oil.id === product.id)) {
        showNotification('Oil already in blend', 'warning');
        return;
    }
    
    blendOils.push({
        id: product.id,
        name: product.name,
        price: product.price,
        family: product.scentFamily
    });
    
    updateBlendDisplay();
    updateBlendPrice();
    updateBlendRecommendations();
}

// Add oil to pyramid
function addOilToPyramid(oil, level) {
    if (blendOils.find(o => o.id === oil.id)) {
        showNotification('Oil already in blend', 'warning');
        return;
    }
    
    blendOils.push({
        ...oil,
        level: level
    });
    
    updateBlendDisplay();
    updateBlendPrice();
    updateBlendRecommendations();
}

// Update blend display
function updateBlendDisplay() {
    const container = document.getElementById('selected-oils');
    
    if (blendOils.length === 0) {
        container.innerHTML = '<p class="text-forest/60 text-center py-4">Drag oils here to create your blend</p>';
        return;
    }
    
    container.innerHTML = blendOils.map(oil => `
        <div class="flex justify-between items-center bg-white/50 rounded-lg p-3">
            <div>
                <span class="font-medium">${oil.name}</span>
                ${oil.level ? `<span class="text-xs text-forest/60 ml-2">(${oil.level} note)</span>` : ''}
            </div>
            <div class="flex items-center space-x-2">
                <span class="text-sage font-bold">$${oil.price}</span>
                <button onclick="removeOilFromBlend('${oil.id}')" class="text-forest/40 hover:text-red-500">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        </div>
    `).join('');
}

// Remove oil from blend
function removeOilFromBlend(oilId) {
    blendOils = blendOils.filter(oil => oil.id !== oilId);
    updateBlendDisplay();
    updateBlendPrice();
    updateBlendRecommendations();
}

// Update blend price
function updateBlendPrice() {
    const total = blendOils.reduce((sum, oil) => sum + oil.price, 0);
    document.getElementById('blend-price').textContent = `£${total.toFixed(2)}`;
}

// Update blend recommendations
function updateBlendRecommendations() {
    const container = document.getElementById('blend-recommendations');
    
    if (blendOils.length === 0) {
        container.textContent = 'Add oils to see personalized recommendations for your blend.';
        return;
    }
    
    const families = [...new Set(blendOils.map(oil => oil.family))];
    const recommendations = getBlendRecommendations(families);
    
    container.innerHTML = `
        <div class="space-y-3">
            <div class="font-medium">Based on your selection:</div>
            ${recommendations.map(rec => `
                <div class="bg-sage/10 rounded-lg p-3">
                    <div class="font-medium text-sm">${rec.title}</div>
                    <div class="text-xs text-forest/70">${rec.description}</div>
                </div>
            `).join('')}
        </div>
    `;
}

// Get blend recommendations
function getBlendRecommendations(families) {
    const recommendations = [];
    
    if (families.includes('citrus') && families.includes('floral')) {
        recommendations.push({
            title: 'Balanced Blend',
            description: 'Citrus and floral oils create a harmonious, uplifting blend perfect for mood enhancement.'
        });
    }
    
    if (families.includes('woody') && families.includes('herbal')) {
        recommendations.push({
            title: 'Grounding Blend',
            description: 'Woody and herbal oils provide excellent grounding and focus properties.'
        });
    }
    
    if (families.length === 1) {
        recommendations.push({
            title: 'Expand Your Blend',
            description: 'Consider adding oils from different scent families for more complexity.'
        });
    }
    
    if (blendOils.length >= 3) {
        recommendations.push({
            title: 'Perfect Size',
            description: 'You have a good number of oils for a well-balanced blend.'
        });
    }
    
    return recommendations;
}

// Save blend
function saveBlend() {
    if (blendOils.length === 0) {
        showNotification('Add oils to your blend first', 'warning');
        return;
    }
    
    const blendName = prompt('Enter a name for your blend:') || `Custom Blend ${Date.now()}`;
    const blend = {
        name: blendName,
        oils: blendOils,
        totalPrice: blendOils.reduce((sum, oil) => sum + oil.price, 0),
        created: new Date().toISOString()
    };
    
    // Save to localStorage
    const savedBlends = JSON.parse(localStorage.getItem('assal-blends') || '[]');
    savedBlends.push(blend);
    localStorage.setItem('assal-blends', JSON.stringify(savedBlends));
    
    showNotification('Blend saved successfully!', 'success');
    
    // Reset blend creator
    blendOils = [];
    updateBlendDisplay();
    updateBlendPrice();
    updateBlendRecommendations();
}

// Product modal functions
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProduct = product;
    
    document.getElementById('modal-product-name').textContent = product.name;
    document.getElementById('modal-product-image').src = product.image;
    document.getElementById('modal-product-image').alt = product.name;
    document.getElementById('modal-product-price').textContent = `$${product.price}`;
    document.getElementById('modal-product-description').textContent = product.description;
    document.getElementById('modal-product-usage').textContent = product.usage;
    
    // Benefits
    const benefitsContainer = document.getElementById('modal-product-benefits');
    benefitsContainer.innerHTML = product.benefits.map(benefit => 
        `<span class="px-3 py-1 bg-sage/20 text-sage text-sm rounded-full">${benefit}</span>`
    ).join('');
    
    // Sizes
    const sizesContainer = document.getElementById('modal-product-sizes');
    sizesContainer.innerHTML = product.sizes.map(size => 
        `<button class="px-3 py-1 border border-sage/30 rounded-lg hover:bg-sage/10 transition-colors" onclick="selectSize('${size}')">${size}</button>`
    ).join('');
    
    // Show modal
    document.getElementById('product-modal').classList.remove('hidden');
    
    // Animate modal
    anime({
        targets: '#product-modal .modal-content',
        scale: [0.9, 1],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutCubic'
    });
}

function closeProductModal() {
    document.getElementById('product-modal').classList.add('hidden');
    currentProduct = null;
}

function selectSize(size) {
    // Remove active class from all size buttons
    document.querySelectorAll('#modal-product-sizes button').forEach(btn => {
        btn.classList.remove('bg-sage', 'text-white');
        btn.classList.add('border-sage/30');
    });
    
    // Add active class to selected button
    event.target.classList.add('bg-sage', 'text-white');
    event.target.classList.remove('border-sage/30');
}

function addToCartFromModal() {
    if (currentProduct) {
        addToCart(currentProduct.id);
        closeProductModal();
    }
}

// Cart functions
function toggleCart() {
    const modal = document.getElementById('cart-modal');
    const isHidden = modal.classList.contains('hidden');
    
    if (isHidden) {
        loadCartItems();
        modal.classList.remove('hidden');
        
        anime({
            targets: '#cart-modal .modal-content',
            scale: [0.9, 1],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutCubic'
        });
    } else {
        modal.classList.add('hidden');
    }
}

function loadCartItems() {
    const container = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');
    
    if (cart.length === 0) {
        container.innerHTML = '<p class="text-forest/60 text-center py-8">Your cart is empty</p>';
        totalElement.textContent = '£0.00';
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    container.innerHTML = cart.map(item => `
        <div class="flex justify-between items-center bg-white/50 rounded-lg p-4">
            <div class="flex-1">
                <h4 class="font-semibold">${item.name}</h4>
                <p class="text-sm text-forest/60">Quantity: ${item.quantity}</p>
            </div>
            <div class="text-right">
                <p class="font-bold text-sage">£${(item.price * item.quantity).toFixed(2)}</p>
                <button onclick="removeFromCart('${item.id}')" class="text-xs text-forest/40 hover:text-red-500">Remove</button>
            </div>
        </div>
    `).join('');
    
    totalElement.textContent = `£${total.toFixed(2)}`;
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartDisplay();
    loadCartItems();
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty', 'warning');
        return;
    }
    
    showNotification('Checkout functionality coming soon!', 'info');
}

// Wishlist functions
function toggleWishlist(productId) {
    const wishlist = JSON.parse(localStorage.getItem('assal-wishlist') || '[]');
    const index = wishlist.indexOf(productId);
    
    if (index > -1) {
        wishlist.splice(index, 1);
        showNotification('Removed from wishlist', 'info');
    } else {
        wishlist.push(productId);
        showNotification('Added to wishlist', 'success');
    }
    
    localStorage.setItem('assal-wishlist', JSON.stringify(wishlist));
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    const colors = {
        success: 'bg-green-500',
        warning: 'bg-yellow-500',
        error: 'bg-red-500',
        info: 'bg-sage'
    };
    
    notification.className = `fixed top-20 right-4 ${colors[type]} text-white px-6 py-3 rounded-lg shadow-lg z-50`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
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

// Initialize animations
function initializeAnimations() {
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

// Export functions for global access
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.addToCartFromModal = addToCartFromModal;
window.selectSize = selectSize;
window.toggleCart = toggleCart;
window.removeFromCart = removeFromCart;
window.checkout = checkout;
window.toggleWishlist = toggleWishlist;
window.clearFilters = clearFilters;
window.saveBlend = saveBlend;
window.removeOilFromBlend = removeOilFromBlend;