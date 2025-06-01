document.addEventListener('DOMContentLoaded', () => {
    const toggleSidebar = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');
    const filterButtons = document.querySelectorAll('.filter__btn');
    const chattingGrid = document.getElementById('chattingGrid');
    const contentCards = chattingGrid.querySelectorAll('.content-card');

    
    toggleSidebar.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-hidden');
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