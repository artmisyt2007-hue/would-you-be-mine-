// ================================
// PAGE TRANSITIONS
// ================================

function nextPage(current) {
  const currentPage = document.getElementById("page" + current);
  const nextPage = document.getElementById("page" + (current + 1));

  if (currentPage && nextPage) {
    currentPage.classList.add("hidden");
    nextPage.classList.remove("hidden");
  }
}


// ================================
// YES BUTTON
// ================================

function sayYes() {
  const proposalPage = document.getElementById("page4");
  const finalPage = document.getElementById("finalPage");

  proposalPage.classList.add("hidden");
  finalPage.classList.remove("hidden");

  createCelebration();
}


// ================================
// CELEBRATION
// ================================

function createCelebration() {
  for (let i = 0; i < 30; i++) {

    const heart = document.createElement("div");

    heart.innerHTML = "♥";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";

    heart.style.fontSize =
      (12 + Math.random() * 25) + "px";

    heart.style.opacity = "0.7";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    heart.style.animation =
      "floatUp 4s ease forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
}


// ================================
// PLAYFUL "NO" BUTTON
// ================================

const noButton = document.getElementById("noButton");

if (noButton) {

  noButton.addEventListener("mouseover", moveNoButton);

  noButton.addEventListener("touchstart", moveNoButton);
}


function moveNoButton(event) {

  if (event) {
    event.preventDefault();
  }

  const card = document.querySelector(".card");

  if (!card) return;

  const cardRect = card.getBoundingClientRect();

  const maxX = Math.max(80, cardRect.width / 2 - 120);
  const maxY = 100;

  const x =
    Math.random() * (maxX * 2) - maxX;

  const y =
    Math.random() * (maxY * 2) - maxY;

  noButton.style.transform =
    `translate(${x}px, ${y}px)`;
}
