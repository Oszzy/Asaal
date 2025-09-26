// Global variables for booking
let selectedConsultationType = null;
let selectedDate = null;
let selectedTime = null;
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// Initialize contact page
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeCalendar();
    initializeTimeSlots();
    loadCart();
});

// Initialize animations
function initializeAnimations() {
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
    
    // Animate contact cards with stagger
    const contactCards = document.querySelectorAll('.contact-card');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: contactCards,
                    opacity: [0, 1],
                    translateY: [50, 0],
                    delay: anime.stagger(200),
                    duration: 800,
                    easing: 'easeOutCubic'
                });
                cardObserver.disconnect();
            }
        });
    }, { threshold: 0.2 });
    
    if (contactCards.length > 0) {
        cardObserver.observe(contactCards[0]);
    }
}

// Initialize calendar
function initializeCalendar() {
    generateCalendar();
}

// Generate calendar
function generateCalendar() {
    const calendarGrid = document.getElementById('calendar-grid');
    const monthElement = document.getElementById('calendar-month');
    
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    monthElement.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
    // Clear existing calendar
    calendarGrid.innerHTML = '';
    
    // Add day headers
    const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayHeaders.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'calendar-day font-semibold text-forest/60 bg-sage/10';
        dayHeader.textContent = day;
        calendarGrid.appendChild(dayHeader);
    });
    
    // Get first day of month and number of days
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const today = new Date();
    
    // Add empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day disabled';
        calendarGrid.appendChild(emptyDay);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        const dayDate = new Date(currentYear, currentMonth, day);
        
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        
        // Check if day is in the past
        if (dayDate < today) {
            dayElement.classList.add('disabled');
        } else {
            dayElement.classList.add('available');
            dayElement.onclick = () => selectDate(day);
        }
        
        calendarGrid.appendChild(dayElement);
    }
}

// Change month
function changeMonth(direction) {
    currentMonth += direction;
    
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    } else if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    
    generateCalendar();
    initializeTimeSlots();
    selectedDate = null;
    selectedTime = null;
    updateBookingButton();
}

// Select date
function selectDate(day) {
    // Remove previous selection
    document.querySelectorAll('.calendar-day.selected').forEach(el => {
        el.classList.remove('selected');
    });
    
    // Add selection to clicked day
    event.target.classList.add('selected');
    
    selectedDate = new Date(currentYear, currentMonth, day);
    selectedTime = null;
    
    initializeTimeSlots();
    updateBookingButton();
    updateSelectedDateTime();
}

// Initialize time slots
function initializeTimeSlots() {
    const timeSlotsContainer = document.getElementById('time-slots');
    timeSlotsContainer.innerHTML = '';
    
    if (!selectedDate) {
        timeSlotsContainer.innerHTML = '<p class="text-forest/60 text-center py-8 col-span-2">Please select a date first</p>';
        return;
    }
    
    const timeSlots = [
        '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', 
        '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
    ];
    
    timeSlots.forEach(time => {
        const timeSlot = document.createElement('button');
        timeSlot.className = 'time-slot px-4 py-3 rounded-lg font-medium';
        timeSlot.textContent = time;
        timeSlot.onclick = () => selectTime(time, timeSlot);
        timeSlotsContainer.appendChild(timeSlot);
    });
}

// Select time
function selectTime(time, element) {
    // Remove previous selection
    document.querySelectorAll('.time-slot.selected').forEach(el => {
        el.classList.remove('selected');
    });
    
    // Add selection to clicked time slot
    element.classList.add('selected');
    
    selectedTime = time;
    updateBookingButton();
    updateSelectedDateTime();
}

// Select consultation type
function selectConsultationType(type, duration) {
    // Remove previous selection
    document.querySelectorAll('.consultation-type.selected').forEach(el => {
        el.classList.remove('selected');
    });
    
    // Add selection to clicked type
    event.target.classList.add('selected');
    
    selectedConsultationType = {
        type: type,
        duration: duration,
        element: event.target
    };
    
    updateBookingButton();
    updateSelectedType();
}

// Update selected type display
function updateSelectedType() {
    const typeElement = document.getElementById('selected-type');
    if (selectedConsultationType) {
        const typeNames = {
            'intro': 'Introductory Session (15 min) - Free',
            'personalized': 'Personalized Blend (30 min) - £20',
            'comprehensive': 'Comprehensive Wellness (60 min) - £35'
        };
        typeElement.textContent = typeNames[selectedConsultationType.type] || 'No type selected';
    }
}

// Update selected date/time display
function updateSelectedDateTime() {
    const datetimeElement = document.getElementById('selected-datetime');
    if (selectedDate && selectedTime) {
        const dateString = selectedDate.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        datetimeElement.textContent = `${dateString} at ${selectedTime}`;
    } else {
        datetimeElement.textContent = 'No date/time selected';
    }
}

// Update booking button state
function updateBookingButton() {
    const button = document.getElementById('book-button');
    const isComplete = selectedConsultationType && selectedDate && selectedTime;
    
    button.disabled = !isComplete;
    
    if (isComplete) {
        button.textContent = 'Complete Booking';
        button.classList.remove('opacity-50', 'cursor-not-allowed');
    } else {
        button.textContent = 'Please complete all steps';
        button.classList.add('opacity-50', 'cursor-not-allowed');
    }
}

// Submit booking
function submitBooking(event) {
    event.preventDefault();
    
    if (!selectedConsultationType || !selectedDate || !selectedTime) {
        showNotification('Please complete all booking steps', 'warning');
        return;
    }
    
    const formData = new FormData(event.target);
    const bookingData = {
        consultationType: selectedConsultationType.type,
        date: selectedDate,
        time: selectedTime,
        name: formData.get('name') || event.target.querySelector('input[type="text"]').value,
        email: formData.get('email') || event.target.querySelector('input[type="email"]').value,
        phone: formData.get('phone') || event.target.querySelector('input[type="tel"]').value,
        wellnessGoal: formData.get('wellnessGoal') || event.target.querySelector('select').value,
        notes: formData.get('notes') || event.target.querySelector('textarea').value
    };
    
    // Simulate booking submission
    const button = event.target.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    
    button.textContent = 'Booking...';
    button.disabled = true;
    
    setTimeout(() => {
        // Save booking to localStorage (in a real app, this would be sent to a server)
        const bookings = JSON.parse(localStorage.getItem('assal-bookings') || '[]');
        bookings.push({
            ...bookingData,
            id: Date.now(),
            status: 'confirmed',
            created: new Date().toISOString()
        });
        localStorage.setItem('assal-bookings', JSON.stringify(bookings));
        
        button.textContent = 'Booking Confirmed!';
        button.style.background = '#9CAF88';
        
        showNotification('Consultation booked successfully! Check your email for confirmation.', 'success');
        
        // Reset form after delay
        setTimeout(() => {
            resetBookingForm();
            button.textContent = originalText;
            button.disabled = false;
            button.style.background = '';
        }, 3000);
    }, 2000);
}

// Reset booking form
function resetBookingForm() {
    selectedConsultationType = null;
    selectedDate = null;
    selectedTime = null;
    
    // Clear selections
    document.querySelectorAll('.consultation-type.selected').forEach(el => {
        el.classList.remove('selected');
    });
    document.querySelectorAll('.calendar-day.selected').forEach(el => {
        el.classList.remove('selected');
    });
    document.querySelectorAll('.time-slot.selected').forEach(el => {
        el.classList.remove('selected');
    });
    
    // Clear form
    document.getElementById('booking-form').reset();
    
    // Reset displays
    document.getElementById('selected-type').textContent = 'No type selected';
    document.getElementById('selected-datetime').textContent = 'No date/time selected';
    
    // Reset time slots
    initializeTimeSlots();
    updateBookingButton();
}

// Toggle FAQ
function toggleFAQ(index) {
    const content = document.getElementById(`faq-content-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    
    if (content.classList.contains('open')) {
        content.classList.remove('open');
        icon.style.transform = 'rotate(0deg)';
    } else {
        // Close all other FAQs
        document.querySelectorAll('.faq-content.open').forEach(el => {
            el.classList.remove('open');
        });
        document.querySelectorAll('[id^="faq-icon-"]').forEach(el => {
            el.style.transform = 'rotate(0deg)';
        });
        
        // Open clicked FAQ
        content.classList.add('open');
        icon.style.transform = 'rotate(180deg)';
    }
}

// Submit contact form
function submitContactForm(event) {
    event.preventDefault();
    
    const button = event.target.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    
    button.textContent = 'Sending...';
    button.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        button.textContent = 'Message Sent!';
        button.style.background = '#9CAF88';
        
        showNotification('Thank you for your message! We\'ll get back to you within 24 hours.', 'success');
        
        // Reset form after delay
        setTimeout(() => {
            event.target.reset();
            button.textContent = originalText;
            button.disabled = false;
            button.style.background = '';
        }, 3000);
    }, 1500);
}

// Start live chat
function startLiveChat() {
    // Simulate live chat initiation
    showNotification('Connecting you with a wellness expert...', 'info');
    
    setTimeout(() => {
        showNotification('Live chat feature coming soon! Please use our contact form or call us.', 'info');
    }, 2000);
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
    
    notification.className = `fixed top-20 right-4 ${colors[type]} text-white px-6 py-3 rounded-lg shadow-lg z-50 max-w-sm`;
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
            }, 4000);
        }
    });
}

// Enhanced form validation
function initializeFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });
    });
}

// Validate individual field
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let message = '';
    
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        message = 'This field is required';
    } else if (field.type === 'email' && value && !isValidEmail(value)) {
        isValid = false;
        message = 'Please enter a valid email address';
    } else if (field.type === 'tel' && value && !isValidPhone(value)) {
        isValid = false;
        message = 'Please enter a valid phone number';
    }
    
    if (isValid) {
        field.classList.remove('error');
        removeFieldError(field);
    } else {
        field.classList.add('error');
        showFieldError(field, message);
    }
    
    return isValid;
}

// Show field error
function showFieldError(field, message) {
    removeFieldError(field);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error text-red-500 text-sm mt-1';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
    
    // Add error styling to field
    field.style.borderColor = '#ef4444';
    field.style.backgroundColor = 'rgba(239, 68, 68, 0.05)';
}

// Remove field error
function removeFieldError(field) {
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    // Remove error styling
    field.style.borderColor = '';
    field.style.backgroundColor = '';
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation
function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

// Initialize form validation when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeFormValidation();
});

// Export functions for global access
window.selectConsultationType = selectConsultationType;
window.changeMonth = changeMonth;
window.selectDate = selectDate;
window.selectTime = selectTime;
window.submitBooking = submitBooking;
window.toggleFAQ = toggleFAQ;
window.submitContactForm = submitContactForm;
window.startLiveChat = startLiveChat;