export function slider() {

    let slider = document.querySelector('.slider-inner'),
        // sliderItem = document.querySelectorAll('.favorite-coffee__slider-item'),
        btnLeft = document.querySelector('.slider-button__slider-left'),
        btnRight = document.querySelector('.slider-button__slider-right');





    btnLeft.addEventListener('click', (e) => {
        let clone = slider.lastElementChild.cloneNode(true);
        slider.prepend(clone);
        slider.lastElementChild.remove();
    })
    btnRight.addEventListener('click', (e) => {
        let clone = slider.firstElementChild.cloneNode(true);
        slider.append(clone);
        slider.firstElementChild.remove();
    })
}