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

export function ChangeCar() {
    const list = document.querySelector('.cabinet--page-cars-list')

    if (!list) {
        return
    }

    const items = list.querySelectorAll('.cabinet--page-cars-list-item')

    items.forEach(item => {
        const changeBtn = item.querySelector('.cabinet--page-cars-list-item-button')

        changeBtn.addEventListener('click', () => {
            const backdrop = document.querySelector('.cabinet--drop')

            if (!backdrop) {
            return
            }

            const form = backdrop.querySelector('.cabinet--change-car')

            if (!form) {
                return
            }

            let itemMark = item.querySelector('.mark')
            let itemModel = item.querySelector('.model')
            let itemVin = item.querySelector('.vin')
            const mark = form.querySelector('[data-mark]')
            mark.value = itemMark.innerText
            const model = form.querySelector('[data-model]')
            model.value = itemModel.innerText
            const vin = form.querySelector('[data-vin]')
            vin.value = itemVin.innerText
            console.dir(mark)

            backdrop.classList.remove('hidden')
            form.classList.remove('hidden')

            const close = form.querySelector('.remove')
            const change = form.querySelector('.add')

            closeBackdrop(close, backdrop, form)
            closeBackdrop(change, backdrop, form)

            let newMark = mark.value
            let newModel = model.value
            let newVin = vin.value

            mark.addEventListener('input', () => {
                newMark = mark.value
            })
            model.addEventListener('input', () => {
                newModel = model.value
            })
            vin.addEventListener('input', () => {
                newVin = vin.value
            })

            change.addEventListener('click', () => {
                // itemMark.innerText = newMark
                // itemModel.innerText = newModel
                // itemVin.innerText = newVin
                
            })
        })
    })
}

export function ChangeUser() {
    const btn = document.querySelector('.cabinet--page-change-user')

    if (!btn) {
        return
    }

    console.log('work')


    btn.addEventListener('click', () => {
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
        const change = form.querySelector('.add')

        closeBackdrop(close, backdrop, form)
        closeBackdrop(change, backdrop, form)

        const cart = document.querySelector('.cabinet--page-user-cart')

        if (!cart) {
            return
        }

        const name = cart.querySelector('[data-name]')
        const secondName = cart.querySelector('[data-second-name]')
        const city = cart.querySelector('[data-city]')
        const phone = cart.querySelector('[data-phone]')
        const mail = cart.querySelector('[data-mail]')

        const nameForm = form.querySelector('[data-name]')
        const secondNameForm = form.querySelector('[data-second-name]')
        const cityForm = form.querySelector('[data-city]')
        const phoneForm = form.querySelector('[data-phone]')
        const mailForm = form.querySelector('[data-mail]')

        nameForm.value = name.innerText
        secondNameForm.value = secondName.innerText
        cityForm.value = city.innerText
        phoneForm.value = phone.innerText
        mailForm.value = mail.innerText
    })
}