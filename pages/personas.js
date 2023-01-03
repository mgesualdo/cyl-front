import Head from "next/head"
import PersonsList from "../components/entities/persons/PersonsList"

const PersonasPage = ({}) => {
  return (
    <>
      <Head>
        <title>Personas</title>
      </Head>

      <PersonsList />
    </>
  )
}

export default PersonasPage
