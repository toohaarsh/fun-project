const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
let clickCount = 0;

// Clicking "Yes" triggers falling confetti
yesBtn.addEventListener("click", () => {
  document.body.innerHTML =
    "<h1>Yay! 🎉 Happy Valentine's Day, Pujjuu! ❤️</h1><br /> <h3>~Your Harshaa❤️</h3>";
  // document.body.innerHTML = "<h1>Your Harshaa❤️</h1>";
  createConfetti();
});

// Clicking "No" shrinks the button and eventually removes it
noBtn.addEventListener("click", () => {
  clickCount++;

  if (clickCount < 5) {
    noBtn.style.transform = `scale(${1 - clickCount * 0.2})`;
  } else {
    noBtn.style.animation = "shrink 0.5s forwards";
    setTimeout(() => noBtn.remove(), 500);
    // alert("There is no escape love");
  }
});

// Confetti Effect
function createConfetti() {
  for (let i = 0; i < 100; i++) {
    let confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 10000);
  }
}
