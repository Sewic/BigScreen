$(document).ready(function() {
    console.log("ready!");
});

function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;

    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      $('#div1').css({backgroundColor: 'rgb(212, 128, 146)'});
      $('#div2').css({backgroundColor: 'rgb(124, 180, 194)'});
      $('.text').css({fontSize: '50px', color:'black',top:'25%'})
      $('.text').text("wait until the ballz collide");
      $('body').css({backgroundColor:'rgba(75, 22, 154, 0.15)'})
    } else {
      $('body').css({backgroundColor:'rgba(159, 76, 114, 0.71)'})
      $('#div1').css({backgroundColor: 'rgb(235, 204, 104)'});
      $('#div2').css({backgroundColor: 'rgb(136, 200, 113)'});
      $('.text').css({fontSize: '300px', color:'red', top:'0%'})
      $('.text').text("collide!");
    }
}

window.setInterval(function() {
    $('.text').text(collision($('#div1'), $('#div2')));
});
