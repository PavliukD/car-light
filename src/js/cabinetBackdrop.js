export function CabinetBackdropCar() {
    const cabinet = document.querySelector('.cabinet--page')

    if (!cabinet) {
        return
    }

    const addBtn = cabinet.querySelector('.cabinet--page-button-add-car')

    if (!addBtn) {
        return
    }

    addBtn.addEventListener('click', () => {
        const backdrop = document.querySelector('.cabinet--drop')

        if (!backdrop) {
            return
        }

        const form = backdrop.querySelector('.cabinet--add-new-car')

        if (!form) {
            return
        }

        backdrop.classList.remove('hidden')
        form.classList.remove('hidden')

        const close = form.querySelector('.remove')

        closeBackdrop(close, backdrop, form)
    })
}

export function CabinetBackdropAuto() {
    const cabinet = document.querySelector('.cabinet--page')

    if (!cabinet) {
        return
    }

    const addBtn = cabinet.querySelector('.cabinet--page-button-add-auto')

    if (!addBtn) {
        return
    }

    addBtn.addEventListener('click', () => {
        const backdrop = document.querySelector('.cabinet--drop')

        if (!backdrop) {
            return
        }

        const form = backdrop.querySelector('.cabinet--add-new-car')

        if (!form) {
            return
        }

        backdrop.classList.remove('hidden')
        form.classList.remove('hidden')

        const close = form.querySelector('.remove')

        closeBackdrop(close, backdrop, form)
    })
}

export function CabinetBackdropUser() {
    const cabinet = document.querySelector('.cabinet--page')

    if (!cabinet) {
        return
    }

    const addBtn = cabinet.querySelector('.cabinet--page-user-add')

    if (!addBtn) {
        return
    }

    addBtn.addEventListener('click', () => {
        const backdrop = document.querySelector('.cabinet--drop')

        if (!backdrop) {
            return
        }

        const form = backdrop.querySelector('.cabinet--add-new-user')

        if (!form) {
            return
        }

        backdrop.classList.remove('hidden')
        form.classList.remove('hidden')

        const close = form.querySelector('.remove')

        closeBackdrop(close, backdrop, form)
    })
}

function closeBackdrop(btn, backdrop, window) {
    btn.addEventListener('click', () => {
        backdrop.classList.add('hidden')
        window.classList.add('hidden')
    })
    backdrop.addEventListener('click', (e) => {
        if (e.target !== backdrop) {
            return
        }
        backdrop.classList.add('hidden')
        window.classList.add('hidden')
    })
}