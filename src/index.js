import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import TodoForm from "./TodoForm";
import * as serviceWorker from "./serviceWorker";
import TodosContext from "./Context";
import Reducer from "./Reducer";

const App = () => {
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <div className="container mx-auto max-w-md text-center font-mono">
        <h2>
          {state.todos.length > 0
            ? `Todos ${state.todos.length}`
            : "Nothing to do!"}
        </h2>
        <TodoForm />
        <ul className="list-reset text-white p-0">
          {state.todos.map((todo) => (
            <li
              className="bg-black border-black border-dashed border- my-2 py-4"
              key={todo.id}
              onDoubleClick={() =>
                dispatch({ type: "TOGGLE_TODO", payload: todo })
              }
            >
              <span
                className={`cursor-pointer ${
                  todo.complete ? "line-through" : ""
                }`}
              >
                {todo.text}
              </span>
              <button className="bg-gray text-white p-1 m-1" onClick={() =>
                  dispatch({ type: "UPDATE_CURRENT_TODO", payload: todo })
                } >Edit</button>
              <button
                className="bg-red text-white p-1 m-1"
                onClick={() =>
                  dispatch({ type: "REMOVE_TODO", payload: todo })
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </TodosContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



