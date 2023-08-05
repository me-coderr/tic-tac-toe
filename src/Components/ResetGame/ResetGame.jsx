import React, { useReducer } from 'react'

export default function ResetGame({onResetClick}) {

  return (
    <div className="reset-wrapper">
        <button type="reset" onClick={onResetClick} className='reset-btn'>Reset Game</button>
    </div>
  )
}
