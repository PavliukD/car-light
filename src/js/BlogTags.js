export function BlogTags() {
    const wrap = document.querySelector('.blog-article--tags')

    if (!wrap) {
        return
    }

    const list = wrap.querySelector('ul')
    const hiddenItms = list.querySelectorAll('.hidden')
    const btnMore = list.querySelector('.more')
    const btnLess = list.querySelector('.less')

    btnMore.addEventListener('click', () => {
        if (!hiddenItms) {
            return
        }
        hiddenItms.forEach(item => {
            item.classList.remove('hidden')
        })
        
        btnLess.classList.remove('hidden')
        btnMore.classList.add('hidden')
    })
    btnLess.addEventListener('click', () => {
        if (!hiddenItms) {
            return
        }
        hiddenItms.forEach(item => {
            item.classList.add('hidden')
        })
        btnLess.classList.add('hidden')
        btnMore.classList.remove('hidden')
    })
}