import Image from "next/image"

const Logo = ({ setShowMenu, showMenu }) => {
  return (
    <>
      <div className="logo" onClick={() => setShowMenu(!showMenu)}>
        <Image src="/logo.png" fill="responsive" alt="Logo de la empresa" />
      </div>
      <style jsx>{`
        .logo {
          position: absolute;
          height: 3rem;
          width: 3rem;
          border-radius: 1rem;
          top: 0.5rem;
          left: 0.5rem;
          overflow: hidden;
          background-color: red;
          z-index: 1;
        }
      `}</style>
    </>
  )
}

export default Logo
