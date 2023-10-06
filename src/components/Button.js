import React from 'react'

function Button(props) {
  return (
    <button className="calc-btn" onClick={props.addToCurrent}>{props.btnvalue}</button>
  )
}

export default Button;