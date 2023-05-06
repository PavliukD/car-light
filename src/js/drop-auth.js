export function DropAuth() {
    const openBtn = document.querySelector('.header--login')

    if (!openBtn) {
        return
    }

    const backdrop = document.querySelector('.backdrop-auth')

    if (!backdrop) {
        return
    }

    const dropCall = document.querySelector('.drop-auth')

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

export function MobileDropAuth() {
    const openBtn = document.querySelector('.header-mobile--button-enter')

    if (!openBtn) {
        return
    }

    const backdrop = document.querySelector('.backdrop-auth')

    if (!backdrop) {
        return
    }

    const dropCall = document.querySelector('.drop-auth')

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