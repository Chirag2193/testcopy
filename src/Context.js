import React from "react";

const TodosContext = React.createContext({
  todos: [
    {
      id: 1,
      text: "Learn React Hooks",
      complete: false,
    },
    {
      id: 2,
      text: "Contact your friends over the weekend",
      complete: true,
    },
  ],
  currentTodo: {},
});

export default TodosContext;
