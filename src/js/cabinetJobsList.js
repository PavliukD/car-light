export function CabinetJobsList() {
    const list = document.querySelector('.cabinet--page-jobs-list-desktop')

    const items = list.querySelectorAll('.cabinet--page-jobs-item')

    items.forEach(item => {
        const btn = item.querySelector('.section-questions--icon-wrap')

        btn.addEventListener('click', () => {
            item.classList.toggle('hidden')
        })
    })

    const mobileList = document.querySelector('.cabinet--page-jobs-list-mobile')

    const mobileItems = mobileList.querySelectorAll('.cabinet--page-jobs-item')

    mobileItems.forEach(item => {
        const btn = item.querySelector('.section-questions--icon-wrap')

        btn.addEventListener('click', () => {
            item.classList.toggle('hidden')
        })
    })
}