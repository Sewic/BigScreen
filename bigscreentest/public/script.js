var counter = 0;

$( document ).ready(function() {
    console.log( "ready!" );
    console.log("BASSE WAS HERE");
    move();
    move2();
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
function move2(){

$('#object2').animate({top: '40%'});
$('#object2').animate({top: '10%'});
$('#object2').animate({left: '60%'});
$('#object2').animate({left: '20%', top: '30%'});
$('#object2').animate({top: '80%'});
$('#object2').animate({left: '50%'}, move2);


}
