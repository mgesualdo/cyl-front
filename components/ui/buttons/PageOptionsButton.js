import { useState } from 'react'
import useForms from '../../../hooks/useForms'

const ENTITY_ACTIONS = {
  person: [
    {
      text: 'Nueva persona',
      icon: 'fas fa-plus',
      handleClick: (showNewForm) => showNewForm(),
    },
    {
      text: 'Nueva persona',
      icon: 'fas fa-plus',
      handleClick: (showNewForm) => showNewForm(),
    },
  ],
}

const PageOptionsButton = ({ form }) => {
  const [showOptions, setShowOptions] = useState(false)
  const { cleanForm, showModal } = useForms({ form })
  const actions = ENTITY_ACTIONS[form]

  const showNewForm = () => {
    cleanForm()
    showModal()
  }

  return (
    <>
      <div
        className='posa r10 t5 br5 pl5 pr5 bs bcwhite cursorp'
        onClick={() => setShowOptions(!showOptions)}
      >
        <i className='fas fa-ellipsis' />
      </div>
      {showOptions && (
        <div className='df fdc posa r10 br5 bcwhite' style={{ top: '2rem' }}>
          {actions.map((a) => (
            <span
              onClick={() => a.handleClick(showNewForm)}
              className='p5 cursorp'
            >
              {a.text}
            </span>
          ))}
        </div>
      )}
    </>
  )
}

export default PageOptionsButton
