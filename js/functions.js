window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-top").style.display = "block";
  } else {
    document.getElementById("back-top").style.display = "none";
  }
}


function topFunction() {
  document.body.scrollIntoView({behavior: 'smooth', block: 'start'});
}

function menuMobile() {
  var x = document.getElementById("menu-items");
  if (x.className === "menu-items") {
    x.className += " responsive";
  } else {
    x.className = "menu-items";
  }
}
