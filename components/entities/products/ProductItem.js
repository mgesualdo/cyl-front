import DeleteItem from '../../ui/icons/DeleteItem'
import EditItem from '../../ui/icons/EditItem'
import CustomImage from '../../ui/images/CustomImage'
import ContainerItem from '../../ui/layout/ContainerItem'

const ProductItem = ({ product, form = 'product' }) => {
  const { type, branch, model, imageUrl } = product

  return (
    <ContainerItem mb='0.5rem' width='100%' jc='space-between'>
      <div className='df aic'>
        <CustomImage src={imageUrl} />
        <div className='df fdc ml10 mb3'>
          <p className='mt5 mb0'>
            {type} - {branch}
          </p>
          <small className='cgreydarkest mt-2'>{model}</small>
        </div>
      </div>
      <div className='df aic'>
        <EditItem form={form} item={product} />
        <DeleteItem form={form} itemID={product._id} />
      </div>
    </ContainerItem>
  )
}

export default ProductItem
