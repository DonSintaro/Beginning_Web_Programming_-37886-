"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 2

   Author: Jeffrey Arriaga
   Date:   03/13/2022  
   
   Filename: mt_calc.js

*/

window.onload = init;


// Functions List:
/* ===================================================================== */
// init()
//       Initializes the contents of the web page and sets up the
//       event handlers


function init() {
   var calcButtons = document.getElementsByClassName("calcButton");

   for (var i = 0; i < calcButtons.length; i++) {
      calcButtons[i].onclick = buttonClick;
   }
   document.getElementById("calcWindow").addEventListener("keydown", calcKeys);
}

// ------------------------------------------------------------------
// buttonClick(e)
//       Adds functions to the buttons clicked within the calcutlor


function buttonClick(e) {
   var calcValue = document.getElementById("calcWindow").value;
   var calcDecimal = document.getElementById("decimals").value;

   var buttonValue = e.currentTarget.value;

   switch (buttonValue) {   //switch to select function for event target value

      case "del": calcValue = "";  //clears textarea
         break;
      case "bksp": calcValue = eraseChar(calcValue); //backspace for textarea
         break;
      case "enter": calcValue += " = " + evalEq(calcValue, calcDecimal) + "\n";  //compute data
         break;
      case "prev": if (calcValue != "") {  //recalls last used equation
         calcValue += lastEq(calcValue);
         e.preventDefault();
      }
      else { window.alert("No previous value defined"); }
         break;

      default: calcValue += buttonValue;
   }

   document.getElementById("calcWindow").value = calcValue;  //inserts to textarea

   document.getElementById("calcWindow").focus();
}


// ------------------------------------------------------------------
// calcKeys(e)
//       Adds functions to key pressed within the calculator window 


function calcKeys(e) {

   var calcValue = document.getElementById("calcWindow").value;
   var calcDecimal = document.getElementById("decimals").value;

   switch (e.key) {        //switch to select function for event key pressed

      case "Delete": calcValue = "";  //clears textarea
         break;
      case "Enter": calcValue += " = " + evalEq(calcValue, calcDecimal);
         break;         //compute data
      case "ArrowUp":
         if (calcValue != "") {        //recalls last used equation
            calcValue += lastEq(calcValue);
            e.preventDefault();
         }
         else { window.alert("No previous value defined"); }
         break;
   }
   document.getElementById("calcWindow").value = calcValue;  //inserts to textarea

}


// ------------------------------------------------------------------
// eraseChar(textStr)
//       Erases the last character from the text string, textStr


function eraseChar(textStr) {
   return textStr.substr(0, textStr.length - 1);
}


// ------------------------------------------------------------------
// evalEq(textStr, decimals) 
// Evaluates the equation in textStr, returning a value to the number of decimals specified by the decimals parameter


function evalEq(textStr, decimals) {
   var lines = textStr.split(/\r?\n/);
   var lastLine = lines[lines.length - 1];
   var eqValue = eval(lastLine);
   return eqValue.toFixed(decimals);
}


// ------------------------------------------------------------------
// lastEq(textStr) 
// Returns the previous expression from the list of expressions in the textStr parameter


function lastEq(textStr) {
   var lines = textStr.split(/\r?\n/);
   var lastExp = lines[lines.length - 2];
   return lastExp.substr(0, lastExp.indexOf("=")).trim();
}