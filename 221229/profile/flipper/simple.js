// color flipper 내용
const colors = ["green", "red", "rgba(133,122,200)","#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    // get random number between 0 - 3 colors[n]
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
/* 
querySelector()와 querySelectorAll() 의 차이

* querySelector()
    : 특정 name, id, class를 제한하지 않고 css 선택자를 사용하여 요소를 찾음
    : 같은 id, class일 경우 스크립트 최상단 요소만 로직에 포함.

* querySelectorAll()
    : querySelector()와 사용법 동일.
    : 선택자를 선택하여 배열과 비슷한 객체인 nodeList 반환

*/