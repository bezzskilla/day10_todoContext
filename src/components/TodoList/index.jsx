import { useContext } from 'react'
import { TodoItem } from '../TodoItem'
import { TodosContext } from '../../context/TodosContext'

export const TodoList = () => {
  const todos = useContext(TodosContext)

  return (
    <ul className="list-group">
      {todos.map((todo, index) => {
        return <TodoItem
          key={todo.id}
          todo={todo}
          index={index}
        />
      })}
    </ul>

  )
}
