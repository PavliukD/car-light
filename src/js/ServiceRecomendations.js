export function ServiceRecomendations() {
    const list = document.querySelector('#service--recomendations-list')

    if (!list) {
        return
    }

    const items = list.querySelectorAll('.service--recomendations-item')

    items.forEach(item => {
        const title = item.querySelector('h3')
        const wrap = item.querySelector('.service--recomendations-item-title')
        const icon = item.querySelector('.section-questions--icon-wrap')
        const content = item.querySelector('.service--recomendations-wrap')

        wrap.addEventListener('click', () => {
            title.classList.toggle('active')
            icon.classList.toggle('active')
            content.classList.toggle('active')
        })
    })
}

        