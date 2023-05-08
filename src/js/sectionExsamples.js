export function sectionExsamples() {
    const section = document.querySelector('.section--exsample')

    if (!section) {
        return
    }
    const leftBtn = section.querySelector('.left')
    const rightBtn = section.querySelector('.right')
    const list = section.querySelector('ul')
    const items = list.querySelectorAll('li')
    const page = section.querySelector('.section--exsample-numbers-page')

    
    let transform = 1

    leftBtn.addEventListener('click', () => {
        if (transform === 1) {
            transform = 4
            const transformation = (transform - 1) * list.clientWidth
            items.forEach(item => {
                item.style.transform = `translateX(-${transformation}px)`
            })
            page.innerText = transform
            return
        }
        transform = transform - 1
        const transformation = (transform - 1) * list.clientWidth
            items.forEach(item => {
                item.style.transform = `translateX(-${transformation}px)`
            })
        page.innerText = transform
            return
    })

    rightBtn.addEventListener('click', () => {
        if (transform === 4) {
            transform = 1
            const transformation = (transform - 1) * list.clientWidth
            items.forEach(item => {
                item.style.transform = `translateX(-${transformation}px)`
            })
            page.innerText = transform
            return
        }
        transform = transform + 1
        const transformation = (transform - 1) * list.clientWidth
            items.forEach(item => {
                item.style.transform = `translateX(-${transformation}px)`
            })
        page.innerText = transform
            return
    })
}