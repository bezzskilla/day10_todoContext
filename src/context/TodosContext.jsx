import React from "react";
import { useTodos } from "../hooks/useTodos";

export const TodosContext = React.createContext()
export const TodosHelpersContext = React.createContext()

export const TodosContextProvider = ({ children }) => {
  const { todos, addToList, updTodoStatus, deleteList, deleteOneTodo, getCurrentTodo } = useTodos()

  const valueForContext = { addToList, updTodoStatus, deleteList, deleteOneTodo, getCurrentTodo }

  return (
    <TodosContext.Provider value={todos}>
      <TodosHelpersContext.Provider value={valueForContext}>
        {children}
      </TodosHelpersContext.Provider>
    </TodosContext.Provider>
  )
}


