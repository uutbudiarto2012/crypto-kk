import React from 'react';
import { CardFeature, CardProject, Sidebar, Spacer, TopAction } from '../../components';
import './Home.scss';

function Home() {
  return (
    <div className="page">
      <div className="mainWrapper">
        <Sidebar />
        <div className="contentWrapper">
          <div className="topNavbar"></div>
          <div className="container-fluid">
            <Spacer h={20} />
            <TopAction />
            <Spacer h={20} />
            <CardProject />
            <Spacer h={20} />
            <CardFeature />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;
