import React from 'react'
import { ICard, ICardAct, IDoc, IDocAct, IEuro, IEuroAct, IHome, IHomeAct, ITrax, ITraxAtc } from '../../../assets'

function SidebarItem({ title, active }) {

  const isActive = `${active && 'active'}`
  const Icon = () => {
    if (title === "Home") {
      if (active) {
        return <img src={IHomeAct} alt={title} />
      }
      return <img src={IHome} alt={title} />
    }
    if (title === "Fast Trax") {
      active && <img src={ITraxAtc} alt={title} />
      return <img src={ITrax} alt={title} />
    }
    if (title === "Follow Whale") {
      if (active) {
        return <img src={IEuroAct} alt={title} />
      }
      return <img src={IEuro} alt={title} />
    }
    if (title === "In Development") {
      if (active) {
        return <img src={ICardAct} alt={title} />
      }
      return <img src={ICard} alt={title} />
    }
    if (title === "Documentation") {
      if (active) {
        return <img src={IDocAct} alt={title} />
      }
      return <img src={IDoc} alt={title} />
    }
    return null;
  }


  return (
    <div className={`sidebarItem ${isActive}`}>
      <div className="icon">
        <Icon />
      </div>
      <div className="label">
        <span className="text">{title}</span>
      </div>
    </div>
  )
}

export default SidebarItem
