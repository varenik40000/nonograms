import { result } from './game.js'

const body = document.body;
let key = document.querySelectorAll('.key'),
  answer = document.querySelectorAll('.answer-item'),
  extra = document.querySelector('.extra');

function printScreenKeyboard() {
  for (let k of key) {
    k.onclick = function () {

      for (let r in result) {
        if (result[r] === r.textContent) {
          // console.log('RIGHT'),console.log(result[key]),console.log(key)
          answer[r].classList.remove('hidden');
          // checkAnswer()
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
      }
      else {
        extra.innerHTML = 'CHANGE input language';
      }
    }
    printPhysicalKeyboard()
  })

}
listener()


// function checkAnswer() {
//   let res = '';
//   console.log(res.length)
//   let re = /answer-item/gi;
//   for (let i = 0; i < answer.length; i++) {
//     answer[i].classList.contains('hidden') !== true
//     res += answer[i].className;
//     // console.log(res.length < 1)

//   }
//   console.log(res.replace(re, ''))
// }

