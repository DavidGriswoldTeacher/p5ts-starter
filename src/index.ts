function setup() {
    createCanvas(640,480);
}

function draw() {
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }

  class spot {
    constructor(private _x:number, private _y:number) {}    
    get coords(): number[] {return [this._x,this._y]};
  }

