// expande o texto dos objetivos
function text_toggler() {
  var text = document.getElementById("about-descQ");
  if( matches(text, ['toggled']) ) {
    text.classList.remove('toggled');
    console.log('no toggled');
  } else {
    text.classList.add('toggled');
    console.log('toggled');
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