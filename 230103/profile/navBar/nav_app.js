const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
//const navToggle = document.querySelector(".show-links");

navToggle.addEventListener('click', function() {
    //console.log(links.classList);
    //console.log(links.classList.contains("random"));    // false
    //console.log(links.classList.contains("links"));     // true

    // if(links.classList.contains("show-links")) {
    //     links.classList.remove("show-links");
    // }

    // else{
    //     links.classList.add("show-links");
    // }
    links.classList.toggle("show-links");
});


