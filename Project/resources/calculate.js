
var sumTotal;




function makeFormMenu(array, where) {

    var length = array.length;

    var cartHTML = `<form onsubmit="return false"><table>
    <tr>
    <th>Name</th>
    <th>Price</th>
    <th>Sold</th>
    </tr>`;

    for (var n = 0; n < length; n++) {

        cartHTML += "<tr><td>" + array[n][1] + "</td>";
        cartHTML += "<td>$" + array[n][2].toFixed(2) + "</td>";
        cartHTML += `<td><input min='0' type='number' id='I${n}' price='${array[n][2]}' totalcost='0' value='0' ></td></tr>`;
    }
    cartHTML += "<tr id='finalLine'><td><b>Click Calculate for Sum</b></td><td id='totalTag'><b>Total + 8.25% tax:</b></td><td id='total'><b>$0.00</b></td></tr><tr><td colspan='3' id='tableSubmit'><input id='submitButton' type='submit' value='Calculate'></td></tr></table></form>";

    document.getElementById(where).innerHTML = cartHTML;

    

    for (var i = 0; i < length; i++) {

        var x = document.getElementById("I"+i);
        var subTotal = 0;

        x.addEventListener("input",function(c){
            var p = c.target.attributes.price.value;
            var v = c.target.value;
            subTotal = p * v;
            c.target.attributes.totalcost.value = subTotal;



        });
        
    }
    document.getElementById("submitButton").addEventListener("click", calculate);

    function calculate(){
        var total = 0;
        for(var i = 0; i < length; i++){
            var x = document.getElementById("I"+i);
            var st = parseInt(x.getAttribute('totalcost'));
            total += st;
        }

        var tax = total * 0.0825;

        total += tax

        document.getElementById('total').innerHTML = "<b>$"+total.toFixed(2)+"</b>";
    }

}











