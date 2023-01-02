const Spinner = ({
  size = "1rem",
  width = "auto",
  height = "auto",
  color = "--blue",
}) => {
  return (
    <>
      <div className="df aic jcc" style={{ width, height }}>
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <style jsx>{`
        .lds-ring {
          display: inline-block;
          position: relative;
          width: ${size};
          height: ${size};
        }
        .lds-ring div {
          box-sizing: border-box;
          display: block;
          position: absolute;
          width: ${size};
          height: ${size};
          margin: 0;
          border: 2px solid var(${color});
          border-radius: 50%;
          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
          border-color: var(${color}) transparent transparent transparent;
        }
        .lds-ring div:nth-child(1) {
          animation-delay: -0.45s;
        }
        .lds-ring div:nth-child(2) {
          animation-delay: -0.3s;
        }
        .lds-ring div:nth-child(3) {
          animation-delay: -0.15s;
        }
        @keyframes lds-ring {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  )
}

export default Spinner
