// Simple script to add some interactivity

document.addEventListener('DOMContentLoaded', () => {
    // Add magnetic effect to links
    const links = document.querySelectorAll('.link');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.05)';
            link.style.transition = 'transform 0.3s ease, color 0.3s ease';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1)';
        });
    });
}); 