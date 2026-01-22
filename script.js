// Add this at the beginning of script.js to ensure page starts at About section
window.addEventListener('load', () => {
    // Scroll to About section when page loads
    window.scrollTo(0, 0);
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
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
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.tabs a').forEach(a => {
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