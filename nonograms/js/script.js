function Render() {
  let body = document.body;
  return body.innerHTML = `
    <table class="game">
      <tr class="game-tr">
        <td class="game-info null"></td>
        <td class="game-info gorizontal">
            <table class="game-block gorizontal"></table>
        </td>
      </tr>
      <tr class="game-tr">
        <td class="game-info vertical">
            <table class="game-block vertical"></table>
        </td>
        <td class="game-info gameplay">
            <table class="game-block game_window"></table>
        </td>
      </tr>
    </table>
  `}

let num = randomChar();
let arrCheck = [
  ["0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
];

async function getDataJSON() {
  const res = await fetch(`./js/questions.json`);
  return await res.json();
}
function randomChar(min = 0, max = 4) {
  let num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}
// console.log(randomChar())

async function getArray() {
  let data = await getDataJSON();
  let arr = Array.from(data[num])
  return arr;
}
// console.log(await getArray())

async function AddItem() {
  let arr = await getArray();
  let game = document.querySelector('.game-block.game_window');

  for (let i = 0; i < arr[0].length; i++) {

    let gameTR = document.createElement('tr');
    // gameTR.className = `game_window-itemTR ${i}`;
    gameTR.className = `game_window-itemTR ${i}`;
    game.appendChild(gameTR);

    for (let j = 0; j < arr[i].length; j++) {

      let gameTD = document.createElement('td');
      gameTD.className = `game_window-itemTD ${j}`;
      // gameTD.className = `game_window-itemTD`;
      // gameTD.innerHTML = `${arr[i][j]}`;
      // arr[i][j] > 0 ? gameTD.style.cssText = 'background: red;' : '';
      gameTR.appendChild(gameTD);
    }
  }
}

async function getNumber(arr) {
  let result = [];
  for (let j = 0; j < arr.length; j++) {
    let arrNumber = arr[j].map(string => +string),
      res = [];
    let sum = 0;
    for (let i = 0; i < arrNumber.length; i++) {
      if (arrNumber[i] !== 0) { sum += 1 }
      if (arrNumber[i] === 0 && sum > 0 || i === arrNumber.length - 1 && sum > 0) {
        res.push(sum);
        sum = 0
      }
    }
    result.push(res)
  }
  return result
}

async function AddVerticalItemHelp() {
  let arrHelp = await getNumber(await getArray());
  let game = document.querySelector('.game-block.vertical');

  for (let i = 0; i < arrHelp.length; i++) {

    let gameInfoTR = document.createElement('tr');
    gameInfoTR.className = `game_info-tr${i}`;
    game.appendChild(gameInfoTR);

    let arrHelpNew = arrHelp.map((el) => {
      return Array.from(el.join('') + '0'.repeat(5 - el.join('').length))
      // {return el.length < 5 ? (el.join() + '0'.repeat(5 - el.length)) : el}
    });

    for (let j = 0; j < arrHelpNew[i].length; j++) {
      let game_item = document.createElement('td');
      game_item.className = 'game_item';
      arrHelpNew[i][j] > 0 ? game_item.innerHTML = `${arrHelpNew[i][j]}` : ''
      arrHelpNew[i][j] > 0 ? game_item.style.cssText = 'background: red;' : '';
      // arrHelpNew[i][j] < 1 ? game_item.style.cssText = 'color: white;' : '';
      gameInfoTR.appendChild(game_item);
    }
  }
}

async function AddGorizontalItemHelp() {
  let arr1 = (await getArray()).reduce((m, r) =>
    (r.forEach((v, i) => (m[i] ??= [], m[i].push(v))), m), []);
  // let arr1 = await getArr();
  let arrHelp = await getNumber(arr1);
  let game = document.querySelector('.game-block.gorizontal');
  // console.log(`до`,arrHelp)
  let arrHelpNew = arrHelp.map((el) => {
    return Array.from(el.join('') + '0'.repeat(5 - el.join('').length))
    // {return el.length < 5 ? (el.join() + '0'.repeat(5 - el.length)) : el}
  });
  // console.log(arrHelpNew)

  function TransMatrix(A) {
    var m = A.length, n = A[0].length, AT = [];
    for (var i = 0; i < n; i++) {
      AT[i] = [];
      for (var j = 0; j < m; j++) AT[i][j] = A[j][i];
    }
    return AT;
  }
  let transposeArr = TransMatrix(arrHelpNew)
  // console.log(transposeArr)

  for (let i = 0; i < transposeArr.length; i++) {
    let gameInfoTR = document.createElement('tr');
    gameInfoTR.className = `game_info-tr${i}`;
    game.appendChild(gameInfoTR);

    for (let j = 0; j < transposeArr[i].length; j++) {
      let game_item = document.createElement('td');
      game_item.className = 'game_item';
      transposeArr[i][j] > 0 ? game_item.innerHTML = `${transposeArr[i][j]}` : ''
      transposeArr[i][j] > 0 ? game_item.style.cssText = 'background: red;' : '';
      // transposeArr[i][j] < 1 ? game_item.style.cssText = 'color: white;' : '';
      gameInfoTR.appendChild(game_item);
    }
  }
}

function addItemArray(a) {
  let numRows = a.className.toString().replace(/[^+\d]/g, ''),
    numColumn = a.parentNode.className.toString().replace(/[^+\d]/g, '');
  a.classList.contains('active') === true ? arrCheck[numColumn][numRows] = '1' : arrCheck[numColumn][numRows] = '0'
  console.log(arrCheck)
}

async function СheckBlock() {
  let arr1 = await getArray(),
    arr2 = arrCheck;

  // if (arr2 === false) return 'YOU LOOSE'
  // console.log('arr1', arr1.toString().replace(/\,/g, ''));
  // console.log('arr2', arr2.toString().replace(/\,/g, ''))

  if (arr1.toString().replace(/\,/g, '') === arr2.toString().replace(/\,/g, '') && true) {
    // console.log(true)
    showPopup()
  } else {
    // console.log(false)
    return false
  }

}

//listener
let a = {};

function PickBlock() {
  let gameplay = document.querySelector('.game-info.gameplay');
  // console.log(gameplay)
  // console.log('ДО',arrCheck)
  gameplay.addEventListener('click', function (event) {
    let target = event.target;
    target.classList.contains('active') ?
      target.classList.remove('active') : target.classList.add('active');
    // console.log(target)
    addItemArray(target)
  })
  return a;
}

function CheckAnswer() {
  document.body.addEventListener('click', (e) => {
    СheckBlock()
  })
}

//popup
function showPopup() {
  document.body.classList.add('_popup');
  let div = document.createElement('div');
  div.className = "popup";
  div.innerHTML = `
    <div class="popup__content">
      <div class="popup__content-image">
          <img src= "./images/cup.png">
      </div>
      <div class="popup__content-text">
        Great! You have solved the nonogram!
      </div>
      <div class="popup__close">
        <img src= "./images/refresh.png">
      </div>
    </div>
    `;
  document.body.prepend(div);
  hidePopup();

}

function hidePopup() {
  let btnClose = document.querySelector('.popup__close'),
    popupItem = document.querySelector('.popup');
  // console.log(btnClose)
  // document.body.addEventListener('click', (event) => {
  //   // console.log(event.target)
  // })
  if (popupItem != null) {
    btnClose.addEventListener('click', (event) => {
      // console.log(event)
      document.body.classList.remove('_popup');
      popupItem.remove();
      console.log('HIDE POPUP', popupItem);
      event.stopPropagation();
      Reset()
    });
    popupItem.addEventListener('click', (event) => {
      document.body.classList.remove('_popup');
      popupItem.remove();
      console.log('HIDE POPUP', popupItem);
    });
  }
}

function Reset() {
  num = randomChar();
  arrCheck = [
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
  ];

  Render()
  AddItem()
  AddVerticalItemHelp()
  AddGorizontalItemHelp()
  PickBlock()
  CheckAnswer()
}


Render()
AddItem()
AddVerticalItemHelp()
AddGorizontalItemHelp()
PickBlock()
CheckAnswer()