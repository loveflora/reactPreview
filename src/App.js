import React, { useState } from "react";
import "./App.css";
import TodoBoard from "./components/TodoBoard";
// 수입

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  // 추가된 할일 아이템 여러개를 모아둘 곳 ==> 배열 type
  const addItem = () => {
    // console.log("im saywhat!", inputValue);
    setTodoList([...todoList, inputValue]);
    // 기존의 아이템은 유지하되, 뒤에 새로운 inputValue 추가 (얕은 복사)
  };

  return (
    <main>
      <input
        value={inputValue}
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={addItem}>추가</button>
      {/* button click 할 때마다 addItem 함수 호출하기 */}

      <TodoBoard todoList={todoList} />
      {/* 수입 import TodoBoard 컴포넌트 */}

      {/* 어떤 값을 전달하고 싶을 때 : props 사용 */}
      {/* todoList 값을 TodoBoard에 props로 전달 */}
    </main>
  );
}

export default App;
