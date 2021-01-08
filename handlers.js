//imports functions
import { addition } from './mathUtils.js';
import { subtraction } from './mathUtils.js';
import { multiply } from './mathUtils.js';
import { division } from './mathUtils.js';
import { convertDegree } from './mathUtils.js';

//const for addition
const addAnswer = document.getElementById('addAnswer');
const addX = document.getElementById('addX');
const addY = document.getElementById('addY');
//const for subtraction
const subAnswer = document.getElementById('subAnswer');
const subX = document.getElementById('subX');
const subY = document.getElementById('subY');
//const for multiplcation
const multAnswer = document.getElementById('multAnswer');
const multX = document.getElementById('multX');
const multY = document.getElementById('multY');
//const for division
const divideAnswer = document.getElementById('divideAnswer');
const divideX = document.getElementById('divideX');
const divideY = document.getElementById('divideY');
//const for C to F
const celsius = document.getElementById('celsius');
const fahDegree = document.getElementById('fahDegree');
//add
export function myAddHandler() {
    const add1 = addX.value * 1;
    const add2 = addY.value * 1;

    const addSum = addition(add1, add2);

    addAnswer.textContent = addSum;
}
//sub
export function mySubHandler() {
    const sub1 = subX.value;
    const sub2 = subY.value;

    const subSum = subtraction(sub1, sub2);

    subAnswer.textContent = subSum;
}
//mult
export function myMultHandler() {
    const mult1 = multX.value;
    const mult2 = multY.value;

    const multSum = multiply(mult1, mult2);

    multAnswer.textContent = multSum;
}
//divide
export function myDivideHandler() {
    const divide1 = divideX.value;
    const divide2 = divideY.value;

    const divideSum = division(divide1, divide2);

    divideAnswer.textContent = divideSum;
}
//C to F
export function myConvertionHandler() {
    const celsiusDegree = celsius.value;

    const fahrenheit = convertDegree(celsiusDegree);

    fahDegree.textContent = fahrenheit;
}