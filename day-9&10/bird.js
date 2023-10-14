class Bird {
  constructor() {
    this.position = {
      x: canvas.width / 2,
      y: 0,
    };

    this.size = {
      x: 50,
      y: 35,
    };
    this.velocity = {
      x: 0,
      y: 2,
    };

    this.acceleration = 0.1;
    this.isDead = false;
    this.img = new Image();
    this.img.src = "./frame-1.png";
  }

  draw() {
    c.beginPath();
    c.fillStyle = "red";
    c.drawImage(
      this.img,
      this.position.x - this.size.x / 2,
      this.position.y,
      this.size.x,
      this.size.y
    );
  }

  move() {
    this.velocity.y += this.acceleration;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  jump() {
    this.velocity.y = -3;
  }

  update() {
    this.draw();
    if (!this.isDead) {
      this.move();
      this.borderCollision();
    }
  }

  borderCollision() {
    if (this.position.y + this.size.y >= canvas.height) {
      this.position.y = canvas.height - this.size.y;
      this.isDead = true;
    }
  }
}
