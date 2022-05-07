"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Jeffrey Arriaga
    Date:   3/5/2022  
   
   Filename: tc_cart.js
	
*/

var orderTotal = 0;

var cartHTML = `<table>
<tr>
<th>Item</th>
<th>Description</th>
<th>Price</th>
<th>Qty</th>
<th>Total</th>
</tr>`;

var length = item.length; // gets length of array/shopping cart


for (var i = 0; i < length; i++) {  //uses length of array to run a 'for loop' as many times as the length of array to run commands and apply html code to cartHTML var while using the i varible as the index for each array
   cartHTML += "<tr><td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>"; //concatenates html code using array data
   cartHTML += "<td>" + itemDescription[i] + "</td>";                                     //concatenates html code using array data
   cartHTML += "<td>$" + itemPrice[i] + "</td>";                                          //concatenates html code using array data
   cartHTML += "<td>" + itemQty[i] + "</td>";                                             //concatenates html code using array data

   var itemCost = (itemPrice[i] * itemQty[i]);                                            //creates a varible that holds total item cost

   cartHTML += "<td>$" + itemCost + "</td>";                                              //concatenates html code using itemCost var
   orderTotal += itemCost;                                                                //keeps a running total of all item costs

}

cartHTML += "<tr><td colspan='4'>SubTotal</td><td>$"+orderTotal+"</td></tr></table>";     //concatenates html code using orderTotal var


document.getElementById("cart").innerHTML = cartHTML;                                     //injects the final cartHTML data where id=cart for user view



