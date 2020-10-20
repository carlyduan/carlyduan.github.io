$( document ).ready(function() {
    
// $( function() {
//    $( ".forder").draggable();
//  } );

 $( function() {
    $( ".pop").draggable();
  } );



// draggable
$('.start').click(function() {
  $('.manu').addClass('show');
});
$('.manu').click(function() {
  $('.manu').removeClass('show');
});
// poll
$('.f1').click(function() {
  $('.poll1').addClass('show');
});
$('.close1').click(function() {
  $('.poll1').removeClass('show');
});

//oj
$('.f2').click(function() {
  $('.oj').addClass('show');
});

$('.close2').click(function() {
  $('.oj').removeClass('show');
});

//2

$('.f3').click(function() {
  $('.poll3').addClass('show');
});

$('.close3').click(function() {
  $('.poll3').removeClass('show');
});
//poll3
$('.f4').click(function() {
  $('.psy').addClass('show');
});

$('.close4').click(function() {
  $('.psy').removeClass('show');
});
//psy
$('.f5').click(function() {
  $('.poll4').addClass('show');
});

$('.close5').click(function() {
  $('.poll4').removeClass('show');
});
//poll4

$('.f6').click(function() {
  $('.yupp').addClass('show');
});

$('.close6').click(function() {
  $('.yupp').removeClass('show');
});
//yupp
$('.close7').click(function() {
  $('.new').addClass('show');
});

//$('h2').click(function() {
//  $('.new').removeClass('show');
//});

 });

