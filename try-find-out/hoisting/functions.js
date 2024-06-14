// helloVong(); // TypeError: helloVong is not a function
// arrowFunc(); // TypeError: arrowFunc is not a function

console.log(helloVong); // undefined
console.log(arrowFunc); // undefined

var helloVong = function () {
    console.log('Hello Vong.');
}

var arrowFunc = () => {
    console.log('Hello Arrow.');
}

helloVong(); // Hello Vong.
arrowFunc();

// console.log(helloVongLet); // ReferenceError: Cannot access 'helloVongLet' before initialization
// console.log(arrowFuncLet); // ReferenceError: Cannot access 'arrowFuncLet' before initialization

let helloVongLet = function () {
    console.log('Hello Vong let.');
}

let arrowFuncLet = () => {
    console.log('Hello Arrow let.');
}

helloVongLet(); // Hello Vong let.
arrowFuncLet(); // Hello Arrow let.


// console.log(helloVongConst); // ReferenceError: Cannot access 'helloVongLet' before initialization
// console.log(arrowFuncConst); // ReferenceError: Cannot access 'arrowFuncLet' before initialization

const helloVongConst = function () {
    console.log('Hello Vong const.');
}

const arrowFuncConst = () => {
    console.log('Hello Arrow const.');
}

helloVongConst(); // Hello Vong let.
arrowFuncConst(); // Hello Arrow let.


// 함수는 함수로 호이스트. 엔진이 이 라인에 닿으면 해당 함수를 찾아서 실행.
helloWorld(); // Hello World function declare.

function helloWorld() {
    console.log('Hello World function declare.');
}