export function GridSliderNew() {
    const sliders = document.querySelectorAll('[data-name="grid-slider-new"]')

    sliders.forEach(slider => {
        // const control = slider.querySelector('#grid-slider-control')

        const list = slider.querySelector('#grid-slider-list')

        if (!list) {
            return
        }

        const pages = slider.querySelector('.job--page-content-slider-pages')
        const inner = pages.innerHTML

        pages.innerHTML = `${inner}/${list.children.length}`

        const leftBtn = slider.querySelector('.left')
        const rightBtn = slider.querySelector('.right')
        const text = slider.querySelector('.job--page-content-slider-pages-actual')
        
        const items = list.querySelectorAll('li')

        let transform = 0

        leftBtn.addEventListener('click', () => {
            if (transform === 1) {
                return
            }
            transform = 1
            const transformation = list.clientWidth
            items.forEach(item => {
                item.style.transform = `translateX(-${transformation}px)`
            })
            leftBtn.classList.remove('active')
            rightBtn.classList.add('active')
            text.innerText = "2"
            return
        })

        rightBtn.addEventListener('click', () => {
            if (transform === 0) {
                return
            }
            transform = 0
            const transformation = 0
            items.forEach(item => {
                item.style.transform = `translateX(-${transformation}px)`
            })
            leftBtn.classList.add('active')
            rightBtn.classList.remove('active')
            text.innerText = "1"
            return
        })
    })

}