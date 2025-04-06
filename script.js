// Simple script to add some interactivity

document.addEventListener('DOMContentLoaded', () => {
    // Gentle color shift for gradient background
    const gradientBg = document.querySelector('.gradient-bg');
    let hueRotation = 0;
    
    function animateGradient() {
        hueRotation = (hueRotation + 0.05) % 360;
        gradientBg.style.filter = `hue-rotate(${hueRotation}deg)`;
        requestAnimationFrame(animateGradient);
    }
    
    // Only start the animation if reduced motion is not preferred
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        animateGradient();
    }
    
    // Handle dark/light mode toggle based on system preference
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    function handleDarkModeChange(e) {
        document.body.classList.toggle('dark-mode', e.matches);
    }
    
    darkModeMediaQuery.addEventListener('change', handleDarkModeChange);
    
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