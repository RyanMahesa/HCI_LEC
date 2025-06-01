document.addEventListener('DOMContentLoaded', () => {
    const toggleSidebar = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');
    const filterButtons = document.querySelectorAll('.filter__btn');
    const creativeGrid = document.getElementById('creativeGrid');
    const contentCards = creativeGrid.querySelectorAll('.content-card');

    // Create backdrop if it doesn't exist
    let backdrop = document.getElementById('sidebar-backdrop');
    if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.id = 'sidebar-backdrop';
        document.body.appendChild(backdrop);
    }

    // Check if device is mobile
    const isMobile = () => window.innerWidth <= 1023;
    
    // Initialize sidebar state for mobile
    if (isMobile()) {
        sidebar.classList.add('sidebar-hidden');
    }

    // Toggle sidebar with mobile-friendly behavior
    toggleSidebar.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('sidebar-hidden');
        
        // Handle backdrop and body scroll
        if (isMobile() && !sidebar.classList.contains('sidebar-hidden')) {
            document.body.classList.add('sidebar-open');
            backdrop.style.display = 'block';
        } else {
            document.body.classList.remove('sidebar-open');
            backdrop.style.display = 'none';
        }
    });

    // Close sidebar when clicking backdrop
    backdrop.addEventListener('click', () => {
        if (isMobile()) {
            sidebar.classList.add('sidebar-hidden');
            document.body.classList.remove('sidebar-open');
            backdrop.style.display = 'none';
        }
    });

    
    document.addEventListener('click', (e) => {
        if (window.innerWidth < 1024 && !sidebar.contains(e.target) && !toggleSidebar.contains(e.target)) {
            sidebar.classList.add('sidebar-hidden');
        }
    });

    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            
            filterButtons.forEach(btn => btn.classList.remove('filter__btn--active'));
            button.classList.add('filter__btn--active');

            
            contentCards.forEach(card => {
                const categories = card.getAttribute('data-categories');
                if (category === 'all' || categories.includes(category)) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.3s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});