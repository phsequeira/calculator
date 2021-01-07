//const for addition
const addButton = document.getElementById('addButton');
const addAnswer = document.getElementById('addAnswer');
const addX = document.getElementById('addX');
const addY = document.getElementById('addY');
//const for subtraction
const subButton = document.getElementById('subButton');
const subAnswer = document.getElementById('subAnswer');
const subX = document.getElementById('subX');
const subY = document.getElementById('subY');
//const for multiplcation
const multButton = document.getElementById('multButton');
const multAnswer = document.getElementById('multAnswer');
const multX = document.getElementById('multX');
const multY = document.getElementById('multY');
//const for division
const divideButton = document.getElementById('divideButton');
const divideAnswer = document.getElementById('divideAnswer');
const divideX = document.getElementById('divideX');
const divideY = document.getElementById('divideY');

//addition equation
addButton.addEventListener('click', () => {
    console.log(addX / addY)
addAnswer.textContent = ((addX.value*1) + (addY.value*1))
})
//subtraction equation
subButton.addEventListener('click', () => {
    console.log(subX - subY)
subAnswer.textContent = subX.value - subY.value
})
//multiplication equation
multButton.addEventListener('click', () => {
    console.log(multX / multY)
multAnswer.textContent = multX.value * multY.value
})
//division equation
divideButton.addEventListener('click', () => {
    console.log(divideX / divideY)
divideAnswer.textContent = divideX.value / divideY.value
})
