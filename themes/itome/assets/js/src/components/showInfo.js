function showInfo() {
    const slides = document.querySelectorAll('.team_card');

    slides.forEach(slide => {
        const btnShow = slide.querySelector('[data-btn-more-show]');
        const btnClose = slide.querySelector('[data-btn-more-close]');

        btnShow.addEventListener('click', () => {
            slide.classList.add('is-opened');
        });

        btnClose.addEventListener('click', () => {
            slide.classList.remove('is-opened');
        });
    });
}

export default showInfo;