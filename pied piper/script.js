function slowScroll(event) {

    if (event.target.tagName === 'A') {
        event.preventDefault();

        const elem = event.target.getAttribute('href').slice(1);
        window.scrollTo({
            top: `${yPos()}`,
            behavior: 'smooth',
        })

        function yPos() {
            const prop = document.querySelector(`.${elem}`);
            return prop.offsetTop - headerHeight;
        }
    } else if (event.target.closest('.logo')) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
}
const header = document.querySelector('.header');

const headerHeight = document.querySelector('.header').getBoundingClientRect().height;

header.addEventListener('click', (event) => {
    slowScroll(event)
})