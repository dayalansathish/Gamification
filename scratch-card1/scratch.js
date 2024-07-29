$(document).ready(function () {
  let formCompleted = false;

  $("#scratchBtn").click(function () {
      $("#myModal").css("display", "block");
  });

  $("#claimForm").submit(function (e) {
      e.preventDefault();
      if ($(this)[0].checkValidity()) {
          formCompleted = true; // Set flag to true indicating form completion
          $("#myModal").css("display", "none");

          // Initialize scratch pad after form submission and rewards claimed
          $("#promo").wScratchPad({
              size: 70,
              bg: "images/rewards.jpg",
              realtime: true,
              fg: "images/fg.jpg",
              cursor: 'url("images/coin1.png") 5 5, default',
          });
      } else {
          alert("Please fill in all required fields.");
      }
  });

  // Add event listener for the back button
  document.querySelector(".backBtn").addEventListener("click", function () {
      window.history.back(); // Equivalent to history.go(-1) or history.back()
  });
});
