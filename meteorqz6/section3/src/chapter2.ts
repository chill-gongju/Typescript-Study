// unknown 타입 - 전체 집합
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;
  // 다운 캐스팅 불가능
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

// never 타입 - 공집합
// 모든 타입의 서브 타입이다.
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // let never1: never = 10;
  // let never2: never = "string";
  // let never3: never = true;
}

// void 타입
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }
  let voidVar: void = undefined;
}

// any 타입 - 치트키
// 타입계층도를 무시한다.
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;

  undefinedVar = anyVar;

  // neverVar = anyVar;
}
