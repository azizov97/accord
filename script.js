let closeBtn = document.querySelectorAll(".close");
let card = document.querySelectorAll(".card");

closeBtn.forEach(function (e) {
  e.addEventListener("click", closeCard);
});

card.forEach(function (e) {
  e.addEventListener("click", openCard);
});

function closeCard(event) {
  event.stopPropagation();
  event.target.closest(".card").classList.add("closed");
}

function openCard(event) {
  if (event.currentTarget.classList.contains("closed")) {
    event.currentTarget.classList.remove("closed");
  }
}
