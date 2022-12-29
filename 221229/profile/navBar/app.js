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


/*
Element - classList         : DOMTokenList 객체로 element의 class 속성을 보여줌.
    @ Method
     - add(string)          : 지정한 class 추가, 만약 존재한다면 무시.
     - remove(string)       : 지정한 class 삭제
     - contain(string)      : 지정한 class가 존재하는 지 확인
     - replace(old, new)    : old class를 new class 로 대체
     - item(number)         : index value를 활용하여 class value를 return
     - toggle(string)       : class 유무를 확인 후 있으면 add, 없으면 remove를 자동으로 적용

DOMTokenList?               
    : DOM 자료구조 인터페이스의 하위 트리.
    : 공백으로 구분된 문자열로 표현된 데이터를 정렬하여
      토큰 집합으로 만들어 집합을 조작하기 위한 메소드를 제공하는 유사배열 인터페이스.

    * 배열 (array)          : [1,2,3] 과 같이 []로 감싸져있는 데이터
    * 유사배열 (node, els)  : [] 로 감싸져있지만 배열이 아닌 것
    * Array.isArray()로 확인해보면 결과로 구분 가능
        배열    
*/