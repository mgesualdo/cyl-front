import useFetch from "../../../hooks/useFetch"

const DeleteItem = ({ itemID, form }) => {
  const { fetcher } = useFetch({ form })
  return (
    <i
      className="fas fa-trash cred"
      onClick={() => fetcher({ path: `/persons/${itemID}`, method: "DELETE" })}
    />
  )
}

export default DeleteItem
