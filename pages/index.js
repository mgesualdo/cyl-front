import Head from "next/head"
import Spinner from "../components/ui/spinners/Spinner"

export default function Home({ user }) {
  console.log({ user })
  if (!user?.email) return <Spinner width="100%" height="100%" />

  return (
    <>
      <Head>
        <title>Equiparte</title>
        <meta
          name="description"
          content="Aplicación para la gestión de un negocio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main style={{ height: "100vh" }}>
        <div className="df h100p">
          <div className="df aic jcc w100p h100p">
            <h1>Contenido PRINCIPAL</h1>
          </div>
        </div>
      </main>
    </>
  )
}
