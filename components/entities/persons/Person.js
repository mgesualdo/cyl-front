import getPersonDenom from "../../../helpers/getPersonDenom"
import useFetch from "../../../hooks/useFetch"
import useForms from "../../../hooks/useForms"
import ContainerItem from "../../ui/layout/ContainerItem"

const PersonItem = ({ person }) => {
  const { setFields, showModal } = useForms({ form: "person" })
  const { fetcher } = useFetch({ form: "person" })
  const denom = getPersonDenom(person)

  return (
    <ContainerItem mb="0.5rem" width="100%" jc="space-between">
      <p>{denom}</p>
      <div className="df aic">
        <i
          className="fas fa-edit cblack mr10"
          onClick={() => {
            setFields({ data: { ...person, editing: true } })
            showModal()
          }}
        />
        <i
          className="fas fa-trash cred"
          onClick={() =>
            fetcher({ path: `/persons/${person._id}`, method: "DELETE" })
          }
        />
      </div>
    </ContainerItem>
  )
}

export default PersonItem
