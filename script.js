document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.querySelector('#skills');
    const progressBars = document.querySelectorAll('.progress-bar');

    const animateProgressBars = () => {
        progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            bar.style.width = targetWidth + '%';
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.unobserve(skillsSection);
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is visible
    });

    if (skillsSection) {
        observer.observe(skillsSection);
    }
});
