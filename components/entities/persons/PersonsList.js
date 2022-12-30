import { useQuery, useQueryClient } from "react-query"
import { customFetch } from "../../../helpers/customFetch"
import useForms from "../../../hooks/useForms"
import Spinner from "../../ui/spinners/Spinner"
import Subtitle from "../../ui/texts/Subtitle"
import PersonItem from "./Person"
import { useState } from "react"
import PersonForm from "./PersonForm"

const PersonsList = () => {
  const [showForm, setShowForm] = useState(false)
  const { data, error, isLoading } = useQuery(
    "personas",
    () => customFetch(`/persons`),
    {
      onError: (e) => {
        console.log({ cause: e.cause })
      },
    }
  )
  const queryClient = useQueryClient()
  const { setFields } = useForms({ form: "person" })

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
        onClick={() => setShowForm(true)}
      >
        <i className="fas fa-plus p5" />
      </div>
      {showForm && <PersonForm setShowForm={setShowForm} />}
    </>
  )
}

export default PersonsList
