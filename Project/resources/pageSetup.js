
window.onload = function () {

    window.onscroll = function () {
        var nav = document.getElementById("navBar");
        var navY = (nav.clientHeight + 8);
        var navP = nav.getBoundingClientRect().top;
        var con = document.getElementById("content");
        var subHP = document.getElementById("subHeader").getBoundingClientRect().bottom;

        console.log(navY);

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
}