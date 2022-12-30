import getPersonDenom from "../../../helpers/getPersonDenom"
import ContainerItem from "../../ui/layout/ContainerItem"

const PersonItem = ({ person }) => {
  const denom = getPersonDenom(person)

  return (
    <ContainerItem mb="0.5rem" width="100%">
      <p>{denom}</p>
    </ContainerItem>
  )
}

export default PersonItem
