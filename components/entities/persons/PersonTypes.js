import useForms from "../../../hooks/useForms"
import Options from "../../ui/selectors/Options"

const PERSON_TYPES = [
  { text: "Persona", icon: "fas fa-person" },
  { text: "Empresa", icon: "fas fa-building" },
]

const PersonTypes = () => {
  const { setFields } = useForms({ form: "person" })

  const handleClick = (item) => {
    const isCompany = item === "Empresa"

    setFields({ data: { type: item } })

    if (isCompany) {
      setFields({ data: { isEmployee: false, areas: [] } })
    }
  }
  return (
    <Options
      items={PERSON_TYPES}
      form="person"
      field="type"
      jc="space-between"
      onItemClick={handleClick}
    />
  )
}

export default PersonTypes
