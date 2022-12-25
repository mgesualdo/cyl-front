import React from "react"

const LateralItem = ({ text, icon, ml }) => {
  return (
    <div className="df aic cwhite cursorp">
      <i
        className={`${icon} mr10 mt10 mb10 tac db`}
        style={{ marginLeft: ml }}
      />

      <h3 className="cwhite ml5 wsnw">{text}</h3>
    </div>
  )
}

export default LateralItem
