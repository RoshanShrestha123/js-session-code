const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

let mouse = {
  x: 0,
  y: 0,
  size: 50,
};

let bird = {
  x: Math.random() * (canvas.width - 200) + 200,
  y: canvas.height + 50,
  size: 40,
  isAlive: true,
  velocity: {
    x: 1,
    y: -3,
  },
};

const mouseImage = new Image();
const backgroundImage = new Image();
const duck = new Image();
duck.src = "./images/duck/duckEnemy-1.png";
mouseImage.src = "./images/circle-05.png";
backgroundImage.src = "./images/background-image.jpeg";

const gunSound = new Audio();
const backgroundMusic = new Audio();
backgroundMusic.src = "./images/bgmusic-wav.wav";
gunSound.src = "./images/shoot.mp3";

function start() {
  backgroundMusic.play();
  backgroundMusic.volume = 0.2;
  backgroundMusic.loop = true;
  gameLoop();
}

canvas.addEventListener("click", () => {
  console.log("click");
  gunSound.src = "./images/shoot.mp3";
  gunSound.play();
  gunSound.volume = 0.2;
  // check collision
  if (
    mouse.x + mouse.size >= bird.x &&
    mouse.x <= bird.x + bird.size &&
    mouse.y + mouse.size >= bird.y &&
    mouse.y <= bird.y + bird.size
  ) {
    console.log("collision");
    bird.isAlive = false;
  }
});

canvas.addEventListener("mousemove", (e) => {
  mouse = {
    ...mouse,
    x: e.offsetX,
    y: e.offsetY,
  };
});

let i = 1;
let frameCounter = 0;

function gameLoop() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  // put your code here.
  c.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  c.drawImage(duck, bird.x, bird.y, bird.size, bird.size);
  duck.src = `./images/duck/duckEnemy-${i}.png`;
  if (frameCounter >= 5) {
    i++;
    frameCounter = 0;
  }
  if (i > 4) i = 1;
  frameCounter++;

  // move bird
  if (bird.isAlive) {
    bird.x -= bird.velocity.x;
    bird.y += bird.velocity.y;
  } else {
    bird.y += 5;
    i = 1;
  }

  c.drawImage(mouseImage, mouse.x - 25, mouse.y - 25, mouse.size, mouse.size);

  requestAnimationFrame(gameLoop);
}
