
window.addEventListener("scroll",shadow);

function shadow(){
    var h = window.innerHeight / 2
    var f = document.getElementById("abc");
    var n = f.getBoundingClientRect().top
    console.log(n);
    if(n<h){
        var d = document.getElementById("doneHTML");
d.style.width = d.getAttribute("data-progress");

var j = document.getElementById("doneCSS");
j.style.width = j.getAttribute("data-progress");

var e = document.getElementById("doneBOOTSTRAP");
e.style.width = e.getAttribute("data-progress");

var w = document.getElementById("doneSASS");
w.style.width = w.getAttribute("data-progress");

var r = document.getElementById("doneJAVASCRIPT");
r.style.width = r.getAttribute("data-progress");


var g = document.getElementById("doneREACT");
g.style.width = g.getAttribute("data-progress");

    }
}

