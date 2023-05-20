$(document).ready(function() {
   
  let $gear = $('.gear');
  let $gear2 = $('.gear-2');
  let $gear3 = $('.gear-3');
  let $gear6 = $('.gear-6');
  let $gear7 = $('.gear-7');
  let $gear4 = $('.gear-4');
  let $gear5 = $('.gear-5');
  let $win = $(window);

  $win.on('scroll', function() {
    let top = $win.scrollTop();
    let rotation = top / 20;
    $gear.css('transform', 'rotate(' + rotation + 'deg)')
  });

  $win.on('scroll', function() {
    let top = $win.scrollTop();
    let rotation = top / 10;
    $gear2.css('transform', 'rotate(' + rotation + 'deg)')
  });

  $win.on('scroll', function() {
    let top = $win.scrollTop();
    let rotation = top / 10;
    $gear3.css('transform', 'rotate(' + rotation + 'deg)')
  });

  $win.on('scroll', function() {
    let top = $win.scrollTop();
    let rotation = top / 10;
    $gear6.css('transform', 'rotate(' + rotation + 'deg)')
  });

  $win.on('scroll', function() {
    let top = $win.scrollTop();
    let rotation = top / 10;
    $gear7.css('transform', 'rotate(' + rotation + 'deg)')
  });

  $win.on('scroll', function() {
    let top = $win.scrollTop();
    let rotation = top / -10;
    $gear4.css('transform', 'rotate(' + rotation + 'deg)')
  });

  $win.on('scroll', function() {
    let top = $win.scrollTop();
    let rotation = top / -10;
    $gear5.css('transform', 'rotate(' + rotation + 'deg)')
  });
  

});
