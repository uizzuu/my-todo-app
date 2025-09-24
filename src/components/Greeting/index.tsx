import type { GreetingProps } from "@/types/user";
import React from "react";

function Greeting({ user, age }:GreetingProps) {
  return (
    <div>
      <h2>
        안녕하세요, {user.name}입니다.<br/>
        {age && <span>나이는 {age} 입니다.</span>}
      </h2>
    </div>
  );
}

// Greeting 내부의 props가 바뀌어야 재랜더링 됨.
export default React.memo(Greeting);
