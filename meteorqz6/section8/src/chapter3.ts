// 맵드 타입 - 활용도가 높고, 실무에서 자주 쓴다.
interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
  // ... 기능
  return {
    id: 1,
    name: "이정환",
    age: 27,
  };
}

const user = fetchUser();
// user.id = 1; readonly라 수정 불가능

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: User) {
  // ... 수정하는 기능
}

// 수정하고자 하는 프로퍼티만 선택적으로
updateUser({
  id: 1,
  name: "이정환",
  age: 25,
});
