export default function Reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_TODO":
      const toggledTodo = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...action.payload,
              complete: !action.payload.complete,
            }
          : todo
      );

      return {
        ...state,
        todos: toggledTodo,
      };

    case "REMOVE_TODO":
      const postRemoveTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      return {
        ...state,
        todos: postRemoveTodos,
      };

    case "UPDATE_CURRENT_TODO":
      return {
        ...state,
        currentTodo: action.payload,
      };

    case "UPDATE_TODO":
      const updatedTodos = state.todos.map((todo) =>
        todo.id === state.currentTodo.id
          ? {
              ...todo,
              text: action.payload,
            }
          : todo
      );

      return {
        ...state,
        todos: updatedTodos,
        currentTodo: {},
      };
    case "ADD_TODO":
      const newTodo = action.payload;
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };

    default:
      return state;
  }
}
