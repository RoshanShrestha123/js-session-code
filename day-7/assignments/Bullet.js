class Bullet {
  constructor(x = 0, y = 0) {
    this.position = {
      x: x,
      y: y,
    };

    this.size = 20;

    this.velocity = {
      x: 0,
      y: 1,
    };

    this.speed = 5;
  }

  draw() {
    c.beginPath();
    c.fillStyle = "green";
    c.fillRect(this.position.x, this.position.y, this.size, this.size);
  }

  move() {
    this.position.y -= this.velocity.y + this.speed;
  }

  update() {
    this.draw();
    this.move();
  }
}
