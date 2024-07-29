// Array of names
const names = [
  "John",
  "Alice",
  "Bob",
  "Emma",
  "Michael",
  "Sophia",
  "William",
  "Olivia",
  "James",
  "Charlotte",
];


const pickerSound = new Audio("audio/picker2.mp3");
const successAudio = new Audio("audio/success.mp3");

function openFormModal() {
  document.getElementById("formModal").style.display = "block";
}

function closeModal() {
  document.getElementById("formModal").style.display = "none";
  document.getElementById("rewardsModal").style.display = "none";
}

function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  if (name.trim() === "" || email.trim() === "" || mobile.trim() === "") {
    alert("Please fill in all fields.");
    return;
  }

  names.push(name);

  pickRandomName();

  closeModal();
}

let currentIndex = 0;
let animationInterval;

function pickRandomName() {
  clearInterval(animationInterval);
  pickerSound.play();

  // Start scrolling animation
  animationInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % names.length;
    updateNameDisplay();
  }, 100);

  // Stop scrolling after a random duration (between 2 to 5 seconds) and display the selected name

  const stopTime = Math.floor(Math.random() * 3000) + 2000; // Random duration between 2000ms to 5000ms

  setTimeout(() => {
    pickerSound.pause();
    clearInterval(animationInterval);

    const randomIndex = Math.floor(Math.random() * names.length);

    document.getElementById("name-display").textContent = names[randomIndex];

    // Open rewards modal after 3 seconds
    setTimeout(() => {
      openRewardsModal();
      successAudio.play();

      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }, 1000);
  }, stopTime);
}

function openRewardsModal() {
  document.getElementById("rewardsModal").style.display = "block";
}

function updateNameDisplay() {
  document.getElementById("name-display").textContent = names[currentIndex];
}

document.querySelector(".backBtn").addEventListener("click", function () {
  window.history.back();
});
