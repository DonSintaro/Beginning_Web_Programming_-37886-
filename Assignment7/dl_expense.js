"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 2

   Author: Jeffrey Arriaga
   Date:   04/03/2022
   
   Filename: dl_expenses.js
   
   Function List
   =============
   
   validateSummary()
      Validates the data entry in the summary field.
   
   calcClass(sumClass)
      Sums up all of the data values for elements of the sumClass class.
      
   calcExp()
      Calculates the travel expenses from all categories and dates.
      
   formatNumber(val, decimals)
      Formats the value, "val" to the number of decimals indicated 
      by "decimals", adding thousands separators.
      
   formatUSCurrency(val)
      Formats the value, "val", as U.S. currency.
      
*/

//run on load of html page and sets up table functions to every input
window.onload = function(){
   var changingCells = document.querySelectorAll('table#travelExp input.sum');

   for (var i = 0; i < changingCells.length; i++){

      changingCells[i].addEventListener("change",calcExp);

   }

   document.getElementById("submitButton").addEventListener("click",validateSummary);
}

//validates summary
function validateSummary(){
   if(document.getElementById("summary").validity.valueMissing){
      document.getElementById("summary").setCustomValidity("You must include a summary of the trip in your report.");
   }
   else{
      document.getElementById("summary").setCustomValidity("")
   }
}

//calculates sum based on values attached to class name of input on html page, returns sum
function calcClass(sumClass){


   var sumFields = document.querySelectorAll(sumClass);
   var sumTotal = 0;

   for(var i = 0;i<sumFields.length;i++){

      var itemValue = parseFloat(sumFields[i].value);

      if(!(isNaN(itemValue))){
         
         sumTotal += itemValue;
      }
   }

   return sumTotal;
}

//forwards calculated sums to html page
function calcExp(){
   var expTable = document.querySelectorAll('table#travelExp tbody tr');


   for (var i = 0;i<expTable.length;i++){

      document.querySelector('input#subtotal'+i).value = formatNumber(calcClass('.date'+i),2);
   }

document.getElementById('transTotal').value = formatNumber(calcClass('.trans'),2);
document.getElementById('lodgeTotal').value = formatNumber(calcClass('.lodge'),2);
document.getElementById('mealTotal').value = formatNumber(calcClass('.meal'),2);
document.getElementById('otherTotal').value = formatNumber(calcClass('.other'),2);

document.getElementById('expTotal').value = formatUSCurrency(calcClass('.sum'));


}

function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}