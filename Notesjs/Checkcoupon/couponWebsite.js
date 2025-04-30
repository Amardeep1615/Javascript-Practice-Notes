document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const generatedCouponEl = document.getElementById('generated-coupon');
    const userCouponEl = document.getElementById('user-coupon');
    const validateBtn = document.getElementById('validate-btn');
    const generateBtn = document.getElementById('generate-btn');
    const validationResultEl = document.getElementById('validation-result');
    const expiryTimeEl = document.getElementById('expiry-time');
    const totalGeneratedEl = document.getElementById('total-generated');
    const totalRedeemedEl = document.getElementById('total-redeemed');
    const successRateEl = document.getElementById('success-rate');

    // App State
    let currentCoupon = '';
    let totalGenerated = 0;
    let totalRedeemed = 0;
    let timer;
    let timeLeft = 24 * 60 * 60; // 24 hours in seconds

    // Initialize the app
    init();

    // Event Listeners
    generateBtn.addEventListener('click', generateNewCoupon);
    validateBtn.addEventListener('click', validateCoupon);

    // Functions
    function init() {
        generateNewCoupon();
        startCountdown();
        updateStats();
    }

    function generateNewCoupon() {
        // Reset timer
        timeLeft = 24 * 60 * 60;
        updateTimerDisplay();

        // Generate a new coupon code (8 alphanumeric characters)
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        let coupon = '';
        
        for (let i = 0; i < 8; i++) {
            coupon += chars.charAt(Math.floor(Math.random() * chars.length));
            if (i === 3) coupon += '-'; // Add a hyphen after 4 characters
        }

        currentCoupon = coupon;
        generatedCouponEl.textContent = coupon;
        
        // Random discount between 5% and 50%
        const discount = Math.floor(Math.random() * 46) + 5;
        document.querySelector('.coupon-discount').textContent = `${discount}% OFF`;
        
        // Update stats
        totalGenerated++;
        updateStats();
        
        // Animation
        generatedCouponEl.classList.add('animate__animated', 'animate__pulse');
        setTimeout(() => {
            generatedCouponEl.classList.remove('animate__animated', 'animate__pulse');
        }, 1000);
    }

    function validateCoupon() {
        const userInput = userCouponEl.value.trim();
        
        if (!userInput) {
            showValidationResult('Please enter a coupon code', 'warning');
            return;
        }

        if (userInput === currentCoupon) {
            showValidationResult('✅ Coupon validated successfully!', 'success');
            totalRedeemed++;
            updateStats();
            
            // Confetti effect
            if (window.confetti) {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }
        } else {
            showValidationResult('❌ Invalid coupon code', 'danger');
        }
    }

    function showValidationResult(message, type) {
        validationResultEl.textContent = message;
        validationResultEl.className = ''; // Clear previous classes
        validationResultEl.classList.add('animate__animated', 'animate__fadeIn');
        
        switch (type) {
            case 'success':
                validationResultEl.classList.add('text-success');
                break;
            case 'danger':
                validationResultEl.classList.add('text-danger');
                break;
            case 'warning':
                validationResultEl.classList.add('text-warning');
                break;
            default:
                validationResultEl.classList.add('text-primary');
        }
    }

    function startCountdown() {
        clearInterval(timer);
        timer = setInterval(updateCountdown, 1000);
    }

    function updateCountdown() {
        timeLeft--;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            expiryTimeEl.textContent = 'EXPIRED';
            expiryTimeEl.classList.add('text-danger');
            generatedCouponEl.classList.add('text-decoration-line-through');
            return;
        }
        
        updateTimerDisplay();
    }

    function updateTimerDisplay() {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;
        
        expiryTimeEl.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function updateStats() {
        totalGeneratedEl.textContent = totalGenerated;
        totalRedeemedEl.textContent = totalRedeemed;
        
        const successRate = totalGenerated > 0 
            ? Math.round((totalRedeemed / totalGenerated) * 100) 
            : 0;
        successRateEl.textContent = successRate;
    }
});