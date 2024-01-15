import { result } from './game.js'

const body = document.body;
let key = document.querySelectorAll('.key'),
  answer = document.querySelectorAll('.answer-item'),
  hidden = document.getElementsByClassName('hidden'),
  extra = document.querySelector('.extra'),
  attemps = hidden.length;

function printScreenKeyboard() {
  // console.log(key, answer, attemps)
  for (let k of key) {
    k.onclick = function () {
      // let count = 0;
      if (attemps == 0) {
        extra.innerHTML = 'GAME OVER';
        // k.stopPropagation();
        return 'GAME OVER';
      }
      attemps -= 1;
      // console.log('attemps', attemps)
      // console.log('count', count)
      // console.log('k', k)

      k.classList.add('active');
      setTimeout(() => k.classList.remove('active'), 100)
      // console.log(k.textContent)
      for (let key in result) {
        if (result[key] === k.textContent) {
          answer[key].classList.remove('hidden');
          checkAnswer()
          attemps += 1;
        }
        else {
          showDeadman(attemps)
        }
      }
    }
  }
}
printScreenKeyboard()

function printPhysicalKeyboard() {
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
    // console.log('attemps', attemps)
    if (attemps == 0) {
      extra.innerHTML = 'GAME OVER';
      event.stopPropagation()
      return 'GAME OVER'
    }
    attemps -= 1;
    //печать физической клавиатуры
    function print() {
      if (eng.includes(strKey.toLowerCase())) {
        extra.innerHTML = `You have ${hidden.length - 1} attemps`
        // display.textContent += strKey;
        // console.log(strKey);
        toggleActive()
        for (let key in result) {
          if (result[key] === strKey) {
            // console.log('RIGHT'),console.log(result[key]),console.log(key)
            answer[key].classList.remove('hidden');
            checkAnswer()
            // checkAnswer()
          }
          else {
            showDeadman(attemps)
          }
        }
      }
      else {
        extra.innerHTML = 'CHANGE input language';
      }
    }
    print()
  })

}
printPhysicalKeyboard()

function checkAnswer() {
  // console.log(hidden.length)
  if (hidden.length < 1) {
    extra.innerHTML = 'WIN PRESS F5';
  }
}

function showDeadman(attemps) {
  let man = document.querySelectorAll('.man'); //6
  let raz = Math.abs(attemps - man.length);

  // console.log('showDeadman(attemps)')
  for (let i = 0; i < raz; i++) {
    man[i].style.display = 'block'
  }
  // console.log('man.length', man.length)
  // console.log('attemps', attemps)

}