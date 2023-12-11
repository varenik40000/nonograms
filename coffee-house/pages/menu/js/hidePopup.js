export function hidePopup() {
    let btnClose = document.querySelector('.popup__close'),
      popupItem = document.querySelector('.popup');
      console.log(btnClose)
      document.body.addEventListener('click', (event) => {
        console.log(event.target)
      })
    if (popupItem != null) {
      btnClose.addEventListener('click', (event) => {
        console.log(event)
        document.body.classList.remove('_popup');
        popupItem.remove();
        console.log('HIDE POPUP', popupItem);
      });
      popupItem.addEventListener('click', (event) => {
        document.body.classList.remove('_popup');
        popupItem.remove();
        console.log('HIDE POPUP', popupItem);
      });
    }
  }


