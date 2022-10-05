// SCROLL TO TOP

// Get the button:
let mybutton = document.getElementById("myBtn");

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

// var r=document.querySelector(':root')

// function myFunction_get() {
//   // Get the styles (properties and values) for the root
//   var rs = getComputedStyle(r);
//   // Alert the value of the --blue variable
//   alert("The value of --blue is: " + rs.getPropertyValue('--blue'));
// }

// // Create a function for setting a variable value
// function myFunction_set() {
//   // Set the value of variable --blue to another value (in this case "lightblue")
//   r.style.setProperty('--blue', 'purple');
// }

// document.getElementById('change').onclick = changeColor;   

//     function changeColor() {
//         document.body.style.r = "purple";
//         return false;
//     }   

var color = document.getElementById("colorBtn");
var r = document.querySelector(':root')

color.addEventListener('click',() => {
  r.style.setProperty('--blue', 'purple')
} )