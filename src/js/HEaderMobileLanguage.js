export function HeaderMobileLanguage() {
    const item = document.querySelector('#header-mobile-leanguage')

    if (!item) {
        return
    }

    const list = item.querySelector('.header-mobile--leanguage-list')
    const btn = item.querySelector('.header-mobile--menu-punkt')
    const number = item.querySelector('.header-mobile--nav-number')
    const title = item.querySelector('.header-mobile--menu-punkt')
    const icon = item.querySelector('.footer--icon-cross')

    btn.addEventListener('click', () => {
        list.classList.toggle('hidden')
        number.classList.toggle('hidden')
        title.classList.toggle('active')
        icon.classList.toggle('hidden')
    })
}