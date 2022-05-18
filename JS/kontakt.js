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


var distFromTop5 = document.querySelector(".card-container").offsetTop - 150;

window.addEventListener("scroll", function() {
    var scroll = this.scrollY;
    if (scroll > distFromTop5) {
        document.getElementById("mux-logo").style.filter = "invert(100%)";
        document.querySelector(".frivillig-btn").style.color = "black";
        document.querySelector(".frivillig-btn").style.border = "3px solid black";
        document.querySelector(".span").classList.add('black');
        document.querySelector(".span").style.backgroundColor = "black";
    } else if (scroll < distFromTop5) {
        document.getElementById("mux-logo").style.filter = "invert(0%)";
        document.querySelector(".frivillig-btn").style.color = "white";
        document.querySelector(".frivillig-btn").style.border = "3px solid white";
        document.querySelector(".span").classList.remove('black');
        document.querySelector(".span").style.backgroundColor = "white";
    }
})  