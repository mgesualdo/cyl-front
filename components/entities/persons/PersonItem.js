import getPersonDenom from '../../../helpers/getPersonDenom'
import DeleteItem from '../../ui/icons/DeleteItem'
import EditItem from '../../ui/icons/EditItem'
import CustomImage from '../../ui/images/CustomImage'
import ContainerItem from '../../ui/layout/ContainerItem'

const PersonItem = ({ person, form = 'person' }) => {
  const denom = getPersonDenom(person)

  return (
    <ContainerItem mb='0.5rem' width='100%' jc='space-between'>
      <div className='df aic'>
        <CustomImage src={person.imageUrl} />
        <p className='ml10'>{denom}</p>
      </div>
      <div className='df aic'>
        <EditItem form={form} item={person} />
        <DeleteItem form={form} itemID={person._id} />
      </div>
    </ContainerItem>
  )
}

export default PersonItem
