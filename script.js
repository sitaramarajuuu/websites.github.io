const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scoreText = document.getElementById("score");

let score = 0;
let isJumping = false;

// Jump function
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        jump();
    }
});

function jump() {
    if (isJumping) return;

    isJumping = true;
    dino.classList.add("jump");

    setTimeout(() => {
        dino.classList.remove("jump");
        isJumping = false;
    }, 500);
}

// Collision detection + Score
setInterval(() => {
    let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("right"));

    // Collision
    if (cactusLeft > 650 && cactusLeft < 720 && dinoBottom < 50) {
        alert("Game Over! Your score: " + score);
        score = 0;
        scoreText.innerText = "Score: " + score;
    } else {
        score++;
        scoreText.innerText = "Score: " + score;
    }
}, 100);
