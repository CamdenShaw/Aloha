console.log('Hello!  Do I exist?');

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

 $(document).ready(function(){
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
});

$(document).ready(function(){
  var checkEmail = $('.email');
  function myFunction() {
    if (email.checkValidity == false){
      alert('not a valid email');
    }
    else {
      alert('Thank you for Subscribing');
    }
  }
});