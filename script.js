document.addEventListener('DOMContentLoaded', () => {
    
    
    const card = document.querySelector('.portfolio-card');
    const links = document.querySelectorAll('.nav-links a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetUrl = link.getAttribute('href');

            
            if (!targetUrl || targetUrl === '#') return;

            
            e.preventDefault();

            
            card.classList.add('fade-out');

            
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 200); 
        });
    });
});