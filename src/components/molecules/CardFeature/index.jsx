import React from 'react'
import { DummyAndorid, DummyChart, DummyEnvato, DummyMac } from '../../../assets'
import { Spacer,Button } from '../../atoms'

function CardFeature() {
  return (
    <div className="myCard">
      <h3>Featuring Apps</h3>
      <Spacer h={20} />
      <div className="row justify-content-center">
        <div className="col-md-3">
          <div className="projectItem">
            <img src={DummyAndorid} alt="" className="img-fluid" />
            <div className="appInfo px-2">
              <span className="appName d-block">App Description </span>
              <span className="appDesc d-block">
                Lorem ipsum dolor sit amet.
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="projectItem">
            <img src={DummyMac} alt="" className="img-fluid" />
            <div className="appInfo px-2">
              <span className="appName d-block">App Description </span>
              <span className="appDesc d-block">
                Lorem ipsum dolor sit amet.
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="projectItem">
            <img src={DummyEnvato} alt="" className="img-fluid" />
            <div className="appInfo px-2">
              <span className="appName d-block">App Description </span>
              <span className="appDesc d-block">
                Lorem ipsum dolor sit amet.
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="projectItem">
            <img src={DummyChart} alt="" className="img-fluid" />
            <div className="appInfo px-2">
              <span className="appName d-block">App Description </span>
              <span className="appDesc d-block">
                Lorem ipsum dolor sit amet.
              </span>
            </div>
          </div>
        </div>
        <div className="w--100"></div>
        <Spacer h={20} />
        <div className="col-md-3">
          <Button label="And more in development" varian="light-orange" />
        </div>
      </div>
    </div>
  )
}

export default CardFeature
