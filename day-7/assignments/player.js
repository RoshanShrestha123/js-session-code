class Player {
  constructor() {
    this.position = {
      x: canvas.width / 2,
      y: canvas.height / 2,
    };

    this.size = {
      width: 50,
      height: 50,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };
  }

  draw() {
    c.beginPath();
    c.fillStyle = "red";
    c.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }

  renderPlayer() {
    this.draw();
    this.movePlayer();
  }

  movePlayer() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}
