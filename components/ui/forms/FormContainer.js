import React from "react"

const FormContainer = ({ children }) => {
  return (
    <>
      <div className="df aic jcc mt20">
        <form
          className="df fdc aic br5 pt5 pb5 pl10 pr10 bcwhite bs"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </form>
      </div>
      <style jsx>{`
        form {
          display: inline-block;
          margin: 0 auto;
        }

        @media screen and (max-width: 500px) {
          form {
            width: 95%;
          }
        }
      `}</style>
    </>
  )
}

export default FormContainer
