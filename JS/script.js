document.querySelector('video').playbackRate = 1;

const animation = document.querySelectorAll('.animation') 

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, {
    threshold: 0.8,
})

animation.forEach(animation => {
    observer.observe(animation)
})

// Animate images

const floatup = document.querySelectorAll('.floatup-one') 
const floatup2 = document.querySelectorAll('.floatup-two')
const floatup3 = document.querySelectorAll('.floatup-three') 
const floatup4 = document.querySelectorAll('.floatup-four')

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, {
    threshold: 0.0,
    rootMargin: "170px"
})

floatup.forEach(floatup => {
    observer2.observe(floatup)
})

floatup2.forEach(floatup2 => {
    observer2.observe(floatup2)
}) 

floatup3.forEach(floatup3 => {
    observer2.observe(floatup3)
})

floatup4.forEach(floatup4 => {
    observer2.observe(floatup4)
})


//designet af

const designetaf = document.querySelector('.designet-af-class').addEventListener('click', function() {
    let divElement = document.querySelector(".card");
    divElement.classList.remove("gem-popup");
});

const okay = document.querySelector('.button-primary').addEventListener('click', function() {
    let divElement = document.querySelector(".card");
    divElement.classList.add("gem-popup");
});


// Invert logo to make it visible in each sektion

var distFromTop = document.querySelector(".om-mux").offsetTop + 100;
var distFromTop2 = document.querySelector(".galleri").offsetTop + 450;
var distFromTop3 = document.querySelector(".om-mux").offsetTop;
var distFromTop4 = document.querySelector(".galleri").offsetTop;

function myFunction(x) {
    if (x.matches) { // If media query matches
        window.addEventListener("scroll", function(event) {
            var scroll = this.scrollY;
            if (scroll < distFromTop3) {
                document.getElementById("mux-logo").style.filter = "invert(0%)";
                document.querySelector(".frivillig-btn").style.color = "#fff";
                document.querySelector(".frivillig-btn").style.border = "3px solid #fff";
               //  document.querySelector("span").style.backgroundColor = "#000";
               //  document.documentElement.style.setProperty('--color', "#000")
       
            } else if (scroll > distFromTop3&& scroll < distFromTop4) {
               document.getElementById("mux-logo").style.filter = "invert(100%)";
               document.querySelector(".frivillig-btn").style.color = "#000000";
               document.querySelector(".frivillig-btn").style.border = "3px solid #000";
            } else if (distFromTop4 < scroll) {
               document.getElementById("mux-logo").style.filter = "invert(0%)";
               document.querySelector(".frivillig-btn").style.color = "#fff";
               document.querySelector(".frivillig-btn").style.border = "3px solid #fff";
            }
          });
          
    } else {
        window.addEventListener("scroll", function(event) {
            var scroll = this.scrollY;
            if (scroll < distFromTop) {
                document.getElementById("mux-logo").style.filter = "invert(0%)";
                document.querySelector(".frivillig-btn").style.color = "#fff";
                document.querySelector(".frivillig-btn").style.border = "3px solid #fff";
               //  document.querySelector("span").style.backgroundColor = "#000";
               //  document.documentElement.style.setProperty('--color', "#000")
       
            } else if (scroll > distFromTop && scroll < distFromTop2) {
               document.getElementById("mux-logo").style.filter = "invert(100%)";
               document.querySelector(".frivillig-btn").style.color = "#000000";
               document.querySelector(".frivillig-btn").style.border = "3px solid #000";
            } else if (distFromTop2 < scroll) {
               document.getElementById("mux-logo").style.filter = "invert(0%)";
               document.querySelector(".frivillig-btn").style.color = "#fff";
               document.querySelector(".frivillig-btn").style.border = "3px solid #fff";
            }
          });
       
           }
  }

    var x = window.matchMedia("(max-width: 800px)")
    myFunction(x) // Call listener function at run time
    x.addEventListener('change', myFunction) // Attach listener function on state changes

//  window.addEventListener("scroll", function(event) {
//      var scroll = this.scrollY;
//      if (scroll < distFromTop) {
//          document.getElementById("mux-logo").style.filter = "invert(0%)";
//          document.querySelector(".frivillig-btn").style.color = "#fff";
//          document.querySelector(".frivillig-btn").style.border = "3px solid #fff";
//         //  document.querySelector("span").style.backgroundColor = "#000";
//         //  document.documentElement.style.setProperty('--color', "#000")

//      } else if (scroll > distFromTop && scroll < distFromTop2) {
//         document.getElementById("mux-logo").style.filter = "invert(100%)";
//         document.querySelector(".frivillig-btn").style.color = "#000000";
//         document.querySelector(".frivillig-btn").style.border = "3px solid #000";
//      } else if (distFromTop2 < scroll) {
//         document.getElementById("mux-logo").style.filter = "invert(0%)";
//         document.querySelector(".frivillig-btn").style.color = "#fff";
//         document.querySelector(".frivillig-btn").style.border = "3px solid #fff";
//      }
//    });
