document.addEventListener('DOMContentLoaded', () => {
    const toggleSidebar = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');
    const chatInput = document.getElementById('chatInput');
    const sendChat = document.getElementById('sendChat');
    const chatMessages = document.getElementById('chatMessages');

    // --- Kode yang sudah ada untuk sidebar dan chat ---
    if (toggleSidebar && sidebar) { // Pastikan elemen ada sebelum menambahkan event listener
        toggleSidebar.addEventListener('click', () => {
            sidebar.classList.toggle('sidebar-hidden');
        });

        document.addEventListener('click', (e) => {
            if (window.innerWidth < 1024 && !sidebar.contains(e.target) && !toggleSidebar.contains(e.target) && !sidebar.classList.contains('sidebar-hidden')) {
                sidebar.classList.add('sidebar-hidden');
            }
        });
    }

    if (chatInput && sendChat && chatMessages) { // Pastikan elemen chat ada
        sendChat.addEventListener('click', () => {
            const message = chatInput.value.trim();
            if (message) {
                const messageDiv = document.createElement('div');
                messageDiv.className = 'chat-message';
                messageDiv.textContent = `You: ${message}`; // Sebaiknya ganti "You" dengan nama pengguna jika ada
                chatMessages.appendChild(messageDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight;
                chatInput.value = '';
            }
        });

        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendChat.click(); // Memanggil klik pada tombol kirim
            }
        });
    }

    const searchInput = document.querySelector('.header__search');
    const profileLink = document.querySelector('.header__profile'); // Ini adalah tag <a>

    if (searchInput && profileLink) {
        const profileIcon = profileLink.querySelector('i'); // Targetkan tag <i> di dalamnya untuk perubahan style

        searchInput.addEventListener('input', () => {
            if (searchInput.value.trim() !== '') {
                profileIcon.classList.add('active-search-indicator');
            } else {
                profileIcon.classList.remove('active-search-indicator');
            }
        });

        // Tambahkan event listener untuk klik pada tombol profile
        profileLink.addEventListener('click', (e) => {
            e.preventDefault(); // Mencegah navigasi default
            profileIcon.classList.toggle('profile-clicked');
        });

        // Opsional: Hapus efek setelah beberapa detik
        profileLink.addEventListener('click', (e) => {
            e.preventDefault();
            profileIcon.classList.add('profile-clicked');
                
            // Hapus efek setelah 3 detik
            setTimeout(() => {
                profileIcon.classList.remove('profile-clicked');
            }, 3000);
        });
    }
    // --- Akhir kode BARU untuk fitur search ---
});