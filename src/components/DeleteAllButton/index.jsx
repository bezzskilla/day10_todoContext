import { useContext } from "react"
import { TodosHelpersContext } from "../../context/TodosContext"

export const DeleteAllButton = () => {
  const { deleteList } = useContext(TodosHelpersContext)

  return (
    <div className="d-flex justify-content-center">
      <button
        type="submit"
        onClick={deleteList}
        className="btn btn-danger mt-3"
      >
        Удалить все
      </button>
    </div>
  )
}
