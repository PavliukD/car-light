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

        let elements = []

        for (let i = 0; i < items.length; i++){
            elements.push(items[i].offsetLeft)
        }

        const corr = elements[0]

        const elPositions = elements.map(el => {
            return el - corr
        })

        let pos = 0

        list.addEventListener('scroll', () => {
            pos = list.scrollLeft
        })
        
        rightBtn.addEventListener('click', () => {
            const found = elPositions.find(el => el > pos)
            list.scrollTo({
                left: found,
                behavior: "smooth"
            })
        })

        leftBtn.addEventListener('click', () => {
            const found = elPositions.find(el => el < pos)
            list.scrollTo({
                left: found,
                behavior: "smooth"
            })
        })
    })
}