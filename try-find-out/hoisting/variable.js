console.log(a, 'before declare and assign line. var a'); // undefined

var a;

console.log(a, 'after declare and assign line. var a'); // undefined

a = 20;
console.log(a, 'after assignment to var a.');

var a = 30; // undefined, 선언부만 호이스트. 할당은 엔진이 해당 라인에 닿을 때.  
console.log(a, 'after re-declared and assigned var a.'); // 30

// console.log(b); // ReferenceError: Cannot access 'b' before initialization

let b; // 선언만, 초기화(할당) 이전, undefined 상태.
console.log(b, 'after let declaration only. b'); // undefined, 접근은 가능

b = 60;
console.log(b, 'after assign let variable line. b = 60'); // 60

// const c; const 는 초기화도 선언과 함께 해줘야 함.

// console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 90; // 할당 전에 참조 시 에러. 호이스트는 되나 undefined 아님.
console.log(c, 'after assign line. const c = 90'); // 90
