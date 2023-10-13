class Player {
  constructor() {
    // init
    this.position = {
      x: canvas.width / 2.8,
      y: canvas.height / 2.7,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };

    this.isAlive = true;
    this.size = 50;
    this.image = new Image();
    this.image.src = "./ship.png";
  }

  draw() {
    c.beginPath();
    c.fillStyle = "red";
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  move() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  update() {
    this.draw();
    if (this.isAlive) {
      this.move();
    }
  }
}
