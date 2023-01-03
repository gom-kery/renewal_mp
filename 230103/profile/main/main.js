// tabs 내용
const about = document.querySelector(".about");
const links = document.querySelector(".links");
const navToggle = document.querySelector(".nav-toggle");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");



about.addEventListener('click', function(e){
    // F12 > 콘솔로그에 click 한 이벤트 로그가 표시됨
    //console.log(e.target.dataset.id);
    const id = e.target.dataset.id;

    if(id) {
        // remove active from other buttons
        btns.forEach(function(btn){
            btn.classList.remove("active");            
        });
        e.target.classList.add("active");
        // hide other articles
        articles.forEach(function(article){
            article.classList.remove("active")
        })
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});


navToggle.addEventListener('click', function() {

    links.classList.toggle("show-links");
});


