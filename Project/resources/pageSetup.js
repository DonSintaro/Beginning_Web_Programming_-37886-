
window.onload = function () {

    var nav = document.getElementById("navBar");


    if(document.getElementById("adSpace")){
        var con = document.getElementById("adSpace");
    }
    else{
        var con = document.getElementById("content");
    }
    


    var navY = (nav.clientHeight + 8);
    var navP = nav.getBoundingClientRect().top;
    var subHP = document.getElementById("subHeader").getBoundingClientRect().bottom;


    if(navP < 0){
        nav.style.position = "fixed";
        nav.style.top = 0;
        con.style.marginTop = (40 + navY) + "px";
    }
    else if (navP <= subHP){
        nav.style.position = "relative";
        con.style.marginTop = "40px";
    }




    var foot = document.getElementsByTagName("footer")[0];
    var screenH = window.innerHeight;
    var bodyH = document.getElementsByTagName("body")[0].clientHeight;


    if (bodyH >= screenH){
        foot.style.position = "relative";
    }
    else if (bodyH < screenH){
        foot.style.position = "fixed";
        foot.style.bottom = 0;
    }


    window.onscroll = function () {
        
        navY = (nav.clientHeight + 8);
        navP = nav.getBoundingClientRect().top;
        subHP = document.getElementById("subHeader").getBoundingClientRect().bottom;


        if(navP < 0){
            nav.style.position = "fixed";
            nav.style.top = 0;
            con.style.marginTop = (40 + navY) + "px";
        }
        else if (navP <= subHP){
            nav.style.position = "relative";
            con.style.marginTop = "40px";
        }

    }



    window.onresize = function () {

        
        screenH = window.innerHeight;
        bodyH = document.getElementsByTagName("body")[0].clientHeight;
        

        if (bodyH > screenH){
            foot.style.position = "relative";
        }
        else if (bodyH < screenH){
            foot.style.position = "fixed";
            foot.style.bottom = 0;
        }

    }



}






