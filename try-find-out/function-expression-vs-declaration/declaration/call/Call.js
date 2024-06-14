function tabClickEvent(event, index) {
    // 호출, 이벤트 등록 안 됨.
    console.log(event); // event undefined
    console.log(index); // for 문 돌면서 해당 i 출력.

    return index;
};

const tabs = document.querySelectorAll(".tab")
let i;

for (i = 0; i < tabs.length; i += 1) {
    // 이벤트 할당이 아니라 즉시 실행.
    tabs[i].onclick = tabClickEvent(event, i); // for 돌면서 즉시 실행되고 이벤트 전달 불가.
}
