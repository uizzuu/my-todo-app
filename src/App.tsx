import "./App.css";
import type { User } from "./types/user";
import Greeting from "./components/Greeting";

function App() {
  const jang: User = {
    id: 1,
    name: "장원영",
    email: "jang@ive.com",
    isActive: true,
  };

  // User를 값으로 갖는 배열 선언
  const ive: User[] = [
    {
      id: 1,
      name: "장원영",
      email: "jang@ive.com",
      isActive: true,
    },
    {
      id: 2,
      name: "안유진",
      email: "ahn@ive.com",
      isActive: false,
    },
  ];

  return (
    <div>
      <h1>User 정보</h1>
      <ul>
        <li>id : {jang.id}</li>
        <li>name : {jang.name}</li>
        <li>email : {jang.email}</li>
        <li>isActive : {jang.isActive ? "TRUE" : "FALSE"}</li>
      </ul>
      <hr />
      <h1>Ive Member</h1>
      {ive.map((m, _) => (
        <ul key={m.id}>
          <li>id : {m.id}</li>
          <li>name : {m.name}</li>
          <li>email : {m.email}</li>
          <li>isActive : {m.isActive ? "TRUE" : "FALSE"}</li>
        </ul>
      ))}
      <hr />
      <h1>컴포넌트 넣기</h1>
      <Greeting user={jang} age={20} />
    </div>
  );
}

export default App;
