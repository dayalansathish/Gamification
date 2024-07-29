
const boxes = document.querySelectorAll('.mystery-box');
const formModal = document.getElementById('form-modal');
const rewardsModal = document.getElementById('rewards-modal');
const getRewardsBtn = document.getElementById('get-rewards-btn');
const modalTitle = document.getElementById('modal-title');
const rewardImage = document.getElementById('reward-image');
const closeButtons = document.querySelectorAll('.close');

let reward ="";
let hasWon = false;
let winningRewardIndex = 0; // Index of the winning reward image

// Function to open a modal
function openModal(modal) {
  modal.style.display = 'block';
}

// Function to close a modal
function closeModal(modal) {
  modal.style.display = 'none';
}

// Function to pick a random reward index
function pickWinningReward() {
  winningRewardIndex = Math.floor(Math.random() * 3); // Random index between 0 and 2
  reward = `prize${winningRewardIndex + 1}.webp`; // Set the reward image based on the winning reward index
}

// Function to handle box click
function handleBoxClick(event) {
  pickWinningReward();
  openModal(formModal);
}

// Function to handle form submission
function handleFormSubmit() {
  hasWon = Math.random() < 0.5; // 50% chance to win
  if (hasWon) {
    modalTitle.textContent = 'Congratulations!';
    document.getElementById("winAudio").play(); // Play win audio
    rewardImage.src = reward;
    rewardImage.style.display = 'block';
  } else {
    modalTitle.textContent = 'Oops!';
    document.getElementById("loseAudio").play(); // Play win audio
    rewardImage.src = 'lose.jpg';
    rewardImage.style.display = 'block';
  }
  closeModal(formModal);
  openModal(rewardsModal);
  
  // Reload the page after 3 seconds
  setTimeout(() => {
    window.location.reload();
  }, 3000);
}

// Add event listeners
boxes.forEach(box => {
  box.addEventListener('click', handleBoxClick);
});

getRewardsBtn.addEventListener('click', handleFormSubmit);
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    closeModal(formModal);
    closeModal(rewardsModal);
  });
});

document
.querySelector(".backBtn")
.addEventListener("click", function () {
  window.history.back(); // Equivalent to history.go(-1) or history.back()
});
