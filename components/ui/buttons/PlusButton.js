import useForms from "../../../hooks/useForms"

const OpenNewForm = ({ form }) => {
  const { cleanForm, showModal } = useForms({ form })
  return (
    <div
      className="posa bcgreen r10 t5 br5 cwhite cursorp ooh"
      onClick={() => {
        cleanForm()
        showModal()
      }}
    >
      <i className="fas fa-plus p5" />
    </div>
  )
}

export default OpenNewForm
