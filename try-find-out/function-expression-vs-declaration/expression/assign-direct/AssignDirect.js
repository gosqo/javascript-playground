const tabs = document.querySelectorAll(".tab")
const argument = 'Hello.';
const tabsLength = tabs.length

for (let i = 0; i < tabsLength; i += 1) {
    tabs[i].onclick = function handleClick(event) {
        // event 전달 및 for 스코프 변수 i 접근 가능.
        console.log(i);
        console.log(event);
        console.log(argument);
    };
}

// https://joshua1988.github.io/web-development/javascript/function-expressions-vs-declarations/
