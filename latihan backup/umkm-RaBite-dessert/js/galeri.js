const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const caption = card.querySelector('.caption');
    caption.classList.add('d-none');

    card.addEventListener('click', () => {
        caption.classList.toggle('d-none');
    });

    card.addEventListener('mouseenter', () => {
        card.classList.add('hover-aktif');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('hover-aktif');
    });
});