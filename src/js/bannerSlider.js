export default function BannerSlider() {
    const sliders = document.querySelectorAll('.block--banner-slider')

    if (!sliders) {
        return
    }

    sliders.forEach(slider => {
        const list = slider.querySelector('.block--banner-list')
        
        const pages = slider.querySelector('.job--page-content-slider-pages')
        const inner = pages.innerHTML
        
        pages.innerHTML = `${inner}/${list.children.length}`
    })
}
