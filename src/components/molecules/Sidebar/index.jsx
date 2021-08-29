import React, { useState } from 'react'
import { useEffect } from 'react'
import { ILove, Logo } from '../../../assets'
import { SidebarItem, Spacer } from '../../atoms'
import './Sidebar.scss'

function Sidebar() {

  const [collapse, setCollapse] = useState('')

  const mQuery = window.innerWidth;
  useEffect(() => {
    if(mQuery <= 768){
      setCollapse('minimize')
    }else{
      setCollapse('')
    }
  }, [mQuery])

  const handelCollapse =()=>{
    if(collapse){
      setCollapse('')
    }else{
      setCollapse('minimize')
    }
  }


  return (
    <div className={`sidebarWrapper ${collapse}`}>
      <div className="sidebarHeader">
        <div className="logo">
          <img className="logoImg" src={Logo} alt="Logo" />
          <span className="logoText">Crypto</span>
        </div>
        <div className="menuToggler" onClick={handelCollapse}>
          <span className="_bar top"></span>
          <span className="_bar center"></span>
          <span className="_bar bottom"></span>
        </div>
      </div>
      <div className="sidebarBody">
        <Spacer h={30} />
        <SidebarItem title="Home" active />
        <SidebarItem title="Fast Trax" />
        <SidebarItem title="Follow Whale" />
        <SidebarItem title="In Development" />
        <SidebarItem title="Documentation" />
      </div>
      <div className="sidebarFooter">
        <div className="copy">
          <span>Made with</span>
          <img src={ILove} alt="" />
          <span> by Crypto</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
