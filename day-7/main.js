const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

// to make the canvas size to the screen size 🚀
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

const player = new Player();
let allBullets = [];
let enemies = [];
let score = 0;

setInterval(() => {
  enemies.push(new Enemy());
}, Math.random() * (1500 - 1000) + 1000);

function loop() {
  c.clearRect(0, 0, canvas.width, canvas.height);

  player.update();
  player.collision(enemies);

  for (let i = 0; i < enemies.length; i++) {
    enemies[i].update(player.isDead);
    enemies[i].collision(allBullets);
    if (enemies[i].isCrossedBorder) {
      player.isDead = true;
    }
  }

  for (let i = 0; i < allBullets.length; i++) {
    allBullets[i].update();
  }

  c.font = "30px Arial";
  c.fillStyle = "white";
  c.fillText(score, 10, 40);

  if (player.isDead) {
    c.font = "30px Arial";
    c.fillStyle = "white";
    c.fillText("GAME OVER!", 150, canvas.height / 2);
  }

  requestAnimationFrame(loop); //60
}

loop();

//all listener in this code below
document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowUp") player.velocity.y = -5;
  if (event.code === "ArrowDown") player.velocity.y = 5;
  if (event.code === "ArrowLeft") player.velocity.x = -5;
  if (event.code === "ArrowRight") player.velocity.x = 5;
  if (event.code === "Space")
    allBullets.push(
      new Bullet(player.position.x + player.size / 2.8, player.position.y)
    );
});

document.addEventListener("keyup", (event) => {
  if (event.code === "ArrowUp") player.velocity.y = 0;
  if (event.code === "ArrowDown") player.velocity.y = 0;
  if (event.code === "ArrowLeft") player.velocity.x = 0;
  if (event.code === "ArrowRight") player.velocity.x = 0;
});
