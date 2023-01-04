import Head from 'next/head'
import BusinessList from '../components/entities/business/BusinessList'

const ComerciosPage = () => {
  return (
    <>
      <Head>
        <title>Comercios</title>
      </Head>
      <BusinessList />
    </>
  )
}

export default ComerciosPage
