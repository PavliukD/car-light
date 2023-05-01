export function HeaderMobileMenu() {
    const header = document.querySelector('.header-mobile')
    if (!header) {
        return
    }

    const logo1 = header.querySelector('.header--logo-1')
    const logo2 = header.querySelector('.header--logo-2')
    const menuBtn = header.querySelector('.header-mobile--menu-button')
    const btnIcon1 = header.querySelector('.header-mobile--icon-menu')
    const btnIcon2 = header.querySelector('.header-mobile--icon-cross')
    const menu = header.querySelector('.header-mobile--menu')
    const call = header.querySelector('.header-mobile--link-call')
    const enter = header.querySelector('.header-mobile--button-enter')

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('hidden')
        logo1.classList.toggle('hidden')
        logo2.classList.toggle('hidden')
        btnIcon1.classList.toggle('hidden')
        btnIcon2.classList.toggle('hidden')
        call.classList.toggle('hidden')
        enter.classList.toggle('hidden')
    })
}