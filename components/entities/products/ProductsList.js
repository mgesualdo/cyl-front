import { useQuery } from 'react-query'
import { customFetch } from '../../../helpers/customFetch'
import OpenNewForm from '../../ui/buttons/PlusButton'
import Modal from '../../ui/modals/Modal'
import Spinner from '../../ui/spinners/Spinner'
import Subtitle from '../../ui/texts/Subtitle'
import ProductItem from '../products/ProductItem'
import ProductForm from './ProductForm'

const ProductList = () => {
  const { data, isLoading } = useQuery('productos', () =>
    customFetch(`/products`)
  )

  if (isLoading) return <Spinner />

  return (
    <>
      <div className='w100p'>
        <Subtitle text='Listado de productos' />
        {data?.map((p) => (
          <ProductItem product={p} key={p._id} form='product' />
        ))}
      </div>
      <OpenNewForm form='product' />
      <Modal form='product' width='20rem'>
        <ProductForm />
      </Modal>
    </>
  )
}

export default ProductList
