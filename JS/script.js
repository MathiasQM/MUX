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

var distFromTop = document.querySelector(".om-mux").offsetTop;
var distFromTop2 = document.querySelector(".galleri").offsetTop;

window.addEventListener("scroll", function(event) {
    var scroll = this.scrollY;
    if (distFromTop < scroll && scroll < distFromTop2) {
        document.getElementById("mux-logo").style.filter = "invert(100%)";
    }  else if (distFromTop2 > distFromTop) {
         document.getElementById("mux-logo").style.filter = "invert(0%)";
      } 
//      else if (scroll > 1900 && scroll < 2980) {
//         console.log(scroll)
//          document.getElementById("mux-logo").style.filter = "invert(0%)";
//      } else if (scroll > 2980) {
//          document.getElementById("mux-logo").style.filter = "invert(100%)";
//      }
  });