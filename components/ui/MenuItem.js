import { useRouter } from "next/router"
import useAuth from "../../hooks/useAuth"

const MenuItem = ({ text, icon, goTo, ml, setShowMenu }) => {
  const { cleanForm } = useAuth()
  const router = useRouter()
  const handleClick = () => {
    if (!goTo) {
      document.cookie = "jwt=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
      cleanForm()
      router.replace("login")
    } else {
      router.push(`/${goTo}`)
    }
    setShowMenu(false)
  }
  return (
    <>
      <div
        className="df aic cursorp pl10 pr10 pt2 pb2 menu-item"
        onClick={handleClick}
      >
        <i
          className={`${icon} mr10 mt10 mb10 tac db`}
          style={{ marginLeft: ml }}
        />

        <h3 className=" ml5 wsnw">{text}</h3>
      </div>
      <style jsx>{`
        .menu-item:hover,
        .menu-item:hover h3 {
          background-color: var(--blue);
          color: white;
        }
      `}</style>
    </>
  )
}

export default MenuItem
