console.log("Hello! Welcome to my portfolio! *This is the first version of my self-coded website. For my main website, please visit arcidiaconodesign.com")

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
