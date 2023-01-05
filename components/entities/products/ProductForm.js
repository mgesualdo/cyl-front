import SubmitButton from '../../ui/buttons/SubmitButton'
import { useStore } from '../../../hooks/useForms'
import FormContainer from '../../ui/forms/FormContainer'
import InputFile from '../../ui/inputs/InputFile'
import Subtitle from '../../ui/texts/Subtitle'
import InputText from '../../ui/inputs/InputText'
import InputNumber from '../../ui/inputs/InputNumber'
import InputTextArea from '../../ui/inputs/InputTextArea'

const ProductForm = () => {
  const _id = useStore((state) => state.product._id)
  const editing = useStore((state) => state.product.editing)

  return (
    <FormContainer>
      <h2 className='mb10'>{`${editing ? 'Editar' : 'Crear'} producto`}</h2>
      <InputText form='product' name='type' type='text' placeholder='Tipo' />
      <InputText form='product' name='branch' type='text' placeholder='Marca' />
      <InputText form='product' name='model' type='text' placeholder='Modelo' />
      <InputNumber form='product' name='price' placeholder='Precio' />
      <div className='df fdc w100p'>
        <Subtitle text='Imagen' />
        <InputFile filesType='images' form='product' />
      </div>
      <InputTextArea form='product' name='details' placeholder='Detalles...' />
      <SubmitButton
        form='product'
        queryKey='products'
        path={editing ? `/products/${_id}` : '/products'}
        editing={editing}
      />
    </FormContainer>
  )
}

export default ProductForm
