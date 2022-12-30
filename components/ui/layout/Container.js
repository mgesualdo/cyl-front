const Container = ({
  children,
  width = "18rem",
  height = "auto",
  position = "static",
  radius = "0.5rem",
  margin = "0 auto",
  mquery = "650px",
}) => {
  return (
    <>
      <div className="container">{children}</div>

      <style jsx>{`
        .container {
          min-width: 18rem;
          width: ${width};
          height: ${height};
          max-width: 98%;
          min-height: 5rem;
          position: ${position};
          justify-content: flex-start;
          margin: ${margin};
          align-items: flex-start;
          padding: 1.5rem 1.5rem;
          background-color: white;
          box-shadow: var(--boxShadow);
          z-index: 0;
          border-radius: ${radius};
        }

        @media screen and (max-width: ${mquery}) {
          .container {
            min-width: 18rem;
            width: 95%;
            padding: 1rem 0.8rem;
          }

          .shortcut {
            bottom: 2vh;
          }
        }
      `}</style>
    </>
  )
}

export default Container
