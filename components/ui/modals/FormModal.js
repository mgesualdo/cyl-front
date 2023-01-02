import useForms, { useStore } from "../../../hooks/useForms"

const FormModal = ({ children, width, form }) => {
  const { showModal } = useForms({})
  const { show } = useStore((state) => state.modal)

  if (!(show === form)) return <></>
  return (
    <>
      <div
        className="posa t0 l0 p5 w100p h100p"
        style={{ margin: "0 auto", zIndex: 2, background: "rgba(0,0,0,0.4)" }}
        onClick={() => showModal("")}
      >
        <div className="modal df fdc bcwhite pt5 pb5 pl10 pr10 br5 bs mauto">
          {children}
        </div>
      </div>
      <style jsx>{`
        .modal {
          width: ${width};
        }

        @media screen and (max-width: 600px) {
          .modal {
            width: 95%;
          }
        }
      `}</style>
    </>
  )
}

export default FormModal
