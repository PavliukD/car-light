export function DropCall() {
    const openBtn = document.querySelector('.header--termine')

    if (!openBtn) {
        return
    }

    const backdrop = document.querySelector('.backdrop')

    if (!backdrop) {
        return
    }

    const dropCall = document.querySelector('.drop-call')

    if (!dropCall) {
        return
    }

    const closeBtn = dropCall.querySelector('.drop-call--close')

    openBtn.addEventListener('click', () => {
        backdrop.classList.remove('hidden')
    })

    closeBtn.addEventListener('click', () => {
        backdrop.classList.add('hidden')
    })

    backdrop.addEventListener('click', (e) => {
        if (e.target !== backdrop) {
            return
        }
        backdrop.classList.add('hidden')
    })
}