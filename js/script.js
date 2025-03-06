const countdown = document.getElementById('countdown');
const listNumbers = document.getElementById('numbers-list');
const instruction = document.getElementById('instructions');
const answersForm = document.getElementById('answers-form');

const btn = document.getElementById('button');
const message = document.getElementById('message');
message.classList.add('my-3');

const outputGood = document.getElementById('message2');

let count = 30;

const number1 = generatorNumber();
const number2 = generatorNumber();
const number3 = generatorNumber();
const number4 = generatorNumber();
const number5 = generatorNumber();


listNumbers.innerHTML = `<li>${number1}</li>
                        <li>${number2}</li>
                        <li>${number3}</li>
                        <li>${number4}</li>
                        <li>${number5}</li>`;

console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);
console.log(number5);


const countdownUntil0 = setInterval(countdownFunction, 1_000);

btn.addEventListener('click', checkNumbers);



/**************
 FUNCTIONS
**************/
function countdownFunction() {
    countdown.innerText = count;
    count--;
    if (count === -1) {
        findNumbers();
        clearInterval(countdownUntil0);
    }
}

function generatorNumber() {
    return Math.floor(Math.random() * 50) + 1;
}

function findNumbers() {
    listNumbers.className = "d-none";
    countdown.className = "d-none";
    instruction.innerText = "Inserisci tutti i numeri che ricordi(l'ordine non è importante)";
    answersForm.className = "d-block";
}

function checkNumbers(e) {
    e.preventDefault();
    let arrayNumbers = [number1, number2, number3, number4, number5];
    console.log('Numeri random', arrayNumbers);

    const numberCheck1 = document.getElementById('numberCheck1').value;
    const numberCheck2 = document.getElementById('numberCheck2').value;
    const numberCheck3 = document.getElementById('numberCheck3').value;
    const numberCheck4 = document.getElementById('numberCheck4').value;
    const numberCheck5 = document.getElementById('numberCheck5').value;

    const numberCheckInt1 = parseInt(numberCheck1);
    const numberCheckInt2 = parseInt(numberCheck2);
    const numberCheckInt3 = parseInt(numberCheck3);
    const numberCheckInt4 = parseInt(numberCheck4);
    const numberCheckInt5 = parseInt(numberCheck5);

    let numbersCheck = [numberCheckInt1, numberCheckInt2, numberCheckInt3, numberCheckInt4, numberCheckInt5];
    console.log("Numeri di verifica: ", numbersCheck);

    message.textContent = ('I numeri indovinati sono:');

    for (let i = 0; i < arrayNumbers.length; i++) {
        // if(arrayNumbers.includes(numbersCheck[i])){
        //     console.log('questo numero c\'è', numbersCheck[i]);
        // }else{
        //     console.log('questo numero non c\'è', numbersCheck[i]);
        // }
        for (let x = 0; x < numbersCheck.length; x++) {
            if (arrayNumbers[i] === numbersCheck[x]) {

                console.log('Questo numero è uguale', arrayNumbers[i]);
                outputGood.textContent += `${numbersCheck[x]} `;
            }
        }
    }

}

