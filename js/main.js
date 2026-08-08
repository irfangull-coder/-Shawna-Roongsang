document.addEventListener('DOMContentLoaded', () => {
    // Sticky Navbar
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle (Basic implementation)
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            // For a complete implementation, you'd toggle a class to show/hide the menu
            // Here's a simple toggle for demonstration
            if(navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(255,255,255,0.95)';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            }
        });
    }

    // Handle Form Submission (Prevent Default)
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            btn.textContent = 'Sending...';
            btn.style.opacity = '0.8';
            
            // Simulate API call
            setTimeout(() => {
                btn.textContent = 'Message Sent!';
                btn.style.backgroundColor = '#2ecc71';
                btn.style.borderColor = '#2ecc71';
                contactForm.reset();
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.backgroundColor = '';
                    btn.style.borderColor = '';
                    btn.style.opacity = '1';
                }, 3000);
            }, 1500);
        });
    }

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                e.preventDefault();
                // Close mobile menu if open
                if(window.innerWidth <= 768 && navLinks.style.display === 'flex') {
                    navLinks.style.display = 'none';
                }

                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
