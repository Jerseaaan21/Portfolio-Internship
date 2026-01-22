// Add this at the beginning of script.js to ensure page starts at About section
window.addEventListener('load', () => {
    // Scroll to About section when page loads
    window.scrollTo(0, 0);
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    
    // Add mobile-specific optimizations
    if (window.innerWidth <= 768) {
        // Optimize for mobile performance
        document.body.classList.add('mobile-device');
        
        // Prevent zoom on double tap for UI elements
        let lastTouchEnd = 0;
        document.addEventListener('touchend', function (event) {
            const now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                const target = event.target;
                if (target.closest('.resume-btn, .view-project-btn, .project-tab-btn, .mobile-menu-toggle')) {
                    event.preventDefault();
                }
            }
            lastTouchEnd = now;
        }, false);
    }
    
    // Android-specific optimizations
    const isAndroid = /Android/i.test(navigator.userAgent);
    if (isAndroid) {
        document.body.classList.add('android-device');
        
        // Apply Android-specific styles for project buttons
        const style = document.createElement('style');
        style.textContent = `
            .android-device .project-tabs {
                flex-direction: row !important;
                flex-wrap: nowrap !important;
                gap: 5px !important;
                margin-bottom: 16px !important;
            }
            
            .android-device .project-tab-btn {
                padding: 5px 8px !important;
                font-size: 10px !important;
                min-width: 75px !important;
                max-width: 105px !important;
                min-height: 28px !important;
                border-radius: 14px !important;
                white-space: nowrap !important;
            }
            
            /* Android-specific skills card optimization */
            .android-device .skill-item {
                padding: 10px !important;
                margin: 0 20px 12px 20px !important;
                max-width: calc(100% - 40px) !important;
            }
            
            .android-device .skill-item h3 {
                font-size: 0.9rem !important;
                margin-bottom: 8px !important;
            }
            
            .android-device .skill-list li {
                font-size: 0.75rem !important;
                padding: 4px 0 !important;
                padding-left: 14px !important;
            }
            
            .android-device .skills-grid {
                grid-template-columns: 1fr !important;
                gap: 8px !important;
                padding: 0 !important;
            }
            
            /* Android-specific education card optimization */
            .android-device .education-item {
                padding: 8px !important;
                margin: 0 20px 10px 20px !important;
                max-width: calc(100% - 40px) !important;
            }
            
            .android-device .education-container {
                gap: 6px !important;
            }
            
            .android-device .school-name {
                font-size: 0.85rem !important;
            }
            
            .android-device .course-info,
            .android-device .date-info {
                font-size: 0.7rem !important;
                gap: 5px !important;
            }
            
            .android-device .education-icon {
                width: 12px !important;
                height: 12px !important;
            }
            
            /* Android-specific contact card optimization */
            .android-device .contact-item {
                padding: 15px !important;
                margin: 0 20px 12px 20px !important;
                max-width: calc(100% - 40px) !important;
            }
            
            .android-device .contact-grid {
                grid-template-columns: 1fr !important;
                gap: 8px !important;
            }
            
            .android-device .contact-icon {
                width: 45px !important;
                height: 45px !important;
                margin-bottom: 10px !important;
            }
            
            .android-device .contact-icon svg {
                width: 20px !important;
                height: 20px !important;
            }
            
            .android-device .contact-details h3 {
                font-size: 1rem !important;
                margin-bottom: 6px !important;
            }
            
            .android-device .contact-details .contact-text {
                font-size: 0.8rem !important;
            }
            
            @media (max-width: 480px) {
                .android-device .project-tabs {
                    flex-direction: row !important;
                    flex-wrap: nowrap !important;
                    gap: 4px !important;
                }
                
                .android-device .project-tab-btn {
                    padding: 4px 6px !important;
                    font-size: 9px !important;
                    min-width: 70px !important;
                    max-width: 95px !important;
                    min-height: 24px !important;
                    border-radius: 12px !important;
                    white-space: nowrap !important;
                }
                
                /* Extra small Android skills cards */
                .android-device .skill-item {
                    padding: 8px !important;
                    margin: 0 15px 10px 15px !important;
                    max-width: calc(100% - 30px) !important;
                }
                
                .android-device .skill-item h3 {
                    font-size: 0.85rem !important;
                    margin-bottom: 6px !important;
                }
                
                .android-device .skill-list li {
                    font-size: 0.7rem !important;
                    padding: 3px 0 !important;
                    padding-left: 12px !important;
                }
                
                .android-device .skills-grid {
                    grid-template-columns: 1fr !important;
                    gap: 6px !important;
                    padding: 0 !important;
                }
                
                /* Extra small Android education cards */
                .android-device .education-item {
                    padding: 6px !important;
                    margin: 0 15px 8px 15px !important;
                    max-width: calc(100% - 30px) !important;
                }
                
                .android-device .education-container {
                    gap: 4px !important;
                }
                
                .android-device .school-name {
                    font-size: 0.8rem !important;
                }
                
                .android-device .course-info,
                .android-device .date-info {
                    font-size: 0.65rem !important;
                    gap: 4px !important;
                }
                
                .android-device .education-icon {
                    width: 10px !important;
                    height: 10px !important;
                }
                
                /* Extra small Android contact cards */
                .android-device .contact-item {
                    padding: 12px !important;
                    margin: 0 15px 10px 15px !important;
                    max-width: calc(100% - 30px) !important;
                }
                
                .android-device .contact-grid {
                    grid-template-columns: 1fr !important;
                    gap: 6px !important;
                }
                
                .android-device .contact-icon {
                    width: 40px !important;
                    height: 40px !important;
                    margin-bottom: 8px !important;
                }
                
                .android-device .contact-icon svg {
                    width: 18px !important;
                    height: 18px !important;
                }
                
                .android-device .contact-details h3 {
                    font-size: 0.9rem !important;
                    margin-bottom: 5px !important;
                }
                
                .android-device .contact-details .contact-text {
                    font-size: 0.75rem !important;
                }
            }
        `;
        document.head.appendChild(style);
    }
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            mobileMenuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
        
        // Close mobile menu when clicking on a nav link
        const navLinkItems = navLinks.querySelectorAll('a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!mobileMenuToggle.contains(event.target) && !navLinks.contains(event.target)) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Handle orientation change
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = 'auto';
            }, 100);
        });
        
        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
});

// Modal Functions
function openModal(imageSrc, title, description) {
    const modal = document.getElementById('designModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    modalImage.src = imageSrc;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    const modal = document.getElementById('designModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    const modal = document.getElementById('designModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Project tabs functionality
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.project-tab-btn');
    const tabContents = document.querySelectorAll('.project-tab-content');
    
    console.log('Tab buttons found:', tabButtons.length);
    console.log('Tab contents found:', tabContents.length);
    
    // Handle resume download button
    const downloadBtn = document.getElementById('downloadResumeBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(event) {
            forceDownload(event, 'Resume/Ocampo_Resume.pdf', 'Renoel_Jersean_Ocampo_Resume.pdf');
        });
    }
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            console.log('Clicked tab:', targetTab);
            
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Remove active class from all content
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Add active class to corresponding content
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
                console.log('Activated content:', targetTab);
            } else {
                console.log('Target content not found:', targetTab);
            }
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
                
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to navigation based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
            
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').slice(1) === current) {
            a.classList.add('active');
        }
    });
});

// Force download function for browsers like Opera that try to view PDFs
function forceDownload(event, fileUrl, fileName) {
    event.preventDefault();
    
    // Method 1: Try the standard download approach first
    try {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        link.style.display = 'none';
        
        // Add to DOM temporarily
        document.body.appendChild(link);
        
        // Trigger the download
        link.click();
        
        // Clean up - remove the element
        document.body.removeChild(link);
        
        console.log(`Downloading: ${fileName}`);
        return;
    } catch (error) {
        console.log('Standard download failed, trying alternative method');
    }
    
    // Method 2: Fallback for browsers that don't support download attribute
    try {
        // Open in new window/tab which should trigger download
        const newWindow = window.open(fileUrl, '_blank');
        if (newWindow) {
            newWindow.focus();
        }
    } catch (error) {
        console.log('Alternative download method failed');
        // Method 3: Last resort - navigate to the file
        window.location.href = fileUrl;
    }
}