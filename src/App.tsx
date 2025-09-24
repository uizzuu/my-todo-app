import "./App.css";
import type { User } from "./types/user";
import {
  Greeting,
  LoginForm,
  TodoItem,
  TodoApp,
  UserProfile,
} from "./components";
import usePosts from "./hooks/usePosts";

function App() {
  const { posts, loading } = usePosts();

  const user: User = {
    name: '김개발',
    email: 'kim.dev@example.com',
  }

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
      <h1>사용자 프로필</h1>
      <UserProfile user={user} />
      <hr />
      <TodoApp />
      <hr />
      <h1>Posts ({posts.length})</h1>

      {/* 간단 목록 */}
      <ul style={{ lineHeight: 1.6 }}>
        {posts.slice(0, 10).map((p) => (
          <li key={p.id}>
            <strong>#{p.id}</strong> {p.title}
          </li>
        ))}
      </ul>

      {/* 첫 글 상세 미리보기 */}
      {posts[0] && (
        <section style={{ marginTop: 24 }}>
          <h2>첫 글 상세</h2>
          <h3>{posts[0].title}</h3>
          <p>{posts[0].body}</p>
          <small>by user {posts[0].userId}</small>
        </section>
      )}
      <hr />
      <h1>로그인</h1>
      <LoginForm />
      <hr />
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
