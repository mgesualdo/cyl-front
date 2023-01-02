import Head from "next/head"
import PersonsList from "../components/entities/persons/PersonsList"

const PersonasPage = ({}) => {
  return (
    <>
      <Head>
        <title>Personas</title>
      </Head>
      <main
        style={{
          height: "100vh",
          margin: "5rem auto 0 auto",
          width: "95%",
          maxWidth: "40rem",
        }}
      >
        <PersonsList />
      </main>
    </>
  )
}

export default PersonasPage
