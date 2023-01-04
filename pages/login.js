import SubmitButton from '../components/ui/buttons/SubmitButton'
import FormContainer from '../components/ui/forms/FormContainer'
import InputText from '../components/ui/inputs/InputText'

const login = () => {
  return (
    <FormContainer>
      <h2 className='df fdc tac mb5'>Inicio de sesión</h2>
      <InputText
        type='email'
        name='email'
        placeholder='Correo electrónico'
        form='auth'
      />
      <InputText
        type='text'
        name='code'
        placeholder='Código de ingreso'
        form='auth'
      />

      <div className='df aic jcsb'>
        <SubmitButton
          path='/auth/login'
          form='auth'
          validation='login'
          text='Ingresar'
          bc='blue'
          width='6rem'
          mr='0.5rem'
        />
        <SubmitButton
          basePath='/auth/login/code'
          param='email'
          validation='getCode'
          form='auth'
          text='Solicitar código'
          width='9rem'
        />
      </div>
    </FormContainer>
  )
}

export default login
