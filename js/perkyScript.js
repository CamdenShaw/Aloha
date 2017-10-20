var windowW = window.innerWidth;

$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  cellSelector: '.carousel-cell',
  prevNextButtons: false,
  autoPlay: true,
  groupCells: 1
});

if (windowW === 600) {
  $('.main-carousel').flickity({
    groupCells: 2,
    autoPlay: true,
  })
}
else if (windowW===1240) {
  $('.main-carousel').flickity({
    groupCells: 4,
    autoPlay: true,
  })
}

  $("a").on('click', function(event) {

    if (this.hash !== ""){
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });

function validateForm() {
  var eMail = document.forms["newsletter"]["email"].value;
  var at = eMail.indexOf("@");
  var dot = eMail.lastIndexOf(".");
  if (at<1 || dot<at+2 || dot+2>=eMail.length) {
      alert("Not a valid e-mail address");
      return false;
  }
  else alert('Thank you for subscribing!');
}

// $(function() {
//    $("a[href^='#']").not("a[href='#']").click(function() {
//       $("#"+$(this).attr("href").slice(1)+"").focus();
//    });
// });
  
$('.submit').on('click', function(){
  validateForm();
});

$(document).ready(main);