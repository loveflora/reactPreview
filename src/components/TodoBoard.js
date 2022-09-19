// 컴포넌트 생성

import React from "react";
import TodoItem from "./TodoItem";
// 수입 - Todoitem이 어디에서 왔는지 ./ 같은 폴더에서 왔음
// {/* TodoItem 수입 - TodoBoard가 TodoItem 들고 있음 */}

function TodoBoard(props) {
  // props : 어떤 값을 전달하고 싶을 때
  // props 안에는 todoBoard 가 있음
  return (
    <div>
      <h1>Todo List</h1>
      {props.todoList.map((item) => (
        <TodoItem item={item} />
      ))}
      {/* html 에서 Js 쓰려면, { } 중괄호 열고 시작 */}
      {/* list 에 있는 item을 하나하나 꺼내서 todoList 에 쓸 것 ==> array함수 map ! 사용 */}
      {/* map : array에 있는 값을 하나하나 가져와서 item으로 반환 */}
      {/* 배열에 있는 내용을 보여주고 싶을 때, array methods 자주 사용함 */}
    </div>
  );
}

export default TodoBoard;
// 수출
