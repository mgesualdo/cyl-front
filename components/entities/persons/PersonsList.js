import { useQuery, useQueryClient } from "react-query"
import { customFetch } from "../../../helpers/customFetch"
import useForms from "../../../hooks/useForms"
import FormModal from "../../ui/modals/FormModal"
import Spinner from "../../ui/spinners/Spinner"
import Subtitle from "../../ui/texts/Subtitle"
import PersonItem from "./Person"
import PersonForm from "./PersonForm"

const PersonsList = () => {
  const { showModal, cleanForm } = useForms({ form: "person" })
  const { data, isLoading } = useQuery(
    "personas",
    () => customFetch(`/persons`),
    {
      onError: (e) => {
        console.log({ cause: e.cause })
      },
    }
  )
  const queryClient = useQueryClient()

  const handleClick = () => {}
  if (isLoading) return <Spinner />

  return (
    <>
      <div className="w100p">
        <Subtitle text="Listado de personas" />
        {data?.map((p) => (
          <PersonItem person={p} key={p._id} />
        ))}
      </div>
      <div
        className="posa bcprice r5 t5 br5 cwhite"
        onClick={() => {
          cleanForm()
          showModal("person")
        }}
      >
        <i className="fas fa-plus p5" />
      </div>
      <FormModal form="person" width="20rem">
        <PersonForm />
      </FormModal>
    </>
  )
}

export default PersonsList
