import React from 'react'
import { IPapperAct } from '../../../assets'
import { Button, ProjectList, Spacer } from '../../atoms'

function CardProject() {
  return (
    <div className="myCard">
      <div className="row align-items-center">
        <div className="col-lg-8">
          <h3>Project Name</h3>
          <Spacer h={20} />
          <ProjectList key={1} description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old" />
          <ProjectList key={2} description="Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words" />
        </div>
        <div className="col-lg-4">
          <Button w="100%" label="Download Moonpaper" varian="light-orange" icon={IPapperAct} />
        </div>
      </div>
    </div>
  )
}

export default CardProject
