$( document ).ready(function() {
    console.log( "ready!" );
<<<<<<< HEAD
intersectFunc();

=======
    console.log("BASSE WAS HERE");
    move();
    move2();
>>>>>>> origin/master
});

var size = $("#ball1").size();

// Move the element with id 'dragBox' to follow the cursor,
// with the cursor in the middle
$('#ball1')
  .css({
    left: pointerLeft - (size.width/2.0),
    top: pointerTop - (size.height/2.0)
  })
  .html(coordinates);

var counter = 0;

var intersecting = $(".ballFrame1").findIntersecting(".ballFrame2");

var isIntersecting = $('.ballFrame1').intersects('.ballFrame2');

function intersectFunc(){
if (isIntersecting){
  counter = counter + 10;
  $("#ball1").css("background-color", "blue");
  console.log(counter);
  console.log(isIntersecting);
}
}
function move2(){

$('#object2').animate({top: '40%'});
$('#object2').animate({top: '10%'});
$('#object2').animate({left: '60%'});
$('#object2').animate({left: '20%', top: '30%'});
$('#object2').animate({top: '80%'});
$('#object2').animate({left: '50%'}, move2);


}
