import { useQuery, useQueryClient } from 'react-query'
import { customFetch } from '../../../helpers/customFetch'
import useForms from '../../../hooks/useForms'
import OpenNewForm from '../../ui/buttons/PlusButton'
import Modal from '../../ui/modals/Modal'
import Spinner from '../../ui/spinners/Spinner'
import Subtitle from '../../ui/texts/Subtitle'
import PersonItem from './PersonItem'
import PersonForm from './PersonForm'

const PersonsList = () => {
  const { data, isLoading } = useQuery(
    'personas',
    () => customFetch(`/persons`),
    {
      onError: (e) => {
        console.log({ cause: e.cause })
      },
    }
  )

  if (isLoading) return <Spinner />

  return (
    <>
      <div className='w100p'>
        <Subtitle text='Listado de personas' />
        {data?.map((p) => (
          <PersonItem person={p} key={p._id} />
        ))}
      </div>
      <OpenNewForm form='person' />
      <Modal form='person' width='20rem'>
        <PersonForm />
      </Modal>
    </>
  )
}

export default PersonsList
