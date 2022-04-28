/*
  Inicia os componentes do materialize x)
*/

// Sidenav
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {
    draggable: true
  });
});

// Slideshow
document.addEventListener('DOMContentLoaded', function() {
  
  // selectors
  var carousels = [
    document.querySelectorAll('#test-carousel')
  ];

  // instâncias
  M.Carousel.init(carousels[0][0], {
    padding: 0,
    shift: 20,
    numVisible: 3,
    indicators: true,
    dist: 0,
  });

  // set autoplay
  setInterval(function() {
    M.Carousel.getInstance(carousels[0][0]).next();
  }, 4500);
});

// Portifólio
document.addEventListener('DOMContentLoaded', function() {
  console.log('loaded');
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems, {
    inDuration: 275
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    hoverEnabled: false
  });
});