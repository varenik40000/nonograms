import { result } from './game.js'

const body = document.body;
let key = document.querySelectorAll('.key'),
  answer = document.querySelectorAll('.answer-item'),
  hidden = document.getElementsByClassName('hidden'),
  extra = document.querySelector('.extra');

function printScreenKeyboard() {
  for (let k of key) {
    k.onclick = function () {
      k.classList.add('active');
      setTimeout(() => k.classList.remove('active'), 100)
      // console.log(k.textContent)
      for (let key in result) {
        if (result[key] === k.textContent) {
          answer[key].classList.remove('hidden');
          checkAnswer()
        }
      }
    }
  }
}
printScreenKeyboard()

function listener() {
  body.addEventListener('keydown', function (event) {
    let eng = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
      'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
      strKey = event.key,
      strCode = event.code;
    //анимация нажатия клавиш
    function toggleActive() {
      for (let i = 0; i < key.length; i++) {
        if (key[i].dataset.str === strCode) {
          key[i].classList.add('active');
          setTimeout(() => key[i].classList.remove('active'), 100)
          // console.log(key[i].dataset.str)
        }
      }
    }

    //печать физической клавиатуры
    function printPhysicalKeyboard() {
      if (eng.includes(strKey.toLowerCase())) {
        extra.innerHTML = ''
        // display.textContent += strKey;
        console.log(strKey);
        toggleActive()
        for (let key in result) {
          if (result[key] === strKey) {
            // console.log('RIGHT'),console.log(result[key]),console.log(key)
            answer[key].classList.remove('hidden');
            checkAnswer()
            // checkAnswer()
          }
        }
      }
      else {
        extra.innerHTML = 'CHANGE input language';
      }
    }
    printPhysicalKeyboard()
  })

}
listener()

function checkAnswer() {
  console.log(hidden.length)
  if (hidden.length < 1) {
    extra.innerHTML = 'WIN PRESS F5';
  }
}
