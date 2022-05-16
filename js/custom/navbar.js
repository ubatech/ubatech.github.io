// contrai e expande o navbar
function navbar_toggler() {
  var navbar = [
    document.getElementById("nav-links"),
  ];
  if( matches(navbar[0], ['nav-links']) ) {
    navbar[0].classList.add('nav-toggled');
  } else {
      navbar[0].classList.remove('nav-toggled');
  }
}

// checa se as classes coincidem
function matches(tag, className) {
  for(var i=0; i < tag.classList.length; i++) {
    if(tag.classList[i] === className[i]) {
      continue;
    } else { return 0; }
  } return 1;
}

// elementos para checar quando houver o scroll
var sections_tags = [
  ['fab-whats', 'nav-two', 'nav-one'],
  [200, 500, 500],
  [['fab-visible'], ['nav-solid', 'shadow'], ['nav-hidden']]
];

// sempre que a página ser scrolled chamar a função onScroll
window.onscroll = function() {
  onScroll(
    sections_tags[0],
    sections_tags[1],
    sections_tags[2],
  );
};

// função que checa o scroll do elemento
function onScroll(tags, sizes, effects) {
  for(var i=0; i < tags.length; i++) {
    if(document.documentElement.scrollTop > sizes[i]) {
      effects[i].forEach(function(e) {
        document.getElementById(tags[i]).classList.add(e);
      });
    } else {
      effects[i].forEach(function(e) {
        document.getElementById(tags[i]).classList.remove(e);
      });
    }
  }
}