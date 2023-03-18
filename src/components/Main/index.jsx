import { TodoList } from '../TodoList/index'
import { DeleteAllButton } from '../DeleteAllButton/index'
import { useContext } from 'react'
import { TodosContext } from '../../context/TodosContext'

export const Main = () => {
  const todos = useContext(TodosContext)

  if (!todos.length) {
    return <p>TODO лист пока пуст...</p>
  }

  return (
    <main className="py-5">
      <TodoList />
      <DeleteAllButton />
    </main>
  )
}
