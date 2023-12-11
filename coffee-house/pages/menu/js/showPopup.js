import { getProductJSON } from "./getProductJSON.js";
import { hidePopup } from "./hidePopup.js";

export async function showPopup() {
    let data = await getProductJSON(),
        sliderBody = document.querySelector('.menu__inner-dishes');


    sliderBody.addEventListener('click', (e) => {
        let nameProduct = e.target.parentNode.className.replace('dish-item ', '');

        console.log(nameProduct)
        // console.log(str.trim().replace(re1, '').replace(re2, ''))

        data.forEach(element => {
            if (element.name == nameProduct) {

                document.body.classList.add('_popup');

                let div = document.createElement('div');
                div.className = "popup";
                div.innerHTML = `
                <div class="popup__content">
                <div class="popup__content-image">
                    <img src=${element.img} />
                </div>
                <div class="popup__content-text">
                    <h3 class="popup__content-text-heading">${element.name}</h3>
                    <p class="popup__content-text-description">${element.description}</p>
                    <div class="popup__content-sizes">Size</div>
                    <ul class="popup__content-sizes-list">
                        <li><div class="circle">S</div>${element.sizes.s.size}</li>
                        <li><div class="circle">M</div>${element.sizes.m.size}</li>
                        <li><div class="circle">L</div>${element.sizes.l.size}</li>
                    </ul>
                    <div class="popup__content-additives">Additives</div>
                    <ul class="popup__content-additives-list">
                        <li><div class="circle">1</div>${element.additives[0].name}</li>
                        <li><div class="circle">2</div>${element.additives[1].name}</li>
                        <li><div class="circle">3</div>${element.additives[2].name}</li>
                    </ul>
                    <div class="popup-total">
                        <div class="total-text">Total:</div>
                        <div class="total-number">${element.price}</div>
                    </div>
                    <div class="popup-subtext">
                        <div class="popup-subtext-svg"></div>
                        <div class="subtext">
                            The cost is not final. Download our mobile app to see the final price and place
                            your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</div>
                    </div>
                    <div class="popup__close">Close</div>
                </div>
            </div>
              `;
                document.body.prepend(div);
                  hidePopup();
                
            }
        });
      

    })
}




// async function hidePopup() {
//     console.log('work')
//     let btnClose = document.querySelector('.popup__close'),
//       popupItem = document.querySelector('.popup');
    
//       btnClose.addEventListener('click', (event) => {
//         console.log(event)
//         popupItem.classList.add('.inactive');
//         // popupItem.remove();
//       });

    
//   }
 

