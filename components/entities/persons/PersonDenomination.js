import { useStore } from "../../../hooks/useForms"
import InputText from "../../ui/inputs/InputText"

const PersonDenomination = () => {
  const isCompany = useStore((state) => state.person.type === "Empresa")

  return (
    <>
      {!isCompany && (
        <>
          <InputText form="person" placeholder="Nombre/s" name="firstname" />
          <InputText form="person" placeholder="Apellido/s" name="lastname" />
        </>
      )}
      {isCompany && (
        <InputText
          form="person"
          placeholder="Denominación"
          name="denomination"
        />
      )}
      <InputText form="person" placeholder="Correo electrónico" name="email" />
    </>
  )
}

export default PersonDenomination
