function showBurger(){
    let menu__icon = document.querySelector('.nav-menu__icon'),
    menuBody = document.querySelector('.nav-menu'),
    menu__list = document.querySelector('.nav-menu__list'),
    header__link = document.querySelector('.header__link');
    
    menu__icon.addEventListener('click', () => {

        document.body.classList.toggle('_lock');
        menu__icon.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        header__link.classList.toggle('_active');

      })
      menu__list.addEventListener('click', () => {
        document.body.classList.remove('_lock');
        menu__icon.classList.remove('_active');
        menuBody.classList.remove('_active');
        header__link.classList.remove('_active');
      })

}
showBurger()



