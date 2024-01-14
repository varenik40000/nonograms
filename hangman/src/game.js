export async function getQuestionJSON() {
    const res = await fetch(`./src/questions.json`);
    return await res.json();
}

function randomChar(min = 0, max = 10) {
    let num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}


// console.log(productsData[0].answer)

let questionData = await getQuestionJSON();
export let result = {};

function Print(arr) {
    // console.log(arr);
    let random = randomChar(0, arr.length),
        questions = document.querySelector('.questions'),
        answer = document.querySelector('.answer');

    questions.innerHTML = `${arr[random].question}`;
    let a = arr[random].answer;
    const arr1 = a.split('');
    // console.log(a)

    function hideLetter(num) {
        let random = Math.round(Math.random());
        let arrLetter = document.querySelectorAll('.answer-item');
        // console.log(arrLetter)
        if (random < 1) {
            arrLetter[num].classList.add('hidden')
            return result[`${num}`] = `${arr1[num]}`;
        }
    }

    function showAnswer() {

        // console.log(arr)
        for (let i = 0; i < arr1.length; i++) {
            console.log(arr1[i])
            let div = document.createElement('div');
            div.className = `answer-item`;
            div.innerHTML = `${arr1[i]}`
            answer.append(div);
            hideLetter(i)
        }

    }
    showAnswer()
    console.log(result);
    return result;
}
Print(questionData)


