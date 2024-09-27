/*=============== SCROLL HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

let swiperPopular = new Swiper('.popular__container', {
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

/*=============== SWIPER ===============*/

/*=============== TOGGLE ITEM ===============*/
function toggleItem(header) {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

// Função para ativar o link da seção visível
function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 60; // Compensa a altura do cabeçalho ou margem
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        // Verifique se o navLink existe antes de tentar adicionar ou remover classes
        if (navLink) {
            if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
                // Remova a classe de todos os links
                document.querySelectorAll('.nav__menu a').forEach(link => {
                    link.classList.remove('active-link');
                });
                // Adiciona a classe 'active-link' ao link correspondente à seção visível
                navLink.classList.add('active-link');
            } else {
                // Remove 'active-link' se não estiver na seção visível
                navLink.classList.remove('active-link');
            }
        }
    });
}

// Adiciona o evento de rolagem
window.addEventListener('scroll', scrollActive);


/*=============== SCROLL REVEAL ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true
})

// SHOW SCROLL UP
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// Seletores corretos para ScrollReveal
sr.reveal(`.home__title, popular__container`)
sr.reveal(`.home__description`, { delay: 500 })
sr.reveal(`.home__value`, { delay: 700 })
sr.reveal(`.home__images`, { delay: 800, origin: 'bottom' })
sr.reveal(`.home__value`, { delay: 700 })
sr.reveal(`.value__images`, { origin: 'left' })
sr.reveal(`.value__content`, { origin: 'right' })