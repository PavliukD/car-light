export function BestSectionAnimation() {
    const section = document.querySelector('.section-best')
    if (!section) {
        return
    }
    const img = section.querySelector('.bg-animation')
    
    setInterval(() => {
        if (img.classList.contains('none')) {
            img.classList.remove('none')
            img.classList.add('left')
            return
        }
        if (img.classList.contains('left')) {
            img.classList.remove('left')
            img.classList.add('bottom')
            return
        }
        if (img.classList.contains('bottom')) {
            img.classList.remove('bottom')
            img.classList.add('none')
            return
        }
    }, 3800)
}