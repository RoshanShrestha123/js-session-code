class Pipe {
  constructor(x) {
    this.position = {
      x: x,
      y: Math.random() * (0 - -200) + -200,
    };

    this.size = {
      width: 50,
      height: 300,
    };

    this.velocity = {
      x: -1.4,
      y: 0,
    };

    this.gap = 100;
    this.upImage = new Image();
    this.downImage = new Image();
    this.upImage.src = "./pipe-up.png";
    this.downImage.src = "./pipe-down.png";
  }

  draw() {
    c.beginPath();
    c.fillStyle = "green";
    c.drawImage(
      this.upImage,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }

  drawBelow() {
    c.beginPath();
    c.fillStyle = "green";
    c.drawImage(
      this.downImage,
      this.position.x,
      this.position.y + this.size.height + this.gap,
      this.size.width,
      this.size.height
    );
  }

  collision() {
    // up pipe
    if (
      this.position.x + this.size.width >=
        player.position.x - player.size.x / 2 &&
      this.position.x <=
        player.position.x - player.size.x / 2 + player.size.x &&
      this.position.y + this.size.height >= player.position.y &&
      this.position.y <= player.position.y + player.size.y
    ) {
      player.isDead = true;
    }

    if (
      this.position.x + this.size.width >=
        player.position.x - player.size.x / 2 &&
      this.position.x <=
        player.position.x - player.size.x / 2 + player.size.x &&
      this.position.y + this.size.height + this.gap + this.size.height >=
        player.position.y &&
      this.position.y + this.size.height + this.gap <=
        player.position.y + player.size.y
    ) {
      player.isDead = true;
    }
  }

  move() {
    if (this.position.x + this.size.width <= 0) {
      this.position.x = canvas.width + 150;
      this.position.y = Math.random() * (0 - -200) + -200;
    }
    this.position.x += this.velocity.x;
  }

  update() {
    this.draw();
    this.drawBelow();
    if (!player.isDead) {
      this.move();
    }
  }
}
