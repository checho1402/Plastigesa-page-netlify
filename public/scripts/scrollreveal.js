// public/scrollreveal.js
document.addEventListener("DOMContentLoaded", () => {
    const elements = [
        { selector: '.top-element', options: { origin: 'top' } },
        { selector: '.bottom-element', options: { origin: 'bottom' } },
        { selector: '.left-element', options: { origin: 'left' } },
        { selector: '.right-element', options: { origin: 'right' } },
    ];

    elements.forEach((el) => {
        ScrollReveal().reveal(el.selector, {
            duration: 1500,
            distance: '50px',
            easing: 'ease-in-out',
            reset: false,
            interval: 200,
            ...el.options
        });
    });
});
