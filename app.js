//imports
import { myAddHandler } from './handlers.js';
import { mySubHandler } from './handlers.js';
import { myMultHandler } from './handlers.js';
import { myDivideHandler } from './handlers.js';
import { myConvertionHandler } from './handlers.js';
//buttons
const addButton = document.getElementById('addButton');
const subButton = document.getElementById('subButton');
const multButton = document.getElementById('multButton');
const divideButton = document.getElementById('divideButton');
const convertButton = document.getElementById('convertButton');

//addition equation
addButton.addEventListener('click', myAddHandler);
//subtraction equation
subButton.addEventListener('click', mySubHandler);
//multiplication equation
multButton.addEventListener('click', myMultHandler);

//division equation
divideButton.addEventListener('click', myDivideHandler);

//Celsius to Fahrenheit function print
convertButton.addEventListener('click', myConvertionHandler);
