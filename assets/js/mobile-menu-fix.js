// Mobile Menu Fix - Ensure hamburger menu works properly
document.addEventListener('DOMContentLoaded', function() {
    console.log('Mobile menu fix loaded');
    
    // Get elements
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');
    const menuIcon = document.querySelector('.mobile-menu-toggle i');
    
    console.log('Menu toggle:', menuToggle);
    console.log('Nav:', nav);
    console.log('Menu icon:', menuIcon);
    
    if (menuToggle && nav) {
        // Remove any existing event listeners and add new one
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Menu toggle clicked');
            
            // Toggle the active class
            nav.classList.toggle('active');
            
            // Update the icon
            if (menuIcon) {
                if (nav.classList.contains('active')) {
                    menuIcon.classList.remove('fa-bars');
                    menuIcon.classList.add('fa-times');
                    console.log('Menu opened - icon changed to X');
                } else {
                    menuIcon.classList.remove('fa-times');
                    menuIcon.classList.add('fa-bars');
                    console.log('Menu closed - icon changed to bars');
                }
            }
        });
        
        // Close menu when clicking on navigation links
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                if (menuIcon) {
                    menuIcon.classList.remove('fa-times');
                    menuIcon.classList.add('fa-bars');
                }
                console.log('Nav link clicked - menu closed');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
                nav.classList.remove('active');
                if (menuIcon) {
                    menuIcon.classList.remove('fa-times');
                    menuIcon.classList.add('fa-bars');
                }
            }
        });
        
        console.log('Mobile menu event listeners attached successfully');
    } else {
        console.error('Mobile menu elements not found');
    }
});
