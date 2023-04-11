export function Hero() {
    const hero = document.querySelector('.hero')

    if (!hero) {
        return
    }

    const openBtn = hero.querySelector('.hero--termine')

    const backdrop = document.querySelector('.backdrop')

    if (!backdrop) {
        return
    }

    const dropCall = document.querySelector('.drop-call')

    if (!dropCall) {
        return
    }

    openBtn.addEventListener('click', () => {
        backdrop.classList.remove('hidden')
    })
}