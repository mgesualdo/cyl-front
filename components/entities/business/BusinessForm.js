import SubmitButton from '../../ui/buttons/SubmitButton'
import { useStore } from '../../../hooks/useForms'
import FormContainer from '../../ui/forms/FormContainer'
import InputFile from '../../ui/inputs/InputFile'
import Subtitle from '../../ui/texts/Subtitle'
import PersonDenomination from '../persons/PersonDenomination'

const BusinessForm = () => {
  const _id = useStore((state) => state.business._id)
  const editing = useStore((state) => state.business.editing)

  return (
    <FormContainer>
      <h2 className='mb10'>{`${editing ? 'Editar' : 'Crear'} comercio`}</h2>
      <PersonDenomination form='business' />
      <div className='df fdc w100p'>
        <Subtitle text='Frente del comercio' />
        <InputFile filesType='images' form='business' />
      </div>
      <SubmitButton
        form='business'
        queryKey='persons'
        path={editing ? `/persons/${_id}` : '/persons'}
        editing={editing}
      />
    </FormContainer>
  )
}

export default BusinessForm
