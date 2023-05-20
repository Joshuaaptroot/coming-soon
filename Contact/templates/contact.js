$("#submit").click(function() {
    $(".gear").addClass("speed");
    $(".gear-2").addClass("speed");
    $(".gear-3").addClass("speed");
    $(".gear-4").addClass("speed");
    $(".gear-5").addClass("speed");
    $(".gearcolour").addClass("speed");
    $(".gearcolour-2").addClass("speed");
    $(".gearcolour-3").addClass("speed");
    $(".gear-6").addClass("speed");
    $(".gear-7").addClass("speed");
    $(".gear-8").addClass("speed");
    $(".gear-9").addClass("speed");
    $(".gear-10").addClass("speed");

    requestAnimationFrame(function() {
      setTimeout(function() {
        $(".gear").removeClass("speed");
        $(".gear-2").removeClass("speed");
        $(".gear-3").removeClass("speed");
        $(".gear-4").removeClass("speed");
        $(".gear-5").removeClass("speed");
        $(".gearcolour").removeClass("speed");
        $(".gearcolour-2").removeClass("speed");
        $(".gearcolour-3").removeClass("speed");
        $(".gear-6").removeClass("speed");
        $(".gear-7").removeClass("speed");
        $(".gear-8").removeClass("speed");
        $(".gear-9").removeClass("speed");
        $(".gear-10").removeClass("speed");
        }, 1500);
        
     
      });



    })