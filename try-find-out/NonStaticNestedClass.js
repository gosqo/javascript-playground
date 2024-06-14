class Outer {
    a;

    constructor(a) {
        this.a = a;
        console.log(`Outer instantiated with a:`, a)
    }

    logA() {
        console.log('Outer(this).a:', this.a);
    }

    Inner = class {
        a = 2;

        constructor(a) {
            this.a = a;
            console.log(`Inner instantiated with a:`, a)
        }

        logInnerA() {
            console.log('Inner(this).a:', this.a);
        }

        logOuterA() {
            console.log('Outer.a from instance of Inner:', outer.a);
        }

        callOuterMethod() {
            console.log(`\ncall Outer.logA() from instance of Inner`);
            outer.logA();
        }

        logFuncs() {
            const logVariableFunc = function () { // 선언 후 호출 가능.
                console.log("\nhello I\'m logVariableFunc.");
                // console.log(a) // function 내부에서는 클래스 필드, 메서드에 접근할 수 없다.
            }

            logVariableFunc(); // 실행.
            logNamedFunc();

            function logNamedFunc() { // 선언이 호출보다 뒤에 있어도 사용 가능.
                console.log('\nHello I\'m logNamedFunc.');
            }
        }
    }
}

const outer = new Outer(1);
const outer2 = new Outer(4);
const inner = new outer.Inner(2);

outer.logA();
inner.logInnerA();
inner.logOuterA();
inner.callOuterMethod();
inner.logFuncs();

// console output below.

// Outer instantiated with a: 1
// Outer instantiated with a: 4
// Inner instantiated with a: 2
// Outer(this).a: 1
// Inner(this).a: 2
// Outer.a from instance of Inner: 1

// call Outer.logA() from instance of Inner
// Outer(this).a: 1

// hello I'm logVariableFunc.

// Hello I'm logNamedFunc.
