// Food
//
// A class to represent food, mostly just involves the ability to be
// a random size and to reset

class Food extends Agent {

  // Constructor
  //
  // Pass arguments on to the super() constructor (e.g. for Agent)
  // Also set a minimum and maximum size for this food object which it
  // will vary between when it resets
  constructor(x,y,minSize,maxSize,maxSpeed,tx,ty,vx,vy) {
    super(x,y,random(minSize,maxSize),'#55cccc');
    this.minSize = minSize;
    this.maxSize = maxSize;
    this.maxSpeed = maxSpeed;
    this.tx = random(0,100);
    this.ty = random(0,100);
  }

  // reset()
  //
  // Set position to a random location on the canvas
  // Set the size to a random size within the limits
  reset() {
    this.x = random(0,width);
    this.y = random(0,height);
    this.size = random(this.minSize,this.maxSize);
    this.tx = random(0,100);
    this.ty = random(0,100);

  }

  update() {

    // movement
    this.tx += 0.01;
    this.vx = this.maxSpeed * (noise(this.tx) * 2 - 1);
    this.ty += 0.01;
    this.vy = this.maxSpeed * (noise(this.ty) * 2 - 1);
    this.x += this.vx;
    this.y += this.vy;

    // wrapping
    if (this.x < 0)  {
      this.x += windowWidth;
    }

    if (this.x >= windowWidth) {
      this.x -= windowWidth;
    }

    if (this.y < 0) {
      this.y += windowHeight;
    }

    if (this.y >= windowHeight) {
      this.y -= windowHeight;
    }
  }
}
