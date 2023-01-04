import useForms from "../../../hooks/useForms"

const EditItem = ({ item, form }) => {
  const { setFields, showModal } = useForms({ form })
  return (
    <i
      className="fas fa-edit cblack mr10"
      onMouseOver={(e) => {
        e.stopPropagation()
      }}
      onClick={() => {
        setFields({ data: { ...item, editing: true } })
        showModal()
      }}
    />
  )
}

export default EditItem
