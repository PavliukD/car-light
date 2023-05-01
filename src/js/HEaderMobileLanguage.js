export function HeaderMobileLanguage() {
    const item = document.querySelector('#header-mobile-leanguage')

    if (!item) {
        return
    }

    const list = item.querySelector('.header-mobile--leanguage-list')
    const btn = item.querySelector('.header-mobile--menu-punkt')
    const number = item.querySelector('.header-mobile--nav-number')

    btn.addEventListener('click', () => {
        list.classList.toggle('hidden')
        number.classList.toggle('hidden')
    })
}