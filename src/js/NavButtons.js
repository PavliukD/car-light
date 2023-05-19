export function NavButtons() {
    const btnSets = document.querySelectorAll('[data-buttons]')
    if (!btnSets) {
        return
    }

    btnSets.forEach(btnSet => {
        const list = document.querySelector(`[data-list="${btnSet.dataset.buttons}"]`)
        if (!list) {
            return
        }
        const leftBtn = btnSet.querySelector('.left')
        const rightBtn = btnSet.querySelector('.right')
        const items = list.children

        let transform = 1
        
        leftBtn.addEventListener('click', () => {
            if (transform === 1) {
                transform = items.length
                const transformation = (transform - 1) * list.clientWidth

                for (let i = 1; i < items.length; i++){
                    items[i].style.transform = `translateX(-${transformation}px)`
                }
                return
            }
            transform = transform - 1
            const transformation = (transform - 1) * list.clientWidth
                for (let i = 1; i < items.length; i++){
                    items[i].style.transform = `translateX(-${transformation}px)`
                }
                return
        })

        rightBtn.addEventListener('click', () => {
            if (transform === items.length) {
                transform = 1
                const transformation = (transform - 1) * list.clientWidth
                for (let i = 1; i < items.length; i++){
                    items[i].style.transform = `translateX(-${transformation}px)`
                }
                return
            }
            transform = transform + 1
            const transformation = (transform - 1) * list.clientWidth
            for (let i = 1; i < items.length; i++){
                    items[i].style.transform = `translateX(-${transformation}px)`
                }
                return
        })
    })
}