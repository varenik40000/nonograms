function showBurger(){
    let menu__icon = document.querySelector('.nav-menu__icon'),
    menuBody = document.querySelector('.nav-menu'),
    header__link = document.querySelector('.header__link');

    // console.log(menu__icon)
    // console.log(menuBody)
    
    menu__icon.addEventListener('click', () => {

        document.body.classList.toggle('_lock');
        menu__icon.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        header__link.classList.toggle('_active');

        // console.log(menu__icon)
        // console.log(menuBody)
        // console.log(document.body)

      })

}
showBurger()