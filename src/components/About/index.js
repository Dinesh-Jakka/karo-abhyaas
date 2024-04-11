import React from 'react'
import Header from '../Header'

import './index.css'

const About = () => {
  return (
    <div className="about-route">
      <Header />
      <div className="about-container">
        <h1>KARO ABHAYAAS</h1>
        <p className="footer-menu-item">
         KARO ABHAYAAS 112, ELECTRONIC CITY BANGALORE, INDIA
        </p>
        <p className="footer-menu-item">
          Copyright © Karo Abhayaas. All rights reserved.
        </p>
        <p className="footer-menu-item">FOLLOW US</p>
        <p className="footer-menu-item">CONTACT US</p>
      </div>
    </div>
  );
}

export default About