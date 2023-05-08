export function ScrollButton() {
    const win = window
    const b = document.querySelector('body').clientHeight / 2
    const btn = document.querySelector('.footer--top-button')

    if (!btn) {
        return
    }

    let vis = 0

    win.addEventListener('scroll', () => {
        if (win.scrollY >= b && vis === 0) {
            btn.classList.add('visible')
            vis = 1
            return
        }

        if (win.scrollY < b && vis === 1) {
            btn.classList.remove('visible')
            vis = 0
            return
        }
    })

    btn.addEventListener('click', () => {
        window.scrollTo(0, 0)
    })
}