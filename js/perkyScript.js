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
// $(document).ready(function(){
//   // Add smooth scrolling to all links
//   $("a").on('click', function(event) {

//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){
   
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if
//   });
// });