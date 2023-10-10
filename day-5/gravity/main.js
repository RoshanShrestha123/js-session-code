const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

class Box {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };

    this.size = {
      width: 50,
      height: 50,
    };

    this.velocity = {
      x: 1,
      y: 1,
    };

    this.acceleration = 0.2; // m/s
  }

  draw() {
    c.beginPath();
    c.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }

  move() {
    this.velocity.y += this.acceleration;
    this.position.y += this.velocity.y;
  }

  checkBoxCollision() {}

  checkBorderCollision() {
    if (this.position.y + this.size.height > canvas.height) {
      this.position.y = canvas.height - this.size.height;
      this.velocity.y *= -0.8;
    }
  }

  update() {
    this.draw();
    this.move();
    this.checkBorderCollision();
  }
}

const box = new Box();

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  box.update();
  requestAnimationFrame(animate);
}

animate();
