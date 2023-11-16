import React, { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithArrays() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [id, setId] = useState(1);
  const [title, setTitle] = useState("Go to work");
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    id: 1, title: "Learn NodeJS", due: "2021-09-09",
    description: "Create a NodeJS server with ExpressJS and various RESTful APIs", completed: false,
  }
  ); // {id: 1, title: "Go to work"

  const API_BASE = process.env.REACT_APP_API_BASE;
  const API = `${API_BASE}/a5/todos`;

  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodosPromise = () => {
    const promise = axios.get(API);
    promise.then((response) => {
      setTodos(response.data);
    });
  };

  const updateTodo = async () => {
    try {
      const response = await axios.put(
        `${API}/${todo.id}`, todo);
      setTodos(todos.map((t) => (
        t.id === todo.id ? todo : t)));
      setTodo({});
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };

  const fetchTodos = async () => {
    const response = await axios.get(`${API}/a5/todos`);
    setTodos(response.data);
  };

  const removeTodo = async (id) => {
    const response = await axios.get(`${API}/${id}/delete`);
    setTodos(response.data);
  };

  const deleteTodo = async (todo) => {
    try {
      const response = await axios.delete(
        `${API}/${todo.id}`);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };



  const fetchTodoById = async (id) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  }

  const updateTitle = async () => {
    const response = await axios.get(
      `${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };



  return (
    <div>
      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}

      <h1>Working with Arrays</h1>
      <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value
        })}
        className="form-control mb-2"
        type="number"
      />
      <textarea
        className="form-control mb-2"
        onChange={(e) => setTodo({
          ...todo,
          description: e.target.value
        })}
        value={todo.description} type="text"
      />
      <input
        className="form-control mb-2"
        onChange={(e) => setTodo({
          ...todo, due: e.target.value
        })}
        value={todo.due} type="date"
      />
      <label>
        <input
          className="mb-2 me-2"
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked
          })}
          value={todo.completed} type="checkbox"
        />
        Completed
      </label>
      <button onClick={postTodo}
        className="btn btn-warning mb-2 w-100">
        Post Todo
      </button>
      <button onClick={updateTodo}
        className="btn btn-success mb-2 w-100">
        Update Todo
      </button>

      <button onClick={postTodo}
        className="btn btn-primary mb-2 w-100">
        Create Todo
      </button>
      <button onClick={updateTitle}
        className="btn btn-success mb-2 w-100">
        Update Title
      </button>

      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id}
            className="list-group-item">
            <button
              onClick={() => fetchTodoById(todo.id)}
              className="btn btn-warning me-2 float-end" >
              Edit
            </button>

            <button
              onClick={() => deleteTodo(todo)}
              className="btn btn-danger float-end ms-2">
              Delete
            </button>

            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
          </li>
        ))}
      </ul>
      <h3>Updating an Item in an Array</h3>
      <input
        value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value
        })}
        className="form-control mb-2"
        type="text"
      />
      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary me-2 mb-2" >
        Update Title to {todo.title}
      </a>

      <input
        value={todo.description}
        onChange={(e) => setTodo({
          ...todo, description: e.target.value
        })}
        className="form-control mb-2"
        type="text"
      />
      <a
        href={`${API}/${todo.id}/description/${todo.description}`}
        className="btn btn-primary me-2 mb-2" >
        Update description to {todo.description}
      </a>
      <br />
      <input
        value={todo.completed}
        onChange={(e) => setTodo({
          ...todo, completed: !todo.completed
        })}
        checked={todo.completed}
        className="me-2 mb-2"
        type="checkbox"
      /> Completed
      <br />
      <a
        href={`${API}/${todo.id}/completed/${todo.completed}`}
        className="btn btn-primary me-2 mb-2" >
        Update completed
      </a>

      <h3>Deleting from an Array</h3>
      <a href={`${API}/${todo.id}/delete`}
        className="btn btn-primary me-2">
        Delete Todo with ID = {todo.id}
      </a>

      <h4>Creating new Items in an Array</h4>
      <a href={`${API}/create`}
        className="btn btn-primary me-2">
        Create Todo
      </a>

      <h3>Filtering Array Items</h3>
      <a href={`${API}/${todo.id}?completed=true`}
        className="btn btn-primary me-2" >
        Get Completed Todos
      </a>

      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        className="form-control"
        value={id}
        onChange={(e) => setTodo({
          ...todo,
          id: e.target.value
        })} />
      <a href={`${API}/${todo.id}`}
        className="btn btn-primary me-2">
        Get Todo by ID
      </a>

      <h4>Retrieving Arrays</h4>
      <a href={API} className="btn btn-primary me-2">
        Get Todos
      </a>

    </div>
  );
}

export default WorkingWithArrays;
