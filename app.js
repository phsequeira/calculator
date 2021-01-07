
const addButton = document.getElementById('addButton')
const addAnswer = document.getElementById('addAnswer')
const addX = document.getElementById('addX')
const addY = document.getElementById('addY')

const subButton = document.getElementById('subButton')
const subAnswer = document.getElementById('subAnswer')
const subX = document.getElementById('subX')
const subY = document.getElementById('subY')

const multButton = document.getElementById('multButton')
const multAnswer = document.getElementById('multAnswer')
const multX = document.getElementById('multX')
const multY = document.getElementById('multY')

const divideButton = document.getElementById('divideButton')
const divideAnswer = document.getElementById('divideAnswer')
const divideX = document.getElementById('divideX')
const divideY = document.getElementById('divideY')
// initialize state

addButton.addEventListener('click', () => {
    console.log(addX / addY)
addAnswer.textContent = addX.value + addY.value
})

subButton.addEventListener('click', () => {
    console.log(subX / subY)
subAnswer.textContent = subX.value - subY.value
})

multButton.addEventListener('click', () => {
    console.log(multX / multY)
multAnswer.textContent = multX.value * multY.value
})

divideButton.addEventListener('click', () => {
    console.log(divideX / divideY)
divideAnswer.textContent = divideX.value / divideY.value
})
