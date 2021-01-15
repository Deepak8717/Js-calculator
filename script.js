const display = document.getElementById("display");
const numbers = document.getElementsByClassName("num");
const operatorKey = document.getElementsByClassName("operator");
const clear = document.getElementById("clear");
const equalTo = document.getElementById("equalTo");
let result = 0;
let resultArray = [];
let operand = "";
let operator = "";

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    if (operator == "==") {
      display.innerHTML = 0;
    }

    if (display.innerHTML == 0) {
      display.innerHTML = +numbers[i].innerHTML;
    } else {
      display.innerHTML += numbers[i].innerHTML;
    }
    operand += numbers[i].innerHTML;
  });
}

for (let i = 0; i < operatorKey.length; i++) {
  operatorKey[i].addEventListener("click", function () {
    if (operator != "") {
      if (operator == "+") {
        addition(parseFloat(operand));
      } else if (operator == "-") {
        substraction(parseFloat(operand));
      }
    }
    result = parseFloat(display.innerHTML);
    display.innerHTML += operatorKey[i].innerHTML;
    if (operatorKey[i].innerHTML == "+") {
      operator = "+";
    } else if (operatorKey[i].innerHTML == "-") {
      operator = "-";
    }
    operand = "";
  });
}

clear.addEventListener("click", function () {
  display.innerHTML = 0;
});

function addition(o) {
  result = result + o;
}
function substraction(o) {
  result = result - o;
}

equalTo.addEventListener("click", function () {
  if (operator == "+") {
    addition(parseFloat(operand));
  } else if (operator == "-") {
    substraction(parseFloat(operand));
  }
  display.innerHTML = result;
  operator = "==";
});
