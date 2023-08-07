export default function ChangeHeight() {
    const items = document.querySelectorAll('[data-change-height]')

    items.forEach(item => {
        const height = item.clientWidth
        item.style.height = `${height}px`
        item.addEventListener('resize', () => {
            const height = item.clientWidth
            item.style.height = `${height}px`
        })
    })
}