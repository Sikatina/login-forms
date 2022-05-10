
$(document).ready(function(){
   // when register button clicked
   $(".register").click(function(){

      // Fade out the paragraph
       $("body > p").fadeOut();

       //fadeOut the register button
       $(this).fadeOut(100, function(){

        //Slide down Form container
        $(".container").slideDown(800);
       });
    });
    // when cancel button clicked
     $(".cancelbtn").click(function(){

       // slide up Form container
        $(".container").slideUp(500, function(){

           // register button and paragraph fade in
 
            $(".register").fadeIn(200);
            $("body > p").fadeIn();
        });
    });
});           