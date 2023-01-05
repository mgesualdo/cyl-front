import useForms, { useStore } from '../../../hooks/useForms'

const InputNumber = ({ type = 'number', name, placeholder, form }) => {
  const value = useStore((state) => state[form][name])
  const { setFields } = useForms({ form })

  const handleChange = ({ target }) => {
    setFields({ data: { [name]: +target.value } })
  }

  return (
    <>
      <input
        type={type}
        name={name}
        defaultValue={value || ''}
        className='p5 mb10 onone bnone bs br3 bcgreylight w100p fs10'
        placeholder={placeholder}
        onChange={handleChange}
      />
      <style jsx>{``}</style>
    </>
  )
}

export default InputNumber
