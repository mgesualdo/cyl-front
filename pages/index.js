import Head from "next/head"
import { useRouter } from "next/router"

export default function Home({ user }) {
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
          <div className="df fdc ">
            <div className="df fdc p5 bcblack">
              <h1 className="cwhite">Equiparte</h1>
              <small className="cgold">{user.email}</small>
            </div>
            <div className="h100p bcblue p5 pl10" style={{ width: "13rem" }}>
              <div className="df aic cwhite cursorp">
                <i className="fas fa-building mr10 mt10 mb10 w10 tac" />
                <h3 className="cwhite ml5">Comercios</h3>
              </div>
              <div className="df aic cwhite cursorp">
                <i className="fas fa-cart-shopping mr10 mt10 mb10 w10 tac" />
                <h3 className="cwhite ml5">Productos</h3>
              </div>
              <div className="df aic cwhite  cursorp">
                <i className="fas fa-box mr10 mt10 mb10 w10 tac" />
                <h3 className="cwhite ml5">Pedidos</h3>
              </div>
              <div className="df aic cwhite cursorp">
                <i className="fas fa-truck mr10 mt10 mb10 w10 tac" />
                <h3 className="cwhite ml5">Entregas</h3>
              </div>
              <div className="df aic cwhite cursorp">
                <i className="fas fa-chart-line mr10 mt10 mb10 w10 tac" />
                <h3 className="cwhite ml5">Informes</h3>
              </div>
              <div className="df aic cwhite cursorp">
                <i className="fas fa-users mr10 mt10 mb10 w10 tac" />
                <h3 className="cwhite ml5">Usuarios</h3>
              </div>
              <div className="df aic cwhite cursorp">
                <i className="fas fa-gears mr10 mt10 mb10 w10 tac" />
                <h3 className="cwhite ml5">Ajustes</h3>
              </div>
              <div className="df aic cwhite cursorp" onClick={handleLogout}>
                <i className="fas fa-right-from-bracket mr10 mt10 mb10 w10 tac" />
                <h3 className="cwhite ml5">Cerrar sesión</h3>
              </div>
            </div>
          </div>
          <div className="df aic jcc w100p h100p">
            <h1>Contenido PRINCIPAL</h1>
          </div>
        </div>
      </main>
    </>
  )
}
