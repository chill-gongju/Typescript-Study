// 함수 타입 정의

// 함수를 설명하는 방법
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 설명
function func(a: number, b: number) {
  return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a: number, b: number) => a + b;

// 함수의 매개변수
function introduce(name = "이정환", age: number, tall?: number) {
  console.log(`name: ${name}`);
  if (typeof tall === "number") {
    console.log(`tall: ${tall + 10}`);
  }
}

introduce("meteorqz6", 25, 163);

introduce("meteorqz6", 25);

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((num) => (sum += num));
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15
