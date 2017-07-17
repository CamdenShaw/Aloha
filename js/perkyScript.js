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

// data-flickity='{ "cellSelector": ".carousel-cell", "prevNextButton": false, "groupCells": 80%, "autoPlay": true }'