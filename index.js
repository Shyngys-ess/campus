document.addEventListener('DOMContentLoaded', () => {
    // --- Логика переключения темы (Светлая / Тёмная) ---
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('.theme-btn__icon') : null;
    
    // Проверяем сохранённую тему в браузере
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        if (themeIcon) themeIcon.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-theme');
        if (themeIcon) themeIcon.textContent = '🌙';
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            
            let theme = 'light';
            if (document.body.classList.contains('dark-theme')) {
                theme = 'dark';
                if (themeIcon) themeIcon.textContent = '☀️';
            } else {
                if (themeIcon) themeIcon.textContent = '🌙';
            }
            
            localStorage.setItem('theme', theme);
        });
    }

    // --- Логика для активных ссылок меню (опционально) ---
    const currentUrl = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.header__item a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentUrl) {
            link.classList.add('active-nav');
        }
    });
});