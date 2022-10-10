// SCROLL TO TOP

// Get the button:
let mybutton = document.getElementById("scroolToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0;
}


// CHANGE COLOR THEME

var r = document.querySelector(':root')

  function changeColor(color){
    r.style.setProperty('--blue',color);

    // change color button
    document.querySelectorAll('span').forEach(function
      (item){
      item.classList.remove('active');
      })
    event.target.classList.add('active');
  }

  // TEST MOVE BLOCK

  // function moveBlock() {
  //   var b = document.getElementsByClassName("blocBtn");
  //   if(moveBlock() === active) {
  //     b.style.left=-100;
  //   }
  // }