export function Cookies() {
    const cookies = document.querySelector('.cookies')

    if (!cookies) {
        return
    }

    const accept = cookies.querySelector('.cookies--accept')

    accept.addEventListener('click', () => {
        cookies.classList.add('hidden')
    })
}