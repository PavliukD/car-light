export function BlogCathegories() {
    const wrap = document.querySelector('.blog-page-cathegories-wrap')
    if (!wrap) {
        return
    }

    const leftBtn = wrap.querySelector('.left')
    const rightBtm = wrap.querySelector('.right')
    const items = wrap.querySelectorAll('li button')

    items.forEach(item => {
        item.addEventListener("click", () => {
            items.forEach(item => {
                item.classList.remove('active')
            })
            item.classList.add('active')
        })
    })
}