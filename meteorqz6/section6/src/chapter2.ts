// 접근 제어자: access modifier
// => public, private, protected
class Employee {
  // 필드

  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    // this.name;
    // 'name' 속성은 private이며 'Employee' 클래스 내에서만 액세스할 수 있습니다.
    this.age;
  }
}

const employee = new Employee("이정환", 27, "개발자");
// employee.name = "홍길동";
//'name' 속성은 private이며 'Employee' 클래스 내에서만 액세스할 수 있습니다.
// employee.age = 30;
// 'age' 속성은 보호된 속성이며 'Employee' 클래스 및 해당 하위 클래스 내에서만 액세스할 수 있습니다.
employee.position = "디자이너";

console.log(employee);
