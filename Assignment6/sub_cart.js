"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Jeffrey Arriaga
   Date:   03/27/2022 

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/
window.onload = setupCart;


function setupCart() {
   var addButton = document.getElementsByClassName("addButton");
   for (var i = 0; i < addButton.length; i++) {
      addButton[i].addEventListener("click", addItem); //creates a event on click of button to trigger addItem function for each button
   }
};


function addItem(e) {
   var foodItem = e.target.nextElementSibling;
   var foodID = foodItem.id;
   var foodDescription = foodItem.cloneNode(true);
   var cartBox = document.getElementById("cart");
   var duplicateOrder = false;


   //loops through the cart element children to find duplicates and adds increases the order amount by 1
   for (var i = cartBox.firstElementChild; i !== null; i = i.nextElementSibling) {
      if (i.id === foodID) {
         i.firstElementChild.innerHTML++; //increases count
         duplicateOrder = true;
         break;
      }
   }

   if (duplicateOrder == false) {
      var orderCount = document.createElement("span");
      orderCount.textContent = 1;  //sets the initial text content
      foodDescription.insertBefore(orderCount, foodDescription.firstChild); //inserts the text content before description
      cartBox.appendChild(foodDescription); //appends to cart
   }

}