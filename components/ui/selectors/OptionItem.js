import { useStore } from "../../../hooks/useForms"
import ContainerItem from "../layout/ContainerItem"

const OptionItem = ({ item, onClick, form, field, width, mb }) => {
  const value = useStore((state) => state[form][field])
  const { text, icon } = item
  return (
    <ContainerItem
      jc="center"
      width={width}
      onClick={() => onClick(text)}
      selected={value === text || value?.includes(text)}
      mb={mb}
    >
      {icon && <i className={`${icon} mr5 mt5 mb5 tac db`} />}
      <p className="m5">{text}</p>
    </ContainerItem>
  )
}

export default OptionItem
