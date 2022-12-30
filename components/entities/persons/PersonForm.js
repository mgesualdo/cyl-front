import PersonVinculations from "./PersonVinculations"
import PersonDenomination from "./PersonDenomination"
import PersonAreas from "./PersonAreas"
import PersonTypes from "./PersonTypes"

const PersonForm = ({ setShowForm }) => {
  return (
    <div
      className="posa t0 l0 p5 w100p h100p"
      style={{ margin: "0 auto", zIndex: 2, background: "rgba(0,0,0,0.4)" }}
      onClick={() => setShowForm(false)}
    >
      <form
        className="df fdc aic jcc bcwhite pt5 pb5 pl10 pr10 br5 bs"
        style={{ margin: "3rem auto", zIndex: 10 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb10">Nueva persona</h2>
        <PersonTypes />
        <PersonDenomination />
        <PersonVinculations />
        <PersonAreas />
      </form>
    </div>
  )
}

export default PersonForm
