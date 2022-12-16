setInterval(screenSize, 10);

function screenSize(){
    var p = document.getElementById('demo');
    var x = window.innerWidth;
    var y = window.innerHeight;
    p.innerHTML = "Width: " + x + " Height: " + y;
}


