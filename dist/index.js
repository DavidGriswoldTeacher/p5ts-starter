"use strict";
function setup() {
    createCanvas(640, 480);
}
function draw() {
    if (mouseIsPressed) {
        fill(0);
    }
    else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}
var spot = /** @class */ (function () {
    function spot(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(spot.prototype, "coords", {
        get: function () { return [this._x, this._y]; },
        enumerable: true,
        configurable: true
    });
    ;
    return spot;
}());
