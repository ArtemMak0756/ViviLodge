document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        banner.style.display = 'block';
    }

    acceptButton.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        banner.style.display = 'none';
    });
});