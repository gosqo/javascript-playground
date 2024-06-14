function tabsHandler(index, argument) {
    return function tabClickEvent(event) {
        // 바깥 함수인 tabsHandler 의 index, argument 인자 접근 가능.
        console.log(index); // 탭을 클릭할 때 마다 해당 탭의 index 값을 표시
        console.log(argument); // 탭을 클릭할 때 마다 해당 탭의 argument 값을 표시
        console.log(event); // event 전달 됨.

        return index;
    };
}

const tabs = document.querySelectorAll(".tab")
const argument = 'Hello.';
let i;

for (i = 0; i < tabs.length; i += 1) {
    tabs[i].onclick = tabsHandler(i, argument);
}

// https://joshua1988.github.io/web-development/javascript/function-expressions-vs-declarations/
