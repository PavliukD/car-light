export function Filters() {
    const carBtn = document.querySelector('.catalog-page--filter-car')

    if (!carBtn) {
        return
    }

    const carInit = carBtn.querySelector('p').innerText

    const carIcon = carBtn.querySelector('.section-questions--icon-wrap')

    const themeBtn = document.querySelector('.catalog-page--fiter-theme')

    if (!themeBtn) {
        return
    }

    const themeInit = themeBtn.querySelector('p').innerText

    const themeIcon = themeBtn.querySelector('.section-questions--icon-wrap')

    const clearBtn = document.querySelector('.catalog-page--clear-filter')

    if (!clearBtn) {
        return
    }

    const themesList = document.querySelector('.catalog-page--themes-list')

    if (!themesList) {
        return
    }

    const carsList = document.querySelector('.catalog-page--marks-wrap')

    if (!carsList) {
        return
    }

    carBtn.addEventListener('click', () => {
        if (!themesList.classList.contains('hidden')) {
            themesList.classList.add('hidden')
            themeIcon.classList.remove('open')
        }

        carsList.classList.toggle('hidden')
        carIcon.classList.toggle('open')
    })

    themeBtn.addEventListener('click', () => {
        if (!carsList.classList.contains('hidden')) {
            carsList.classList.add('hidden')
            carIcon.classList.remove('open')
        }

        themesList.classList.toggle('hidden')
        themeIcon.classList.toggle('open')
    })

    const themesItems = themesList.querySelectorAll('li')

    themesItems.forEach(item => {
        item.addEventListener('click', () => {
            const itemText = item.querySelector('p')
            const btnText = themeBtn.querySelector('p')
            btnText.innerText = itemText.innerText
            themesList.classList.add('hidden')
        })
    })

    const carsItems = carsList.querySelectorAll('li')

    carsItems.forEach(item => {
        item.addEventListener('click', () => {
            const itemText = item.querySelector('p')
            const btnText = carBtn.querySelector('p')
            btnText.innerText = itemText.innerText
            carsList.classList.add('hidden')
        })
    })

    clearBtn.addEventListener('click', () => {
        if (!carsList.classList.contains('hidden')) {
            carsList.classList.add('hidden')
            carIcon.classList.remove('open')
        }
        if (!themesList.classList.contains('hidden')) {
            themesList.classList.add('hidden')
            themeIcon.classList.remove('open')
        }
        const cars = carBtn.querySelector('p')
        const themes = themeBtn.querySelector('p')

        cars.innerText = carInit
        themes.innerText =themeInit
    })
}