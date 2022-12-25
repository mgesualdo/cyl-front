import React, { useState } from "react"
import { useRouter } from "next/router"
import Container from "../components/ui/Container"
import Swal from "sweetalert2"

const login = () => {
  const [loginInfo, setLoginInfo] = useState({})
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, code } = loginInfo

    console.log({ email, code })
    try {
      const rawRes = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_BACK_URL}/auth/login`,
        {
          method: "POST",
          credentials: "include",
          headers: new Headers({
            "Content-Type": "application/json",
          }),
          body: JSON.stringify({
            email,
            code,
          }),
        }
      )
      if (rawRes.status === 401) {
        Swal.fire({
          title: "UPS",
          html: "Datos de inicio de sesión incorrectos",
          icon: "info",
          confirmButtonText: "Entendido 😣",
        })
      } else {
        const res = await rawRes.json()
        router.push("/")
      }
    } catch (error) {
      console.log({ error })
    }
  }

  const handleGetCode = async (e) => {
    const { email } = loginInfo
    const rawRes = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_BACK_URL}/auth/login/code/${email}`
    )
  }

  const handleInputChange = ({ target }) => {
    setLoginInfo({ ...loginInfo, [target.name]: target.value })
  }

  return (
    <Container
      margin="5rem auto 0 auto"
      width="20rem"
      height="auto"
      mquery="500px"
    >
      <h2 className="df fdc tac">Inicio de sesión</h2>
      <form className="df fdc aic jcc p5" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          className="p5 mb10 onone bnone bs br3 bcgreylight w100p"
          placeholder="Correo electrónico"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="code"
          className="p5 bnone onone bs br3 bcgreylight w100p"
          placeholder="Código de ingreso"
          onChange={handleInputChange}
        />
        <div className="df aic mt20">
          <button className="p5 bnone bcblue cwhite br3 cursorp mr5">
            Ingresar
          </button>
          <button
            className="p5 bnone bcprice cwhite br3 cursorp"
            type="button"
            onClick={handleGetCode}
          >
            Necesito un código
          </button>
        </div>
      </form>
    </Container>
  )
}

export default login
