import React from "react"
import { MENU_OPTIONS } from "../../utils/config"
import MenuItem from "./MenuItem"

const Menu = ({ setShowMenu }) => {
  return (
    <>
      <>
        <div className="back" onClick={() => setShowMenu(false)} />
        <div className={`df fdc menu oh`}>
          <div className="h100p w100p">
            {MENU_OPTIONS.map(({ text, icon, goTo, ml }) => (
              <MenuItem
                text={text}
                icon={icon}
                goTo={goTo}
                ml={ml}
                key={text}
                setShowMenu={setShowMenu}
              />
            ))}
          </div>
        </div>
      </>
      <style jsx>{`
        .menu {
          transition: width 0.2s ease-in-out;
          background-color: white;
          box-shadow: var(--boxShadow);
          position: absolute;
          top: 4.4rem;
          left: 0.5rem;
          border-radius: 0.3rem;
          z-index: 1;
        }

        .back {
          position: absolute;
          height: 100%;
          width: 100vw;
          background-color: rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  )
}

export default Menu
