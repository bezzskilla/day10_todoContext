import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { TodosHelpersContext } from "../../context/TodosContext"

export const CurrentTodo = () => {
  const navigate = useNavigate()
  const { idOfTodo } = useParams()
  const { getCurrentTodo } = useContext(TodosHelpersContext)

  return (
    <>
      <div>Вы находитесь на конкретной странице тудушки</div>
      <p>{JSON.stringify(getCurrentTodo(idOfTodo))}</p>
      <button onClick={() => navigate(-1)}>Назад</button>
    </>
  )
}
