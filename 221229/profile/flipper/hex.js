const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    let hexColor = '#';

    for(let i=0; i<6;i++) {
        hexColor += hex[getRandomNumber()]
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

/*
Math
    .floor()    소수점 이하 버림
    .ceil()     소수점 이하 올림
    .round()    소수점 이라 반올림


addEventListener
    특정 id, class, tag 등의 element에 event를 등록할 때에 사용.

    자주 사용하는 이벤트
     @ 마우스 event              
     - click            : 마우스 버튼 클릭
     - dbclick          : 마우스 더블 클릭
     - mouseover        : HTML element 위에 커서를 올릴 때
     - mouseout         : HTML element에서 커서가 벗어날 때
     - mouseup          : element를 눌렀다가 떼었을 때
     - mousedown        : element를 눌렀을 때
     - mousemove        : 마우스 커서가 움직일 때마다 
     - focus            : HTML element에 포커스가 갔을 때
     - blur             : HTML element가 포커스에서 벗어났을 때
     
    ※ mouseup/down 과 click 의 차이 (예시)
     - (db)click        : 실행
     - mousedown        : icon drag
     - mouseup          : drag한 아이콘 이동

     @ 키보드 event
     - keypress         : 키가 눌렸을 때, 누르는 동안 계속 
     - keydown          : 키가 눌렸을 때, 눌렀을때 1번만 (ctrl, alt, shift)
     - keyup            : 키에서 손을 떼었을 때

     @ browser event
     - load             : 웹페이지에서 파일 및 스크립트 다운로드가 완료되었을 때
     - resize           : 브라우저 창의 크기를 변경할 때
     - scroll           : 마우스 wheel, 키보드 방향키로 브라우저 창을 스크롤할 때
     - unload           : link click > page landing or 브라우저 창/탭 close 시 
     - change           : form field의 상태가 변경되었을 때(radio,check box)

*/