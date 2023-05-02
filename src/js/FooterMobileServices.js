export function FooterMobileServices() {
    const item = document.querySelector('#footer-mobile-services')

    if (!item) {
        return
    }

    const list = item.querySelector('.footer-mobile--services-list')
    const btn = item.querySelector('.header-mobile--menu-punkt')
    const number = item.querySelector('.header-mobile--nav-number')

    btn.addEventListener('click', () => {
        list.classList.toggle('hidden')
        number.classList.toggle('hidden')
    })
}