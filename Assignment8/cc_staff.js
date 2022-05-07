"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 14
   Case Problem 2

   Author: Jeffrey Arriaga
   Date:   04-17-2022
   
   Filename: cc_staff.js
   
      
*/


/* Constructor function for the employee class */
function employee(id, firstName, lastName, dept, position, email, phone, photo) {
   this.id = id;
   this.firstName = firstName;
   this.lastName = lastName;
   this.dept = dept;
   this.position = position;
   this.email = email;
   this.phone = phone;
   this.photo = photo;
}

/* Object literal for search results */
var searchResult = {
   employees: [],
   sortById: function () {
      this.employees.sort(function (a, b) {
         if (a.id < b.id) { return -1; }
         else { return 1; }
      });
   }
};


/* Event listener to retrieve and display employee records matching the search condition */
document.getElementById("searchButton").addEventListener("click", function () {
   var tableBody = document.querySelector("table#staffTable tbody");
   var tableCaption = document.querySelector("table#staffTable caption");



   tableBody.removeChildren();
   searchResult.employees = [];
   staff.directory.forEach(record => {

      var nameSearch = document.querySelector("#nameSearch").value;

      var nameSearchType = document.querySelector("#nameSearchType").selectedValue();

      var nameRegExp;

      //switch statement for search methods
      switch (nameSearchType) {

         case "contains": nameRegExp = new RegExp(nameSearch, "i");
            break;

         case "beginsWith": nameRegExp = new RegExp("^" + nameSearch, "i");
            break;

         case "exact": nameRegExp = new RegExp("^" + nameSearch + "$", "i");
            break;

      }
      var foundName = nameRegExp.test(record.lastName);


      //////////////////////
      var positionSearch = document.querySelector("#positionSearch").value;

      var positionSearchType = document.querySelector("#positionSearchType").selectedValue();

      var positionRegExp;

      //switch statement for search methods
      switch (positionSearchType) {

         case "contains": positionRegExp = new RegExp(positionSearch, "i");
            break;

         case "beginsWith": positionRegExp = new RegExp("^" + positionSearch, "i");
            break;

         case "exact": positionRegExp = new RegExp("^" + positionSearch + "$", "i");
            break;

      }

      var foundPosition = positionRegExp.test(record.position);

      var deptSearch = document.querySelector("#deptSearch").selectedValue();
      var foundDept = deptSearch == "" || deptSearch == record.dept;

      //appends employee object to array
      if (foundName && foundPosition && foundDept){
         searchResult.employees.push(new employee(record.id, record.firstName, record.lastName, record.dept, record.position, record.email, record.phone, record.photo))
      }

   });


   tableCaption.textContent = `${searchResult.employees.length} records found`;

   searchResult.sortById();
   

   searchResult.employees.forEach(result => tableBody.insertAdjacentHTML("afterbegin",   //appends template literal of employees
      `<tr>
         <td><img src="${result.photo}" /></td>
         <td>${result.firstName}</td>
         <td>${result.dept}</td>
         <td>${result.position}</td>
         <td><a href="mailto:${result.email}">${result.email}</a></td>
         <td><a href="tel:${result.phone}">${result.phone}</a></td>
      </tr>`
      ))

});

/* --- Methods added to native objects ---*/

/* Method added to any DOM element that removes all child nodes of element */
HTMLElement.prototype.removeChildren = function () {
   while (this.firstChild) {
      this.removeChild(this.firstChild);
   }
};

/* Method added to the select element to return the value of the selected option */
HTMLSelectElement.prototype.selectedValue = function () {
   var sIndex = this.selectedIndex;
   return this.options[sIndex].value;
};


