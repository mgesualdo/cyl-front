import useFetch from "../../../hooks/useFetch"
import useForms from "../../../hooks/useForms"
import Spinner from "../spinners/Spinner"
const SubmitButton = ({
  form,
  path,
  editing,
  type = "button",
  border = "none",
  width = "100%",
  mt = "0.5rem",
  mtm = mt,
  mr = "0",
  mrm = mr,
  mb = "0.5rem",
  mbm = mb,
  widthOnMob = "100%",
  maxWidth,
}) => {
  const { showModal } = useForms({})
  const { fetcher, fetching } = useFetch({ form })

  const handleClick = async () => {
    const method = editing ? "PUT" : "POST"
    await fetcher({ path, method })
    showModal("")
  }

  return (
    <>
      <button type={type} onClick={handleClick}>
        {fetching && <Spinner color="--white" />}
        {!editing && !fetching && "Crear"}
        {editing && !fetching && "Editar"}
      </button>
      <style jsx>{`
        button {
          background-color: var(--price);
          font-size: 1rem;
          padding: 0.5rem 2rem;
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

        button:hover {
          background-color: var(--priceDark);
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
