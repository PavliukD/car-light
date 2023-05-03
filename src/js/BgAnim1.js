export function BgAnimationOne() {
    const anim = document.querySelector('#anim-1')

    if (!anim) {
        return
    }

    const bg = anim.querySelectorAll('.background')

    console.log(bg[0])

    let order = 1

    // setInterval(() => {
    //     if (order === 1) {
    //         bg[0].classList.add('off')
    //         bg[1].classList.remove('off')
    //         order = 2
    //     }
    //     if (order === 2) {
    //         bg[1].classList.add('off')
    //         bg[2].classList.remove('off')
    //         order = 3
    //     }
    //     if (order === 3) {
    //         bg[2].classList.add('off')
    //         bg[3].classList.remove('off')
    //         order = 4
    //     }
    //     if (order === 4) {
    //         bg[3].classList.add('off')
    //         bg[0].classList.remove('off')
    //         order = 1
    //     }
    // }, 5100)
}