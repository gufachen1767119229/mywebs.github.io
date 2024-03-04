var oImg = document.querySelectorAll('.wrapper > img');
var wrapper = document.querySelector(".wrapper");
var length = oImg.length;
var deg = 360 / length;
var startX = 0,
    startY = 0,
    nowX = 0,
    nowY = 0,
    rotateX = -10,
    rotateY = 0,
    disY = 0,
    disX = 0;
var timer = null;

window.onload = function () {
    for (var i = 0; i < oImg.length; i++) {
        oImg[i].style.transform = "rotateY(" + deg * i + "deg) translateZ(300px)"
        oImg[i].style.transitionDelay = (length - 1 - i) * 0.1 + "s";
    }
    document.onmousedown = function (e) {
        clearInterval(timer);
        startX = e.clientX;
        startY = e.clientY;

        this.onmousemove = function (ev) {
            nowX = ev.clientX;
            nowY = ev.clientY;
            disY = (nowY - startY);
            disX = (nowX - startX);
            rotateX += -disY * 0.2;
            rotateY += disX * 0.1;
            wrapper.style.transform = "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";

            startX = nowX;
            startY = nowY;
        }
        this.onmouseup = function () { 
            this.onmousemove = null;
            timer = setInterval(function () { 
                disX *= 0.9;
                disY *= 0.9;
                rotateX += -disY * 0.2;
                rotateY += disX * 0.1;
                wrapper.style.transform = "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";

                if(Math.abs(disX) < 0.1 && Math.abs(disY) < 0.1) {
                    clearInterval(timer)
                }
             },20)
         }
    }
}