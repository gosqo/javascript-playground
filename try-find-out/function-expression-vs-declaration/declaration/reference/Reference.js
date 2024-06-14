function tabClickEvent(event) {
    // 인자는 event 만 받아와짐
    console.log("event", event); // 탭을 클릭할 때마다 해당 탭 발생 event 표시
    
    // 전역 변수 i, 함수 인자로 넘겨주지 않았기 때문에
    console.log(i); // for 문 다 돌고 난 '3' 만 출력.

    return event;
};

const tabs = document.querySelectorAll(".tab")
let i;

for (i = 0; i < tabs.length; i += 1) {
    tabs[i].onclick = tabClickEvent; // 이벤트 할당 가능. 매개변수는 event 만 전달.
}
