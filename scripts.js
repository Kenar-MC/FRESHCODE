document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Add mousemove event listener for interactive effect
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        sections.forEach(section => {
            section.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
        });
    });

    // Reset transform on mouseout
    document.addEventListener('mouseout', () => {
        sections.forEach(section => {
            section.style.transform = 'translate(0, 0)';
        });
    });
});