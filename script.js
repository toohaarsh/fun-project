const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
let clickCount = 0;

// Clicking "Yes" triggers falling confetti
yesBtn.addEventListener("click", () => {
    document.body.innerHTML = "<h1>Yay! 🎉 Happy Valentine's Day, Pooja! ❤️</h1>";
    createConfetti();
});

// Clicking "No" shrinks the button and eventually removes it
noBtn.addEventListener("click", () => {
    clickCount++;

    if (clickCount < 5) {
        noBtn.style.transform = `scale(${1 - clickCount * 0.2})`;
    } else {
        noBtn.style.animation = "shrink 0.5s forwards";
        setTimeout(() => {
            noBtn.remove(); // Remove "No" button
            displayMessage(); // Show the message
        }, 500);
    }
});

// Display the message after "No" button disappears
function displayMessage() {
    const message = document.createElement("h2");
    message.innerText = "There is no escape now, sonpariiii";
    message.style.color = "#ff4081";
    message.style.fontSize = "30px";
    message.style.fontFamily = "'Pacifico', cursive";
    message.style.marginTop = "20px";
    message.style.animation = "fadeIn 2s";
    document.body.appendChild(message);
}

// Confetti Effect
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }
}
