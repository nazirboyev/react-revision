import { useState, useEffect } from "react";

function TodoApp() {
  const [todoText, setTodoText] = useState("");
  const [error, setError] = useState("");
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [dark, setDark] = useState(false);

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const showError = (msg) => {
    setError(msg);
    setTimeout(() => setError(""), 2000);
  };

  const onAdd = () => {
    const text = todoText.trim();

    if (!text) return showError("Bo‘sh todo qo‘shib bo‘lmaydi!");

    const duplicate = todos.some(
      (t) => t.title.toLowerCase() === text.toLowerCase() && t.id !== editId
    );

    if (duplicate) return showError("Bu todo mavjud!");

    if (editId) {
      setTodos(
        todos.map((t) =>
          t.id === editId ? { ...t, title: text } : t
        )
      );
      setEditId(null);
    } else {
      setTodos([
        ...todos,
        { id: Date.now(), title: text, completed: false },
      ]);
    }

    setTodoText("");
  };

  const onDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggle = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const onEdit = (todo) => {
    setTodoText(todo.title);
    setEditId(todo.id);
  };

  const filteredTodos = todos
    .filter((t) =>
      t.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((t) => {
      if (filter === "active") return !t.completed;
      if (filter === "done") return t.completed;
      return true;
    });

  return (
    <div className={dark ? "dark app" : "app"}>
      <h1>🔥 Todo Pro</h1>

      {/* DARK MODE */}
      <button onClick={() => setDark(!dark)}>
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>

      {/* SEARCH */}
      <input
        className="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* INPUT */}
      <div className="input">
        <input
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onAdd()}
          placeholder="Write todo..."
        />
        <button onClick={onAdd}>
          {editId ? "Save" : "Add"}
        </button>
      </div>

      {/* FILTER */}
      <div className="filter-btns">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("done")}>Done</button>
      </div>

      {/* ERROR */}
      {error && <div className="alert">{error}</div>}

      {/* TODOS */}
      <div className="Board">
        {filteredTodos.map((t) => (
          <div key={t.id} className="BoardBox">
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggle(t.id)}
            />

            <h3 className={t.completed ? "completed" : ""}>
              {t.title}
            </h3>

            <button className="edit-btn" onClick={() => onEdit(t)}>
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => onDelete(t.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;