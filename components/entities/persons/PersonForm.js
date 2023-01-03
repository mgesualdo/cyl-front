import PersonVinculations from "./PersonVinculations"
import PersonDenomination from "./PersonDenomination"
import PersonAreas from "./PersonAreas"
import PersonTypes from "./PersonTypes"
import SubmitButton from "../../ui/buttons/SubmitButton"
import { useStore } from "../../../hooks/useForms"
import FormContainer from "../../ui/forms/FormContainer"
import InputFile from "../../ui/inputs/InputFile"
import Subtitle from "../../ui/texts/Subtitle"

const PersonForm = () => {
  const _id = useStore((state) => state.person._id)
  const editing = useStore((state) => state.person.editing)

  return (
    <FormContainer>
      <h2 className="mb10">{`${editing ? "Editar" : "Crear"} persona`}</h2>
      <PersonTypes />
      <PersonDenomination />
      <PersonVinculations />
      <PersonAreas />
      <div className="df fdc w100p">
        <Subtitle text="Imagen" />
        <InputFile filesType="images" form="person" />
      </div>
      <SubmitButton
        form="person"
        queryKey="personas"
        path={editing ? `/persons/${_id}` : "/persons"}
        editing={editing}
      />
    </FormContainer>
  )
}

export default PersonForm
