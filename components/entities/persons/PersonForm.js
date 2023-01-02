import PersonVinculations from "./PersonVinculations"
import PersonDenomination from "./PersonDenomination"
import PersonAreas from "./PersonAreas"
import PersonTypes from "./PersonTypes"
import SubmitButton from "../../ui/buttons/SubmitButton"
import { useStore } from "../../../hooks/useForms"

const PersonForm = () => {
  const _id = useStore((state) => state.person._id)
  const editing = useStore((state) => state.person.editing)
  console.log({ editing })

  return (
    <form
      className="df fdc aic mauto z10 w100p"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="mb10">{`${editing ? "Editar" : "Crear"} persona`}</h2>
      <PersonTypes />
      <PersonDenomination />
      <PersonVinculations />
      <PersonAreas />
      <SubmitButton
        form="person"
        queryKey="personas"
        path={editing ? `/persons/${_id}` : "/persons"}
        editing={editing}
      />
    </form>
  )
}

export default PersonForm
