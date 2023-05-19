export function HeaderScroll() {
    const header = document.querySelector('.header-mobile')

    let prew = 0

    window.addEventListener('scroll', () => {
        if (window.scrollY < 150) {
            header.classList.remove('hidden')
            return
        }
        if (window.scrollY > prew) {
            prew = window.scrollY
            if (header.classList.contains('hidden')) {
                return
            }
            header.classList.add('hidden')
            return
        }

        if (window.scrollY < prew) {
            prew = window.scrollY
            header.classList.remove('hidden')
            return
        }
    })
}