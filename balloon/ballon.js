// Function to start the game
function startGame() {
  const startButton = document.querySelector(".start-button");
  startButton.style.display = "none";

  const balloonContainer = document.getElementById("balloon-container");
  balloonContainer.innerHTML = "";

  let balloons = [];
  for (let i = 0; i < 3; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    balloonContainer.appendChild(balloon);
    balloons.push(balloon);
  }

  for (let i = 0; i < balloons.length; i++) {
    balloons[i].onclick = function () {
      popBalloon(this, i); // Pass the index of the balloon to popBalloon function
    };
  }
}

// Function to pop a balloon
function popBalloon(balloon, index) {
  balloon.style.animation = "none";
  setTimeout(function () {
    balloon.style.visibility = "hidden";
    showForm(index); // Pass the index of the clicked balloon to showForm function
  }, 1000);
}

// Function to show the form modal
function showForm(index) {
  const formModal = document.getElementById("formModal");
  formModal.style.display = "block";
  formModal.dataset.balloonIndex = index; // Store the index of the balloon in the modal dataset
}

// Function to show the game result modal
function showReward(name) {
  const modal = document.getElementById("myModal");
  const modalName = document.getElementById("modal-name")
  const modalTitle = document.getElementById("modal-title");
  const modalContent = document.getElementById("modal-content");

  const isWin = Math.random() < 0.5; // 50% chance to win

  if (isWin) {
    modalTitle.innerHTML = `Congratulations! <p>${name}</p>`; // Update modal title with entered name
    modalContent.textContent = "You've won a special reward!";
    document.getElementById("winAudio").play(); // Play win audio
  } else {
    modalTitle.innerHTML = `Better Luck Next Time!  <p>${name}</p>`;
    modalContent.textContent = "Unfortunately, you didn't win this time.";
    document.getElementById("loseAudio").play(); // Play lose audio
  }

  modal.style.display = "block";
  setTimeout(function () {
    modal.style.display = "none";
    window.location.reload();
  }, 5000); // Modal disappears after 5 seconds
}

// Function to get rewards
function getRewards() {
  const form = document.getElementById("reward-form");
  let name = form.elements["name"].value;
  let mobile = form.elements["mobile"].value;
  let email = form.elements["email"].value;

  const formModal = document.getElementById("formModal");
  formModal.style.display = "none";
  form.reset(); // Reset form values
  showReward(name);
}

document
.querySelector(".backBtn")
.addEventListener("click", function () {
  window.history.back(); // Equivalent to history.go(-1) or history.back()
});
