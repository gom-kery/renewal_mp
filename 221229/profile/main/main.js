// tabs 내용
const about = document.querySelector(".about");
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


/* 
querySelector()와 querySelectorAll() 의 차이

* querySelector()
    : 특정 name, id, class를 제한하지 않고 css 선택자를 사용하여 요소를 찾음
    : 같은 id, class일 경우 스크립트 최상단 요소만 로직에 포함.

* querySelectorAll()
    : querySelector()와 사용법 동일.
    : 선택자를 선택하여 배열과 비슷한 객체인 nodeList 반환

*/