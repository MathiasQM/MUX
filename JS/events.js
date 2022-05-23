//designet af

const designetaf = document.querySelector('.designet-af-class').addEventListener('click', function() {
    let divElement = document.querySelector(".card");
    divElement.classList.remove("gem-popup");
});

const okay = document.querySelector('.button-primary').addEventListener('click', function() {
    let divElement = document.querySelector(".card");
    divElement.classList.add("gem-popup");
});