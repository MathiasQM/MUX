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
    rootMargin: "600px"
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