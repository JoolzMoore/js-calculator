document.addEventListener('DOMContentLoaded', start)

//add an onclick function to all buttons

function start () {
  var numbers = document.getElementsByClassName('numberpad')
  //var buttons = document.getElementsByTagName('td'); // Select all buttons
  //var    screen_result = document.getElementsByClassName('display')[0]; // Select the equation-field window
  //var    clear = document.getElementsByClassName('clear')[0]; // Select the clearAll-button

  // when you mouse over it.


window.alert(numbers.length);

  for (var i = 0; i < numbers.length; i ++){
    numbers[i].addEventListener('click', displayNum)


    // Looping through buttons to add onclick-event
    // If the inside of that button is NOT '=' --> we will
    // add the onclick-function: addValue(i).
    // If it is '=' --> add the onclick-function: calculate(i)


    /*if (numbers[i].innerHTML === '=') {
      buttons[i].addEventListener("click", calculate(i));
    } else {
      buttons[i].addEventListener("click", addValue(i));
    }*/

  };
};

function displayNum (evt){
  evt.target.classlist.toggle ('displayNum')
}


/*function operatorSwitch(i) {
    return function () {
      /* Replacing the '÷' and 'x' symbols,because JS doesn't calculate with them. . operatorSwitch(i) does is pretty simple: the
     adds value to the ‘result’-div:*/
/*
      if (buttons[i].innerHTML === '÷') {
         screen_result.innerHTML  += '/';
      } else if (buttons[i].innerHTML === 'x') {
         screen_result.innerHTML  += '*';
      } else {
         screen_result.innerHTML  += buttons[i].innerHTML;
      }
    };
}

/* calculating what to do with ‘result’ using JS-function: eval() function!*/
/*
function calculate(i) {
  return function () {
      screen_result.innerHTML = eval(screen_result.innerHTML);
  };
}
/*   clear 'results'  */
/*
clear.onclick = function () {
  result.innerHTML = '';
};
*/
