

var items = [["item1","Flatbread PJMP Pizza",14.00],["item2","Stacked Mijo",9.00],["item3","Single Mexican Pizza",4.50],["item4","Sandwiched Mexican Pizza",5.50],["item5","The Basic ChaaaaaaLupa",2.50]];


var specials = [["item6","Chicken Queso Queso Quesadilla",13.00],["item7","Mexican Meat Pies",14.50],["item8","Mini Maíz Pizza Plate",10.00],["item9","Regular Tace Plate",15.00],["item10","Share the Love Family Style",40.00]];



var bothAr = [];

specials.forEach(function(i){
    bothAr.push(i);
})

items.forEach(function(i){
    bothAr.push(i);
})





function makeTable(array,where){

var length = array.length;

var cartHTML = `<table>
<tr>
<th>Item</th>
<th>Name</th>
<th>Price</th>
</tr>`;

for(var n = 0; n < length; n++){

    cartHTML += "<tr><td class='"+where+"ImgContainer'><img class='"+where+"Img' src='./images/" + array[n][0] + ".jpg' alt='" + array[n][0] + "' /></td>"; 

    


    cartHTML += "<td>" + array[n][1] + "</td>";                                     
    cartHTML += "<td>$" + array[n][2].toFixed(2) + "</td>";

}
cartHTML += "</table>";

document.getElementById(where).innerHTML = cartHTML; 
console.log("at end of tablefunct");

}








