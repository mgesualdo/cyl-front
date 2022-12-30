import React from "react"

const ContainerItem = ({
  children,
  onClick,
  className,
  style,
  bc = "white",
  position = "static",
  jc = "flex-start",
  width = "100%",
  maxWidth = "auto",
  widthOnMob,
  fd = "row",
  ai = "center",
  mr = "0",
  mrm = mr,
  mb = "0",
  mt = "0",
  height = "",
  padding = "0 1rem",
  paddingOnMob = "0 0.65rem",
  cursor = "pointer",
  selected,
}) => {
  return (
    <>
      <div
        className={`container-item ${selected ? "selected" : ""}`}
        onClick={onClick}
        style={{ ...style }}
      >
        {children}
      </div>

      <style jsx>{`
        .container-item {
          display: flex;
          background-color: ${bc};
          position: ${position};
          flex-direction: ${fd};
          justify-content: ${jc};
          align-items: ${ai};
          height: ${height};
          width: ${width};
          max-width: ${maxWidth};
          border-radius: 0.3rem;
          margin-bottom: ${mb};
          margin-top: ${mt};
          margin-right: ${mr};
          padding: ${padding};
          box-shadow: 0 0.53px 2px 0 rgba(0, 0, 0, 0.25);
          user-select: none;
          transition: background-color 0.3s ease-in-out;
        }

        .container-item:hover {
          cursor: ${cursor};
          box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.25);
        }

        .selected {
          color: white;
          background-color: var(--blue);
        }

        .inactive {
          background-color: var(--greyDark);
        }

        @media screen and (max-width: 650px) {
          .container-item {
            padding: ${paddingOnMob};
            margin-right: ${mrm};
            width: ${widthOnMob};
            max-width: ${widthOnMob};
          }
        }
      `}</style>
    </>
  )
}

export default React.memo(ContainerItem)
