const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

class Box {
  constructor() {
    this.color = "red";
    this.width = 100;
    this.height = 100;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.x_velocity = 1;
    this.y_velocity = 1;
    this.colors = ["red", "blue", "green", "yellow", "purple", "black"];
    this.color = this.colors[0];
  }

  selectRandomColor() {
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  draw() {
    c.beginPath();
    c.fillStyle = this.color;
    c.rect(this.x, this.y, this.width, this.height);
    c.fill();
  }

  move() {
    this.x = this.x + this.x_velocity;
    this.y = this.y + this.y_velocity;
  }

  collisionCheck() {
    if (this.x + this.width > canvas.width) {
      this.x_velocity = -this.x_velocity;
      this.selectRandomColor();
    } else if (this.x < 0) {
      this.selectRandomColor();
      this.x_velocity = Math.abs(this.x_velocity); // Math.abs always return positive number
    }

    if (this.y + this.height > canvas.height) {
      this.selectRandomColor();
      this.y_velocity = this.y_velocity * -1;
    } else if (this.y < 0) {
      this.selectRandomColor();
      this.y_velocity = Math.abs(this.y_velocity);
    }
  }
}

const box = new Box();

// game loop
function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  box.draw();
  box.move();
  box.collisionCheck();
  window.requestAnimationFrame(animate);
}

animate();
