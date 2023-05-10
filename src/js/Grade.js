export function Grade() {
    const list = document.querySelectorAll('.cabinet--page-jobs-grade-list')

    list.forEach(item => {
        const buttons = item.querySelectorAll('button')

        buttons.forEach(button => {
            button.addEventListener('click', () => {

                buttons.forEach(btn => {
                    if (Number(btn.dataset.id) <= Number(button.dataset.id)) {
                        btn.classList.add('active')
                    }
                    if (Number(btn.dataset.id) > Number(button.dataset.id)) {
                        btn.classList.remove('active')
                    }
                })
            })
        })
    })
}