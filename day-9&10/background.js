class Background {
  constructor(x = 0, y = 0) {
    this.position = {
      x: x,
      y: y,
    };

    this.size = {
      width: canvas.width,
      height: canvas.height,
    };

    this.velocity = {
      x: -1,
      y: 0,
    };

    this.img = new Image();
    this.img.src = "./bg.png";
  }

  draw() {
    c.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }

  moveLeft() {
    if (this.position.x + this.size.width <= 0) {
      this.position.x = this.size.width;
    }
    this.position.x += this.velocity.x;
  }

  update(isDead) {
    this.draw();
    if (!isDead) {
      this.moveLeft();
    }
  }
}
