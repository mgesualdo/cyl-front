import { useStore } from "../../../hooks/useForms"

const InputCheck = ({
  field,
  width = "100%",
  widthOnMob = width,
  form,
  text,
  mb = 0,
  mr = 0,
  mt = 0,
  inputMl = 0,
  jc = "space-between",
  onLabelClick,
  onChange,
}) => {
  const value = useStore((state) => state[form][field])

  return (
    <>
      <div className="toggle-container">
        <span onClick={() => onLabelClick(field)} className="w100p usnone">
          {text}
        </span>
        <CheckBox checked={value} field={field} onChange={onChange} />
      </div>
      <style jsx>{`
        .toggle-container {
          width: ${width};
          display: flex;
          align-items: center;
          justify-content: ${jc};
          margin-bottom: ${mb};
          margin-top: ${mt};
          margin-right: ${mr};
          cursor: pointer;
        }

        input {
          margin-left: ${inputMl};
          margin-right: 0.5rem;
          cursor: pointer;
        }

        @media screen and (max-width: 650px) {
          .toggle-container {
            width: ${widthOnMob};
          }
        }
      `}</style>
    </>
  )
}

const CheckBox = ({ checked, field, onChange }) => {
  return (
    <input
      type="checkbox"
      id={field}
      onChange={(e) => onChange(e, field)}
      checked={checked || false}
      className="mt1"
    />
  )
}

export default InputCheck
