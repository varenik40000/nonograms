function showBurger(){
    let menu__icon = document.querySelector('.nav-menu__icon'),
    menuBody = document.querySelector('.nav-menu'),
    menu__list = document.querySelector('.nav-menu__list'),
    header__link = document.querySelector('.header__link');
    
    menu__icon.addEventListener('click', () => {

        document.body.classList.add('_lock');
        menu__icon.classList.add('_active');
        menuBody.classList.add('_active');
        header__link.classList.add('_active');

      })
      menu__list.addEventListener('click', () => {
        document.body.classList.remove('_lock');
        menu__icon.classList.remove('_active');
        menuBody.classList.remove('_active');
        header__link.classList.remove('_active');
      })

}
showBurger()


async function getProductJSON() {
    const res = await fetch(`../../pages/menu/products.json`);
    return await res.json();
    console.lof(res)
}

async function showPage() {
    let productsData = await getProductJSON(),
        sumProduct = 8,
        tabs = document.querySelector('.menu__inner-tabs'),
        tab = document.querySelectorAll('.tabs__list-item'),
        sliderBody = document.querySelector('.menu__inner-dishes');
    sliderBody.innerHTML = '';
    // console.log(productsData[0])





    function randomChar(min = 0, max = 7) {
        let num = Math.floor(Math.random() * (max - min)) + min;
        return num;
    }

    function productsPrint(arr) {

        for (let i = 0; i < arr.length; i++) {
            let div = document.createElement('div');
            div.className = "dish-item";
            div.innerHTML = `
        <img class="dish-img" src="../../assets/images/${arr[randomChar(0, arr.length)].img}" alt="Coffee picture">
        <div class="dish-description">
        <div class="dish-heading">${arr[randomChar(0, arr.length)].name}</div>
        <div class="dish-subheading">${arr[randomChar(0, arr.length)].description}</div>
         <div class="dish-price">${arr[randomChar(0, arr.length)].price}</div>
        `
            sliderBody.prepend(div);
        }
    }
    productsPrint(productsData)

    function clickTabs() {

        tabs.addEventListener('click', (e) => {g
            tab.forEach((el) => el.classList.remove('active'));
            console.log(tab)

            e.target.classList.add('active')
            // console.log(e.target)
            let re = '<div class="tab__list-icon"></div>',
                str = e.target.innerHTML,
                str2 = str.replace(re, '').toLowerCase().trim();
            console.log(str2)



            let prodArr2 = productsData;
            prodArr2 = productsData.filter((product) => product.category === str2);
            sliderBody.innerHTML = ``;
            console.log(prodArr2);


            productsPrint(prodArr2)
        });
    }



    clickTabs()
}
showPage()

