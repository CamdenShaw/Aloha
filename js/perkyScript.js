// //testing to see if javascript is working
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

// console.log('Hello!  Do I exist?');

// //grabbing window width
// var windowW = window.innerWidth;

// //using flickity to modify carousel
// $('.main-carousel').flickity({
//   // options
//   cellAlign: 'left',
//   contain: true,
//   cellSelector: '.carousel-cell',
//   prevNextButtons: false,
//   autoPlay: true,
//   groupCells: 1
// });

// //changing flickity settings at window width of 600 pixels
// if (windowW >= 600) {
//   $('.main-carousel').flickity({
//     groupCells: 2,
//     autoPlay: true,
//   })
// }

// //changing flickity settings at window width of 1240 pixels
// else if (windowW >=1240) {
//   $('.main-carousel').flickity({
//     groupCells: 4,
//     autoPlay: true,
//   })
// }

// //creating an 'onclick' function for smooth scrolling
//  $(document).ready(function(){
//   $("a").on('click', function(event) {
// //if the word clicked doesn't equal nothing, do things
//     if (this.hash !== ""){
// //don't do the default things
//       event.preventDefault();
// //create a variable by grabbing the ID from the element clicked on
//       var hash = this.hash;
// //do these things => animate the screen
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){
//         window.location.hash = hash;
//       });
//     } 
//   });
// });

//creating a function that reads the email input and creates alerts based on email correctness
  function validateForm() {
//creating variables for the inputted email, the @ symbol inside the email and the period inside the email
    var eMail = document.forms["newsletter"]["email"].value;
    var at = eMail.indexOf("@");
    var dot = eMail.lastIndexOf(".");
//creating an if/else statement saying, 'if @ is at a position less than one, or the dot is positioned at a position less than @'s postion+2 or if the period's positon+2 is greater than or equal too the end of the email, then the text entered is not an email address, so creat an alert for it.  or else, if none of those statements are true, than it is an email address and congratulate them for knowing what an email address is!
    if (at<1 || dot<at+2 || dot+2>=eMail.length) {
        alert("Not a valid e-mail address");
        return false;
    }
    else alert('Thank you for subscribing!');
}

//execute order 66 . . . but before you do validate the form to make sure that is what you want to do.
$('.submit').on('click', function(){
  validateForm();
});

//some tag that makes jquery work for some reason.
$(document).ready(main);