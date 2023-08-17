export function GridSliderNew() {
    const sliders = document.querySelectorAll('.grid-slider')

    sliders.forEach(slider => {

        const list = slider.querySelector('.grid-slider-list')

        if (!list) {
            return
        }

        const pages = slider.querySelector('.grid-slider-pointer-total')

        pages.innerText = `${list.children.length}`

        const leftBtn = slider.querySelector('.left')
        const rightBtn = slider.querySelector('.right')
        const text = slider.querySelector('.grid-slider-pointer-current')
        
        const items = list.querySelectorAll('li')

        let transform = 0

        rightBtn.addEventListener('click', () => {
            if (transform === list.children.length - 1) {
                return
            }
            transform++
            const transformation = list.clientWidth * transform
            items.forEach(item => {
                item.style.transform = `translateX(-${transformation}px)`
            })
            text.innerText = `${transform + 1}`

            leftBtn.classList.add('active')

            if (transform === list.children.length - 1) {
                rightBtn.classList.remove('active')
                leftBtn.classList.add('active')                
            }
            return
        })

        leftBtn.addEventListener('click', () => {
            if (transform === 0) {
                return
            }
            transform--
            const transformation = list.clientWidth * transform
            items.forEach(item => {
                item.style.transform = `translateX(-${transformation}px)`
            })
            text.innerText = `${transform + 1}`

            rightBtn.classList.add('active')

            if (transform === 0) {
                rightBtn.classList.add('active')
                leftBtn.classList.remove('active')
            }
            return
        })
    })

}