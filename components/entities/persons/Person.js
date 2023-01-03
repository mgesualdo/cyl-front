import getPersonDenom from "../../../helpers/getPersonDenom"
import DeleteItem from "../../ui/buttons/DeleteItem"
import EditItem from "../../ui/buttons/EditItem"
import CustomImage from "../../ui/images/CustomImage"
import ContainerItem from "../../ui/layout/ContainerItem"

const PersonItem = ({ person }) => {
  const denom = getPersonDenom(person)

  return (
    <ContainerItem mb="0.5rem" width="100%" jc="space-between">
      <div className="df aic">
        <CustomImage src={person.imageUrl} />
        <p className="ml5">{denom}</p>
      </div>
      <div className="df aic">
        <EditItem form="person" item={person} />
        <DeleteItem form="person" itemID={person._id} />
      </div>
    </ContainerItem>
  )
}

export default PersonItem
