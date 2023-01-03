import useFetch from "../../../hooks/useFetch"
import useForms, { useStore } from "../../../hooks/useForms"
import Spinner from "../spinners/Spinner"
const SubmitButton = ({
  form,
  path,
  basePath,
  param,
  text,
  validation,
  editing,
  type = "submit",
  border = "none",
  width = "100%",
  widthOnMob = width,
  bc = "green",
  mt = "0.5rem",
  mtm = mt,
  mr = "0",
  mrm = mr,
  mb = "0.5rem",
  mbm = mb,
  maxWidth,
}) => {
  const { hideModal } = useForms({ form })
  const { fetcher, fetching } = useFetch({ form })

  const handleClick = async (e) => {
    type === "submit" && e.preventDefault()
    const method = editing ? "PUT" : "POST"
    const paramValue = useStore.getState(form)[param]
    let finalPath = path ? path : `${basePath}/${paramValue}`
    await fetcher({ path: finalPath, method, validation })
    hideModal("")
  }

  const handleSubmit = async (e) => {
    console.log({ e })
  }

  const finalText = text || (editing ? "Editar" : "Crear")

  return (
    <>
      <button
        type={type}
        onClick={handleClick}
        onSubmit={handleSubmit}
        className="ooh"
      >
        {fetching && <Spinner color="--white" />}
        {!fetching && finalText}
      </button>
      <style jsx>{`
        button {
          background-color: var(--${bc});
          font-size: 1rem;
          padding: 0.5rem 1rem;
          border: ${border};
          color: white;
          outline: none;
          width: ${width};
          max-width: ${maxWidth} !important;
          cursor: pointer;
          margin-right: ${mr};
          margin-top: ${mt};
          margin-bottom: ${mb};
          border-radius: var(--borderRadius);
        }

        @media screen and (max-width: 600px) {
          button {
            width: ${widthOnMob} !important;
            max-width: ${widthOnMob} !important;
            margin-bottom: ${mbm};
            margin-right: ${mrm};
            margin-top: ${mtm};
          }
        }
      `}</style>
    </>
  )
}

export default SubmitButton
