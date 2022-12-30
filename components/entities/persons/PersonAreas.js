import useForms, { useStore } from "../../../hooks/useForms"
import Options from "../../ui/selectors/Options"
import Subtitle from "../../ui/texts/Subtitle"

const COMPANY_AREAS = [{ text: "Ventas" }, { text: "Administración" }]

const PersonAreas = () => {
  const isEmployee = useStore((state) => state.person.isEmployee)
  const { setArrayField } = useForms({ form: "person" })

  const handleClick = (item) => {
    setArrayField({ item, field: "areas" })
  }

  if (!isEmployee) return <></>

  return (
    <div className="w100p">
      <Subtitle text="Área de trabajo" />
      <Options
        items={COMPANY_AREAS}
        form="person"
        field="areas"
        onItemClick={handleClick}
        width="100%"
        jc="space-between"
      />
    </div>
  )
}

export default PersonAreas
