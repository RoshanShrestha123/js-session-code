const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
let color = "black";

const Box = {
  x: 100,
  y: 100,
  width: 100,
  height: 100,
};

const Box2 = {
  x: 250,
  y: 250,
  width: 100,
  height: 100,
};

document.addEventListener("mousemove", (e) => {
  Box.x = e.clientX;
  Box.y = e.clientY;
});

function checkCollision() {
  if (
    Box.x + Box.width >= Box2.x &&
    Box.x <= Box2.x + Box2.width &&
    Box.y + Box.height >= Box2.y &&
    Box.y <= Box2.y + Box2.height
  ) {
    color = "red";
  } else {
    color = "green";
  }
}

function animate() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.beginPath();
  c.fillRect(
    Box.x - Box.width / 2,
    Box.y - Box.height / 2,
    Box.width,
    Box.height
  );

  c.beginPath();
  c.fillStyle = color;
  c.fillRect(
    Box2.x - Box2.width / 2,
    Box2.y - Box2.height / 2,
    Box2.width,
    Box2.height
  );

  checkCollision();
  requestAnimationFrame(animate);
}

animate();
