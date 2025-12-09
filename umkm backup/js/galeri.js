const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const caption = card.querySelector('.caption');
    caption.style.display = 'none';

    card.addEventListener('click', () => {
        caption.style.display = caption.style.display === 'block' ? 'none' : 'block';
        console.log(`Caption aktif: ${caption.innerText}`);
    });

    card.addEventListener('mouseenter', () => {
        card.classList.add('hover-aktif');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('hover-aktif');
    });
});