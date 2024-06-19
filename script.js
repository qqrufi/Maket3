document.addEventListener('DOMContentLoaded', () => {
    const openFormLink = document.getElementById('openFormLink');
    const popupForm = document.getElementById('popupForm');
    const closeBtn = document.querySelector('.close-btn');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    const messageInput = document.getElementById('message');

    openFormLink.addEventListener('click', (event) => {
        event.preventDefault();
        popupForm.classList.add('show');
    });

    closeBtn.addEventListener('click', () => {
        popupForm.classList.remove('show');
        messageInput.value = '';
        messageInput.style.height = 'auto';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popupForm) {
            popupForm.classList.remove('show');
            messageInput.value = '';
            messageInput.style.height = 'auto';
        }
    });

    emailInput.addEventListener('input', () => {
        if (emailInput.validity.valid) {
            emailError.style.display = 'none';
        } else {
            emailError.style.display = 'block';
        }
    });

    phoneInput.addEventListener('input', () => {
        if (phoneInput.validity.valid) {
            phoneError.style.display = 'none';
        } else {
            phoneError.style.display = 'block';
        }
    });

    messageInput.addEventListener('input', () => {
        messageInput.style.height = 'auto';
        messageInput.style.height = messageInput.scrollHeight + 'px';
    });
});
