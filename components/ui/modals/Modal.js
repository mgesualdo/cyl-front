import useForms, { useStore } from "../../../hooks/useForms"

const Modal = ({ children, form }) => {
  const { hideModal, cleanForm } = useForms({ form })
  const { show } = useStore((state) => state.modal)

  if (!(show === form)) return <></>
  return (
    <>
      <div
        className="modal"
        onClick={() => {
          hideModal("")
          cleanForm()
        }}
      >
        {children}
      </div>

      <style jsx>{`
        .modal {
          position: fixed;
          width: 100vw;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 2;
          background: rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </>
  )
}

export default Modal
