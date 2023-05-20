$(document).ready(function() {

  /* menu function */
  $("#side-nav").click(function() {
    $("#side-nav").hide(100);
    $("#dropdown").show(1000);
    $("h1").fadeOut(200);
    $(".cta").fadeOut(200);
    $(".image").fadeOut(200);
    $("#leave").fadeIn(1000);
    $(".gear").fadeOut(1000);
    $(".gear-2").fadeOut(1000);
    $(".gear-3").fadeOut(1000);
    $(".gear-4").fadeOut(1000);
    $(".gear-5").fadeOut(1000);
    $(".gearcolour").fadeIn(1000);
    $(".gearcolour-2").fadeIn(1000);
    $(".gearcolour-3").fadeIn(1000);
    $(".gear-6").fadeOut(1000);
    $(".gear-7").fadeOut(1000);
    $(".gear-8").fadeOut(1000);
    $(".gear-9").fadeOut(1000);
    $(".gear-10").fadeOut(1000);
    $(".pipes").fadeOut(1000);
  });

  /* exit function */
  $("#leave").click(function() {
    $("#dropdown").hide(500);
    $("#leave").hide(500);
    $("#side-nav").show(1000);
    $("h1").fadeIn(1000);
    $(".cta").fadeIn(1000);
    $(".image").fadeIn(1000);
    $(".gear").fadeIn(1000);
    $(".gear-2").fadeIn(1000);
    $(".gear-3").fadeIn(1000);
    $(".gear-4").fadeIn(1000);
    $(".gear-5").fadeIn(1000);
    $(".gearcolour").fadeOut(1000);
    $(".gearcolour-2").fadeOut(1000);
    $(".gearcolour-3").fadeOut(1000);
    $(".gear-6").fadeIn(1000);
    $(".gear-7").fadeIn(1000);
    $(".gear-8").fadeIn(1000);
    $(".gear-9").fadeIn(1000);
    $(".gear-10").fadeIn(1000);
    $(".pipes").fadeIn(1000);
  });

  /* backwards animation */
  $("#leave").click(function() {
    $(".crosser").addClass("cross-animated");
    $(".exit").addClass("cross-animated-2");

    requestAnimationFrame(function() {
      setTimeout(function() {
        $(".crosser").removeClass("cross-animated");
        $(".exit").removeClass("cross-animated-2");
      }, 1500);
    });
  });

  /* gears speedup animation */
  $(".gear").hover(function() {
    $(".gear").addClass("speed");

    requestAnimationFrame(function() {
      setTimeout(function() {
        $(".gear").removeClass("speed");
        }, 1500);
        
     
      });



    })
    


  $("#side-nav").click(function() {
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
    
    /*closing menu*/

    $("#leave").click(function() {
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
        


})

