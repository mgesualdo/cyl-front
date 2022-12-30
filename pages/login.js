import Container from "../components/ui/Container"
import InputText from "../components/ui/inputs/InputText"
import useFetch from "../hooks/useFetch"
import { useStore } from "../hooks/useForms"

const login = () => {
  const { post } = useFetch({ form: "auth" })

  console.log("RENDER")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await post({ path: `/auth/login`, validation: "login" })
    } catch (error) {
      console.log({ error })
    }
  }

  const handleGetCode = async (e) => {
    const email = useStore.getState().auth.email
    console.log({ email })
    await post({ path: `/auth/login/code/${email}`, validation: "getCode" })
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
        <InputText
          type="email"
          name="email"
          placeholder="Correo electrónico"
          form="auth"
        />
        <InputText
          type="text"
          name="code"
          placeholder="Código de ingreso"
          form="auth"
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
