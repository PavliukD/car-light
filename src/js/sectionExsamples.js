export function sectionExsamples() {
    const section = document.querySelector('.section--exsample')

    if (!section) {
        return
    }
    const leftBtn = section.querySelector('.left')
    const rightBtn = section.querySelector('.right')
    const list = section.querySelector('ul')
    const items = list.querySelectorAll('li')
    
    let transform = 0

    leftBtn.addEventListener('click', () => {
        if (transform === 0) {
            transform = 3
            const transformation = transform * list.clientWidth
            items.forEach(item => {
                item.style.transform = `translateX(-${transformation}px)`
            })
            return
        }
        transform = transform - 1
        const transformation = transform * list.clientWidth
            items.forEach(item => {
                item.style.transform = `translateX(-${transformation}px)`
            })
            return
    })

    rightBtn.addEventListener('click', () => {
        if (transform === 3) {
            transform = 0
            const transformation = transform * list.clientWidth
            items.forEach(item => {
                item.style.transform = `translateX(-${transformation}px)`
            })
            return
        }
        transform = transform + 1
        const transformation = transform * list.clientWidth
            items.forEach(item => {
                item.style.transform = `translateX(-${transformation}px)`
            })
            return
    })
}