import React from 'react'
import './Button.scss'

function Button({w,varian,label,icon}) {
  return (
    <div style={{ width:w }} className={`myBtn ${varian}`}>
      {
        icon && <img src={icon} alt="" />
      }
      <span style={{ marginLeft:5 }}>{label}</span>
    </div>
  )
}

export default Button
