export default function Like() {
    const items = document.querySelectorAll('.blog-article--buttons-wrap')

    if (!items) {
        return
    }

    items.forEach(item => {
        const buttons = item.querySelectorAll('button')

        if (!buttons) {
             return
        }

        buttons.forEach(button => {
            const txts = button.querySelectorAll('span')
            const icon = button.querySelector('svg')

            button.addEventListener('click', () => {
                txts.forEach(txt => {
                    txt.classList.toggle('hidden')
                })
                icon.classList.toggle('on')
                button.classList.toggle('active')
            })
        })
    })
}