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

// Event titel scroll effekt

var titel1 = document.querySelector(".event-titel");
var titel2 = document.querySelector(".event-titel-event");

window.onscroll = () => {
    var pos = window.scrollY - 1500;
    titel1.style.right = pos * 0.04 + 'px'
    titel2.style.left = pos * 0.07 + 'px'
}



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
 var distFromTop3 = document.querySelector(".event-sektion").offsetTop;

 window.addEventListener("scroll", function() {
     var scroll = this.scrollY;
     if (scroll > distFromTop && scroll < distFromTop2) {
         document.getElementById("mux-logo").style.filter = "invert(100%)";
         document.querySelector(".frivillig-btn").style.color = "black";
         document.querySelector(".frivillig-btn").style.border = "3px solid black";
         document.querySelector(".span").classList.add('black');
         document.querySelector(".span").style.backgroundColor = "black";
     } else if (scroll > distFromTop2 && scroll < distFromTop3) {
        document.getElementById("mux-logo").style.filter = "invert(0%)";
        document.querySelector(".frivillig-btn").style.color = "white";
        document.querySelector(".frivillig-btn").style.border = "3px solid white";
        document.querySelector(".span").classList.remove('black');
        document.querySelector(".span").style.backgroundColor = "white";
     } else if (scroll > distFromTop3){
        document.getElementById("mux-logo").style.filter = "invert(100%)";
        document.querySelector(".frivillig-btn").style.color = "black";
        document.querySelector(".frivillig-btn").style.border = "3px solid black";
        document.querySelector(".span").classList.add('black');
        document.querySelector(".span").style.backgroundColor = "black";
     } else {
        document.getElementById("mux-logo").style.filter = "invert(0%)";
        document.querySelector(".frivillig-btn").style.color = "white";
        document.querySelector(".frivillig-btn").style.border = "3px solid white";
        document.querySelector(".span").classList.remove('black');
        document.querySelector(".span").style.backgroundColor = "white";
     }
 })  

