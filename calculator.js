document.addEventListener('DOMContentLoaded', start)
// add an onclick function to all buttons
var input = []
// creating empty array for number & calc storage
var temp = ''

function start () {
// Select numbers
  var numbers = document.getElementsByClassName('numberpad')
  for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', processNum)
  };
// Select operators
  var operators = document.getElementsByClassName('sym')
  for (i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', processSym)
  };
// Selecting equals
  var equal = document.getElementsByClassName('symEqual')[0]
  equal.addEventListener('click', compute)

// Selecting clear
  var empty = document.getElementsByClassName('clear')[0]
  empty.addEventListener('click', clear)
};
// Clearing array for clear function to work on calculator
function clear (evt) {
  input = []
  var screen_result = document.getElementsByClassName('display')[0]
  screen_result.innerHTML = '0'
}
// Joining arrays and pushing to temp to creat multiple digit numbers & enable calculations
function compute (evt) {
  input.push(temp)
  temp = ''
  var total = eval(input.join(''))
  setDisplay(total)
}
/* Replacing the '÷' and 'x' symbols,because JS doesn't calculate with them. operatorSwitch(i) does is pretty simple: the
     adds value to the ‘result’-div:*/
function operatorSwitch (i) {
  var transformed = i
  if (i === '÷') {
    transformed = '/'
  } else if (i === '×') {
    transformed = '*'
  }
  return transformed
};
  // go find display area and get inner html numbers from target and put in temp array in display
function processNum (evt) {
  var screen_result = document.getElementsByClassName('display')[0]
  temp += evt.target.innerHTML
  screen_result.innerHTML = temp
}
// using temp for first number then  get inner html symbols from target and put in temp array in display
function processSym (evt) {
  input.push(temp)
  temp = ''
  setDisplay(evt.target.innerHTML)
  input.push(operatorSwitch(evt.target.innerHTML))
  console.log(input)
}

function setDisplay (displayValue) {
  var screen_result = document.getElementsByClassName('display')[0]
  screen_result.innerHTML = displayValue
}
