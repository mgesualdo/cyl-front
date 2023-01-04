import Swal from 'sweetalert2'
import useFetch from '../../../hooks/useFetch'
import Spinner from '../spinners/Spinner'

const DeleteItem = ({ itemID, form }) => {
  const { fetcher, fetching } = useFetch({ form })

  if (fetching) return <Spinner color='--red' />
  return (
    <i
      className='fas fa-trash cred'
      onClick={async () => {
        const { isConfirmed } = await Swal.fire({
          title: 'Atención',
          html: '¿Segur@ quieres eliminar a esta persona?',
          confirmButtonText: 'Sí, eliminar',
          confirmButtonColor: 'var(--red)',
          showCancelButton: true,
          cancelButtonText: 'Cancelar',
          icon: 'warning',
        })
        if (isConfirmed) {
          fetcher({ path: `/persons/${itemID}`, method: 'DELETE' })
        }
      }}
    />
  )
}

export default DeleteItem
