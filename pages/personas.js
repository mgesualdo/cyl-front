import Head from 'next/head'
import PersonsList from '../components/entities/persons/PersonsList'
import PageOptionsButton from '../components/ui/buttons/PageOptionsButton'

const PersonasPage = ({}) => {
  return (
    <>
      <Head>
        <title>Personas</title>
      </Head>
      <PageOptionsButton form='person' />
      <PersonsList />
    </>
  )
}

export default PersonasPage
