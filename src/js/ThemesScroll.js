export function ThemesScroll() {

    const wrap = document.querySelector('.blog-page-cathegories-wrap')

    if (!wrap) {
        return
    }
    
    const list = document.querySelector('.blog-page-cathegories')

    if (!list) {
        return
    }

    const btnLeft = wrap.querySelector('.left')
    const btnRight = wrap.querySelector('.right')

    let i = 0

    const items = list.querySelectorAll('li')

    items.forEach(item => {
        const btn = item.querySelector('button')

        btn.addEventListener('click', () => {
            items.forEach(itm => {
                const b = itm.querySelector('button')
                b.classList.remove('active')
                if (window.innerWidth > 768) {
                    return
                }
                const trans = item.offsetLeft - items[0].offsetLeft
                itm.style.transform = `translateX(-${trans}px)`
            })

            btn.classList.add('active')
            i = Number(btn.dataset.number)
        })

    })

    btnLeft.addEventListener('click', () => {
        i = i - 1

        if (i < 0) {
            i = 0
        }

        items.forEach(item => {
            const b = item.querySelector('button')
            b.classList.remove('active')
            const trans = items[i].offsetLeft - items[0].offsetLeft
            if (window.innerWidth > 768) {
                    return
                }
            item.style.transform = `translateX(-${trans}px)`
            items[i].classList.add('active')
        })

        const btn = items[i].querySelector('button')
        btn.classList.add('active')
    })

    btnRight.addEventListener("click", () => {
        i++
        
        if (i > 3) {
            i = 3
        }

        items.forEach(item => {
            const b = item.querySelector('button')
            b.classList.remove('active')
            if (window.innerWidth > 768) {
                    return
                }
            const trans = items[i].offsetLeft - items[0].offsetLeft
            item.style.transform = `translateX(-${trans}px)`
        })
        
        const btn = items[i].querySelector('button')
        btn.classList.add('active')
    })
}