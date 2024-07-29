let mainSvg = document.querySelector(".main-svg");
let secondSvg = document.querySelector(".second-svg");
let thirdSvg = document.querySelector(".third-svg");
let content = document.querySelector(".content");
let audio = new Audio("audio/blast.mp3");
let win = new Audio("audio/win.mp3");
let lose = new Audio("audio/lose.mp3");

mainSvg.addEventListener("click", function () {
  setTimeout(()=>{
    openFormModal();
  }, 300)
});

function openFormModal() {
  let formModal = document.getElementById("formModal");
  formModal.style.display = "block";

  let submitBtn = formModal.querySelector(".submit-btn");

  // Get the input fields
  let nameInput = formModal.querySelector("#name");
  let emailInput = formModal.querySelector("#email");
  let mobileInput = formModal.querySelector("#mobile");

  // Function to check if all inputs are filled
  function validateForm() {
    return (
      nameInput.value.trim() !== "" &&
      emailInput.value.trim() !== "" &&
      mobileInput.value.trim() !== ""
    );
  }

  // Add event listener to handle form submission
  submitBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Check if all inputs are filled
    if (validateForm()) {
      // Disable the submit button
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.disabled = false;
        formModal.style.display = "none";

        // // Call the function to open the rewards modal
        // openRewardsModal(nameInput.value, emailInput.value, mobileInput.value);

        audio.play();
        mainSvg.style.visibility = "hidden";
        secondSvg.style.visibility = "visible";

        setTimeout(() => {
          thirdSvg.style.visibility = "visible";
        }, 100);

        setTimeout(() => {
          content.style.opacity = ".9";
        }, 1000);
      }, 200);

      setTimeout(()=>{
        openRewardsModal(nameInput.value, emailInput.value, mobileInput.value);
      },2000)
    } else {
      alert("Please fill in all fields.");
    }
  });
}

function openRewardsModal(name, email, mobile) {
  let rewardsModal = document.getElementById("rewardsModal");
  let congratulationsTitle = document.querySelector(".congratulations-title");
  let rewardsContent = document.querySelector(".rewards-content");
  let rewardsBtn = document.querySelector(".rewards-btn");
  let closeBtn = rewardsModal.querySelector(".close");

  rewardsModal.style.display = "block";

  // Simulate win/lose scenario (true for win, false for lose)
  let isWinner = Math.random() < 0.5;
  if (isWinner) {
    win.play();
    congratulationsTitle.innerHTML = `Congratulations! <p>${name}</p>`;
    rewardsContent.innerText = "You've won a special reward!";
    setTimeout(() => {
      win.pause();
    }, 4000);
  } else {
    congratulationsTitle.innerHTML = `Better Luck Next Time!  <p>${name}</p>`;
    rewardsContent.innerText = "Unfortunately, you didn't win this time.";
    lose.play();
  }

  // Add event listener to the rewards button to reload the page
  rewardsBtn.addEventListener("click", function () {
    window.location.reload();
  });
}


document
.querySelector(".backBtn")
.addEventListener("click", function () {
  window.history.back(); // Equivalent to history.go(-1) or history.back()
});
