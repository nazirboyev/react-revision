import { useState } from "react";
import { Link } from "react-router";

function TodoApp() {
  const [todoText, setTodoText] = useState("");

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to school",
    },
  ]);

  const onAddBtnClick = () => {
    console.log(todoText);

    let newTodo = {
      title: todoText,
      id: todos.length + 7,
    };

    setTodos([...todos, newTodo]);

    setTodoText("");
  };

  const onDeleteBtnClick = (id) => {
    console.log(`Delete ${id}`);

    let filteredTodos = todos.filter((t) => t.id !== id);

    setTodos(filteredTodos);
  };

  return (
    <>
      <h1>2. TodoApp</h1>
      <div className="input">
        <input
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          type="text"
          placeholder="Add a task"
        />
        <button className="bnt-input" onClick={onAddBtnClick}>Add</button>
      </div>
      <div className="Board">
        {todos.map((t) => {
          return (
            <div key={t.id} className="BoardBox">
              <h1> {t.title} </h1>
              <button className="box-bnt" onClick={() => onDeleteBtnClick(t.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TodoApp;