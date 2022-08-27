console.log("Welcome to my portfolio!😸👋🏼\n*This is the latest version of my self-coded website.\nFor my main website, please visit arcidiaconodesign.com")


function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
