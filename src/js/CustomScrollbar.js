export function CustomScrollbar() {
    const wrap = document.querySelectorAll('[data-scrollbar]')

    if (!wrap) {
        return
    }

    wrap.forEach(item => {
        const thumb = item.querySelector('.custom-crollbar-thumb')
        const content = item.querySelector('[data-scroll-content]')

        const offset = item.clientHeight - (((content.scrollHeight / content.children.length) - (item.clientHeight / content.children.length))) * (content.children.length - 1)
        const height = item.clientHeight - offset

        thumb.style.height = `${offset}px`
        console.log(thumb.style)

        content.addEventListener('scroll', () => {

            let top = content.scrollTop - (((content.scrollHeight / content.children.length) - (item.clientHeight / content.children.length)))

            if (top <= 0) {
                top = 0
            }

            thumb.style.top = `${top}px`
        })
    })

}