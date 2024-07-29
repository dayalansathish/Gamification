(function($){
    'use strict';
   


    // Handling click on scratch card
    $('.demo1').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        // Open the modal form
        $('#formModal').css("display","block");

        // When form is submitted
        $('#formModal form').on('submit', function(e) {
            e.preventDefault();
            // Assuming form validation passes
            // You can add your form validation logic here

            // Close the modal form
            $('#formModal').css("display","none");

            // Activate the scratch card
            activateScratchCard($this);
        });
    });

    // Initializing scratch cards
    $('.demo1').scratchCard({
        onComplete: function() {

        }
    });

    $('.demo2').scratchCard({
        width: '300',
        height: '300',
        scratched: '40',
        coverImage: 'assets/images/cover-3.png',
        brushImage: 'assets/images/brush.png',
        onComplete: function() {

        }
    });

    $('.demo3').scratchCard({
        inpopup: true,
        triggerOn: "#popupopen1",
        onComplete: function() {

        }
    });

    $('.demo4').scratchCard({
        width: '300',
        height: '300',
        scratched: '40',
        coverImage: 'assets/images/cover-1.png',
        brushImage: 'assets/images/brush.png',
        inpopup: true,
        // autoTrigger: true,
        triggerAfter: 1,
        triggerOn: "#popupopen2",
        onComplete: function() {

        }
    });

    $('.demo5').scratchCard({
        width: '300',
        height: '300',
        scratched: '40',
        coverImage: 'assets/images/cover-2.png',
        brushImage: 'assets/images/brush.png',
        inpopup: true,
        triggerOn: "#popupopen3",
        onComplete: function() {

        }
    });

    $(document).on('click','.sc-copy', function(e) {                                
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(this).parent().closest('div').find(".copycouponcode").text()).select();
        document.execCommand("copy");
        $(this).parent().closest('div').find(".myTooltip").html("Copied: " + $temp.val());
        $temp.remove();
    }); 
    
}(jQuery));
