import useForms, { useStore } from "../../../hooks/useForms"
import InputCheck from "../../ui/inputs/InputCheck"
import Subtitle from "../../ui/texts/Subtitle"

const PERSON_VINCULATIONS = [
  { text: "Empleado", field: "isEmployee" },
  { text: "Cliente", field: "isClient" },
  { text: "Proveedor", field: "isSupplier" },
]

const PersonVinculations = () => {
  const { setFields } = useForms({ form: "person" })
  const isCompany = useStore((state) => state.person.type === "Empresa")

  const handleChange = ({ target }, field) => {
    setFields({ data: { [field]: target.checked } })
    if (field === "isEmployee" && !target.checked) {
      setFields({ data: { areas: [] } })
    }
  }

  const handleClick = (field) => {
    document.getElementById(field).click()
  }

  return (
    <div className="mt5 mb10 w100p">
      <Subtitle text="Vínculo/s con la empresa" />
      {PERSON_VINCULATIONS.filter(
        (v) => !isCompany || (isCompany && v.text !== "Es empleado")
      ).map((v) => (
        <InputCheck
          onChange={handleChange}
          onLabelClick={handleClick}
          text={v.text}
          form="person"
          field={v.field}
          key={v.field}
          mb="0.5rem"
        />
      ))}
    </div>
  )
}

export default PersonVinculations
