(function ($) {
    "use strict";
  

    var clickedScratchCard = null;
  

    var formSubmitted = false;
  

    function openFormModal() {
      $("#formModal").css({
        "display": "block",
        "z-index": "10001" 
      });
    }


    function closeFormModal() {
        $("#formModal").css("display", "none");
      }

    $("#formModal .submit-btn").click(function () {
      var name = $("#name").val();
      var email = $("#email").val();
      var mobile = $("#mobile").val();
  

      if (name && email && mobile) {
        formSubmitted = true;
        closeFormModal();
        $("#" + clickedScratchCard + " .scratch-card-overlay").hide();
        // Reset form fields to initial state
        $("#name").val("");
        $("#email").val("");
        $("#mobile").val("");
      } else {
        alert("Please fill in all fields.");
      }
    });
  
    // Function to initialize scratch card
    function initializeScratchCard() {
      $(".demo1").scratchCard({
        onComplete: function () {
        }
      });
      $(".demo2").scratchCard({
        width: "300",
        height: "300",
        scratched: "40",
        coverImage: "assets/images/cover-3.png",
        brushImage: "assets/images/brush.png",
        onComplete: function () {
        },
      });
    
      $(".demo3").scratchCard({
        inpopup: true,
        triggerOn: "#popupopen1",
        onComplete: function () {
        },
      });
    
      $(".demo4").scratchCard({
        width: "300",
        height: "300",
        scratched: "40",
        coverImage: "assets/images/cover-1.png",
        brushImage: "assets/images/brush.png",
        inpopup: true,
        triggerAfter: 1,
        triggerOn: "#popupopen2",
        onComplete: function () {
        },
      });
    
      $(".demo5").scratchCard({
        width: "300",
        height: "300",
        scratched: "40",
        coverImage: "assets/images/cover-2.png",
        brushImage: "assets/images/brush.png",
        inpopup: true,
        triggerOn: "#popupopen3",
        onComplete: function () {
        },
      });

    }

    // Call the function to initialize scratch card
    initializeScratchCard();
  
    $(".demo1, .demo2, .demo3, .demo4, .demo5").click(function () {
      // Get the ID of the clicked scratch card
      var cardID = $(this).attr("id");
  
      // Check if the form is not submitted and the clicked scratch card is different from the previously clicked one
      if (!formSubmitted || clickedScratchCard !== cardID) {
        clickedScratchCard = cardID;
        openFormModal();

      }
    });

    // Copy event handler for coupon code
    $(document).on("click", ".sc-copy", function (e) {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp
        .val(
          $(this).parent().closest("div").find(".copycouponcode").text()
        )
        .select();
      document.execCommand("copy");
      $(this)
        .parent()
        .closest("div")
        .find(".myTooltip")
        .html("Copied: " + $temp.val());
      $temp.remove();
    });

    document
.querySelector(".backBtn")
.addEventListener("click", function () {
  window.history.back(); // Equivalent to history.go(-1) or history.back()
});
  
  })(jQuery);
