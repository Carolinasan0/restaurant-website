import React from 'react';
import Logor from '../Images/logor.png';
import './Style/Layout.css';

function Layout(props) {
  return (

    <section className="layout">
      <div className="logo">
        <img className='logo' src={ Logor }/>
      </div>
      {props.children}
    </section>
  )
}

export default Layout;
