// Smooth scroll for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const section = document.querySelector(href);
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Add scroll event listener for navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }
});

// Initialize cart count
let cartCount = 0;

// Add to cart functionality
document.querySelectorAll('.watch-card').forEach(card => {
    card.addEventListener('click', () => {
        cartCount++;
        document.querySelector('.cart').textContent = `CART (${cartCount})`;
        
        // Add animation effect
        const notification = document.createElement('div');
        notification.textContent = 'Added to cart';
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.background = '#1a1a1a';
        notification.style.color = 'white';
        notification.style.padding = '1rem 2rem';
        notification.style.borderRadius = '5px';
        notification.style.animation = 'fadeIn 0.3s, fadeOut 0.3s 2s forwards';
        
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 2300);
    });
});

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(20px); }
    }
`;
document.head.appendChild(style);