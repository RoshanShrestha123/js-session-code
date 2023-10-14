class Background {
  constructor(x = 0, y = 0) {
    this.position = {
      x,
      y,
    };
    this.size = {
      x: canvas.width,
      y: canvas.height,
    };

    this.img = new Image();
    this.img.src = "./bg.png";
  }

  draw() {
    //render background;
    c.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.size.x,
      this.size.y
    );

    this.speed = 1;
  }

  move() {
    if (this.position.x + this.size.x <= 0) {
      this.position.x = canvas.width * 2;
    }
    this.position.x -= this.speed;
  }

  update(isGameOver) {
    this.draw();
    if (!isGameOver) {
      this.move();
    }
  }
}
