var stop, staticx;
var img = new Image();
img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD/klEQVRYR+VXS2wTVxSdN/Nmxo5/Y0N+CoKI/GhCEgeIg9SopCtYIISABZuiqdQuUFm4XVTqpgpVFl1UFVKrdoPEsAA2iI/KoqhSQxAp2DGOLVBCfiVqmg+gOPY4tuPMr/OiTOQOJjMmI7FgVjPzPPeed8499z4D7B1fYEv52U4/ieGHCFLp8jH07sUlYTh/8dHZUmK+FQDb54Gr23x0pddDEg4nrIIE3oSSCoIci8aSt0Uu3GsWRMkACLaT3d/hDZIQb19LKspx7R49T89k7swupD/BuFjSDIiSAVR81f17Q53zsBZ8MZEfUNk4pD2LghyJxlJXBC50wXIABBs43t7q/tZugx1vApDJiINPRvgfJC58y3IAri8OXm9rZk4WBkYMMB5YTRBEYy4n9j95ynsVDFOTywMiF7lnBKIkCdTi+75tL3OkUHMEwO0mGUiA2sTS6jBtIyBN4s7heDIuXAqz1gFQLUcA0I4roMfDQH/97rIytOuVvBQmCEAXgkJJR56l7i399PBjywBANtDb1uo+ls1KKY+HrN6wnuoClEQPYGY2O/jPHH/UyA2mJSimv2bDYgCQNJNT6V6jOjANoObr7j9rdzlfoxT1AZ4XkoVWlGV5dnwiHV3kc2csY6D8y+4HDXWOVgCAu1DXQgCKovCJ5Gr0+XSWlETlDxFTbmPcUGyzOjDNAMb6GRtJ/dLygafORhMBvRURA6Ikj6VSwjxaoyhYNjrKXzNqSKYBkJ8GOBnD+oECWIaBXrUbbsNxsAMl03dDDVxoKHHeaC6YAgDZAz21Ox3nfT56jX6SxP3FGNBTHY4kLhv1AtMAOtp9P1MU3lJMz/HJ5cHGeueH+rVQJDEgXgr3bLkGEAP7OnwX9F7XAo9NpONNDa616ahdkihPRYZTd0QuFLQEwN5mps/hgK/tEgV/8SJ3v7LS/hG6Rxacn8+P/DuX+8tIf/R7UxIgB3hd9psN9S5vMRZQEfq8lH85I4/NLWQpHICFXF7MpDNSn3U2VNGiwwjjhifKK2wudfjgHje1tutiLkCsTH43sHFOeJMM5hhQv0azYPt2ulblTCFwbGdVpc2h9oMuFPjlq5W7FeW2jUMKejcxtXz35Y8Pjmymv3kJ1nfvb2PO6psQCqIvQlQHQ4+TF62rAZRFrYOaCueNYvNAD+DVYj40/nfuNMY9mraMARSIZLuCLc2uU3o36F0QjfO/mT2em64BbSf0Zwd/3VPv3O90wU7tnVaEiiIvj42n+81MQe3bkgGgD1Fjsjvgueoqew0FQZ5PSwQFFWlmbnU0L658YzSCC2V5KwD/0xX9OwIgKCirwVISb4kBfWEhi5qp+GIFuXUG1nvE+w3AyOubrf8HHtHAMOVEwKEAAAAASUVORK5CYII="

function Sakura(x, y, s, r, fn) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.r = r;
    this.fn = fn;
}
Sakura.prototype.draw = function (cxt) {
    cxt.save();
    var xc = 40 * this.s / 4;
    cxt.translate(this.x, this.y);
    cxt.rotate(this.r);
    cxt.drawImage(img, 0, 0, 40 * this.s, 40 * this.s)
    cxt.restore();
}
Sakura.prototype.update = function () {
    this.x = this.fn.x(this.x, this.y);
    this.y = this.fn.y(this.y, this.y);
    this.r = this.fn.r(this.r);
    if (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) {
        this.r = getRandom('fnr');
        if (Math.random() > 0.4) {
            this.x = getRandom('x');
            this.y = 0;
            this.s = getRandom('s');
            this.r = getRandom('r');
        } else {
            this.x = window.innerWidth;
            this.y = getRandom('y');
            this.s = getRandom('s');
            this.r = getRandom('r');
        }
    }
}
SakuraList = function () {
    this.list = [];
}
SakuraList.prototype.push = function (sakura) {
    this.list.push(sakura);
}
SakuraList.prototype.update = function () {
    for (var i = 0, len = this.list.length; i < len; i++) {
        this.list[i].update();
    }
}
SakuraList.prototype.draw = function (cxt) {
    for (var i = 0, len = this.list.length; i < len; i++) {
        this.list[i].draw(cxt);
    }
}
SakuraList.prototype.get = function (i) {
    return this.list[i];
}
SakuraList.prototype.size = function () {
    return this.list.length;
}

function getRandom(option) {
    var ret, random;
    switch (option) {
        case 'x':
            ret = Math.random() * window.innerWidth;
            break;
        case 'y':
            ret = Math.random() * window.innerHeight;
            break;
        case 's':
            ret = Math.random();
            break;
        case 'r':
            ret = Math.random() * 6;
            break;
        case 'fnx':
            random = -0.5 + Math.random() * 1;
            ret = function (x, y) {
                return x + 0.5 * random - 1.7;
            };
            break;
        case 'fny':
            random = 1.5 + Math.random() * 0.7
            ret = function (x, y) {
                return y + random;
            };
            break;
        case 'fnr':
            random = Math.random() * 0.03;
            ret = function (r) {
                return r + random;
            };
            break;
    }
    return ret;
}

function startSakura() {
    requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    var canvas = document.createElement('canvas'),
        cxt;
    staticx = true;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.setAttribute('style', 'position: fixed;left: 0;top: 0;pointer-events: none; z-index: 100;');
    canvas.setAttribute('id', 'canvas_sakura');
    document.getElementsByTagName('body')[0].appendChild(canvas);
    cxt = canvas.getContext('2d');
    var sakuraList = new SakuraList();
    for (var i = 0; i < 30; i++) {
        var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny;
        randomX = getRandom('x');
        randomY = getRandom('y');
        randomR = getRandom('r');
        randomS = getRandom('s');
        randomFnx = getRandom('fnx');
        randomFny = getRandom('fny');
        randomFnR = getRandom('fnr');
        sakura = new Sakura(randomX, randomY, randomS, randomR, {
            x: randomFnx,
            y: randomFny,
            r: randomFnR
        });
        sakura.draw(cxt);
        sakuraList.push(sakura);
    }
    stop = requestAnimationFrame(function () {
        cxt.clearRect(0, 0, canvas.width, canvas.height);
        sakuraList.update();
        sakuraList.draw(cxt);
        stop = requestAnimationFrame(arguments.callee);
    })
}
window.onresize = function () {
    var canvasSnow = document.getElementById('canvas_snow');
}
img.onload = function () {
    startSakura();
}

function stopp() {
    if (staticx) {
        var child = document.getElementById("canvas_sakura");
        child.parentNode.removeChild(child);
        window.cancelAnimationFrame(stop);
        staticx = false;
    } else {
        startSakura();
    }
}