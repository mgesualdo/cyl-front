import { useStore } from '../../../hooks/useForms'
import InputText from '../../ui/inputs/InputText'

const PersonDenomination = ({ form = 'person' }) => {
  const isCompany = useStore((state) => state[form].type === 'Empresa')

  return (
    <>
      {!isCompany && (
        <>
          <InputText form={form} placeholder='Nombre/s' name='firstname' />
          <InputText form={form} placeholder='Apellido/s' name='lastname' />
        </>
      )}
      {isCompany && (
        <InputText form={form} placeholder='Denominación' name='denomination' />
      )}
      <InputText form={form} placeholder='Correo electrónico' name='email' />
    </>
  )
}

export default PersonDenomination
