export function SectionQuestions() {
    const list = document.querySelector('.section-questions--list')

    if (!list) {
        return
    }

    const items = list.querySelectorAll('.section-questions--item')

    items.forEach((item) => {
        item.addEventListener('click', () => {
            item.classList.toggle('active')
        })
    })
}