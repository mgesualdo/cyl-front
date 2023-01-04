import { useQuery } from 'react-query'
import { customFetch } from '../../../helpers/customFetch'
import OpenNewForm from '../../ui/buttons/PlusButton'
import Modal from '../../ui/modals/Modal'
import Spinner from '../../ui/spinners/Spinner'
import Subtitle from '../../ui/texts/Subtitle'
import PersonItem from '../persons/Person'
import BusinessForm from './BusinessForm'

const BusinessList = () => {
  const { data, isLoading } = useQuery('comercios', () =>
    customFetch(`/persons/business`)
  )

  if (isLoading) return <Spinner />

  return (
    <>
      <div className='w100p'>
        <Subtitle text='Listado de comercios' />
        {data?.map((p) => (
          <PersonItem person={p} key={p._id} form='business' />
        ))}
      </div>
      <OpenNewForm form='business' />
      <Modal form='business' width='20rem'>
        <BusinessForm />
      </Modal>
    </>
  )
}

export default BusinessList
