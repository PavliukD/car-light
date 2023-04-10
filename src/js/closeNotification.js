export function CloseNotificaton(){
    const notification = document.querySelector('.header--notification')

    if (!notification) {
        return
    }

    const closeBtn = notification.querySelector('.header--notification-button')

    if (!closeBtn) {
        return
    }

    closeBtn.addEventListener('click', () => {
        notification.classList.add('hidden')
    })

}