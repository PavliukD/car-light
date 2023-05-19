export function BlogTags() {
    const wrap = document.querySelector('.blog-article--tags')

    if (!wrap) {
        return
    }

    const list = wrap.querySelector('ul')
    const hiddenItms = list.querySelectorAll('.hidden')
    const btn = list.querySelector('button')

    btn.addEventListener('click', () => {
        hiddenItms.forEach(item => {
            item.classList.remove('hidden')
        })
    })
}