import Head from "next/head"
import { useRouter } from "next/router"
import { useState } from "react"
import LateralItem from "../components/ui/LateralItem"
import { LATERAL_OPTIONS } from "../utils/config"

export default function Home({ user }) {
  const [expand, setExpand] = useState(false)
  const [persistExpand, setPersistExpand] = useState(false)
  const router = useRouter()
  const handleLogout = () => {
    document.cookie = "jwt=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    router.push("/login")
  }

  if (!user) return <h1>Loading...</h1>

  return (
    <>
      <Head>
        <title>Equiparte</title>
        <meta
          name="description"
          content="Aplicación para la gestión de un negocio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="posr" style={{ height: "100vh" }}>
        <div className="df h100p">
          <div
            className={`df fdc lateral ${
              expand || persistExpand ? "expand" : ""
            } oh`}
            onMouseOver={() => setExpand(true)}
            onMouseLeave={() => setExpand(false)}
            onClick={() => setPersistExpand(!persistExpand)}
          >
            <div className="df fdc p5 bcblack w100p">
              <h1 className="cwhite">Equiparte</h1>
              <small className="cgold">{user.email}</small>
            </div>
            <div className="h100p bcblue p5 pl10 w100p">
              {LATERAL_OPTIONS.map(({ text, icon, ml }) => (
                <LateralItem text={text} icon={icon} ml={ml} key={text} />
              ))}
            </div>
          </div>
          <div className="df aic jcc w100p h100p">
            <h1>Contenido PRINCIPAL</h1>
          </div>
        </div>
      </main>
      <style jsx>{`
        .lateral {
          width: 3.5rem;
          transition: width 0.2s ease-in-out;
        }

        .expand {
          width: 16rem;
        }

        .hide {
          visibility: none;
        }
      `}</style>
    </>
  )
}
