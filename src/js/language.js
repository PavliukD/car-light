export function ChaneLanguage() {
    const language = document.querySelector('.header--language')

    if (!language) {
        return
    }

    const btn = language.querySelector('div')

    const btnText = language.querySelector('span')

    let activeElement = language.querySelector('.active')

    const variants = language.querySelectorAll('li')

    const list = language.querySelector('ul')

    btn.addEventListener('click', (e) => {

        list.classList.toggle('hidden')
    })

    variants.forEach((el) => {
        el.addEventListener('click',() => {
            btnText.innerText = el.innerText
            activeElement.classList.remove('active')
            el.classList.add('active')
            activeElement = el
            list.classList.add('hidden')
        })
    })

}