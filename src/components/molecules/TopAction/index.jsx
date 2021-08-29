import React from 'react'
import { ISend } from '../../../assets'
import { Button, Spacer } from '../../atoms'
import './TopAction.scss'

function TopAction() {
  return (
    <div className="actionWrapper">
      <div className="row">
        <div className="col-lg-10 my-2">
          <div className="left d-flex justify-content-between justify-content-sm-start">
            <Button w={150} varian="orange" label="Buy" />
            <Spacer w={10} />
            <Button w={150} varian="light-orange" label="Chart" />
            <Spacer w={10} />
            <Button icon={ISend} />
          </div>
        </div>
        <div className="col-lg-2 my-2">
          <Button w="100%" varian="purple" label="Connect Wallet" />
        </div>
      </div>
    </div>

  )
}

export default TopAction
