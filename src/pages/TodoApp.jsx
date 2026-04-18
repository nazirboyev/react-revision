import { Link } from "react-router";

function TodoApp() {
  return (
    <>
      <h1>2. TodoApp</h1>
      <div className="head">
          <input className="input" type="text" placeholder="Add a task" />
          <button className="button">Add</button>
      </div>
      <div className="body">
        <div className="boxes">
          <div className="box">
            <h3>Text</h3>
            <button className="box-btn">Delete</button>
          </div>
          <div className="box">
            <h3>Text</h3>
            <button className="box-btn">Delete</button>
          </div>
          <div className="box">
            <h3>Text</h3>
            <button className="box-btn">Delete</button>
          </div>
          <div className="box">
            <h3>Text</h3>
            <button className="box-btn">Delete</button>
          </div>
          <div className="box">
            <h3>Text</h3>
            <button className="box-btn">Delete</button>
          </div>
          <div className="box">
            <h3>Text</h3>
            <button className="box-btn">Delete</button>
          </div>
        </div>
      </div>

    </>
  );
}

export default TodoApp;