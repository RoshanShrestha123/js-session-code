class Bullet {
  constructor(x = 0, y = 0) {
    this.position = {
      x: x,
      y: y,
    };

    this.velocity = {
      x: 1,
      y: -10,
    };

    this.size = 30;
    this.image = new Image();
    this.image.src = "./bullet.png";
  }

  draw() {
    c.beginPath();
    c.fillStyle = "white";
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  move() {
    this.position.y += this.velocity.y;
  }

  update() {
    this.draw();
    this.move();
  }
}
