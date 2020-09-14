import React, { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodosContext from "./Context";

export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const { state, dispatch } = useContext(TodosContext);

  useEffect(() => {
    if (state.currentTodo.text) {
      setTodo(state.currentTodo.text);
    }
  }, [state.currentTodo.id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.currentTodo.text) {
      dispatch({
        type: "UPDATE_TODO",
        payload: todo,
      });
    } else {
      dispatch({
        type: "ADD_TODO",
        payload: {
          id: uuidv4(),
          text: todo,
          complete: false,
        },
      });
    }
    setTodo("");
  };
  return (
    <TodosContext.Provider>
      <form onSubmit={handleSubmit}>
        <input
          className="border-black border-solid border-2 rounded p-3 m-3"
          type="text"
          placeholder="What would you like to do today?"
          onChange={(event) => setTodo(event.target.value)}
          value={todo}
        />
      </form>
    </TodosContext.Provider>
  );
}
