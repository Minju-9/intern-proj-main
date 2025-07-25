// src/login/LogoSection.jsx
import React from 'react';
import sejongLogo from '../assets/sejong_logo.png'
import logo from '../assets/logo_all.png'

export default function LogoSection() {
  return (
    <div className="logo-section">
      <div className="logo-box">
        <img
          src={sejongLogo}
          alt="세종시 로고"
          className="mobile-logo-image-sejong"
         />

        
        <img
          src={logo}
          alt="로고타이틀"
          className="mobile-logo-title"
         />
      </div>
      
    </div>
  );
}
