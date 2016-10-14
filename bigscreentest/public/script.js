var counter = 0;

$( document ).ready(function() {
    console.log( "ready!" );
    console.log("BASSE WAS HERE");
    move();
});


function move(){

$('#object').animate({top: '10%'});
$('#object').animate({top: '50%'});
$('#object').animate({left: '10%'});
$('#object').animate({left: '70%', top: '80%'});
$('#object').animate({top: '50%'});
$('#object').animate({left: '50%'}, move);
counter++;
console.log("counter: " + counter);

}
