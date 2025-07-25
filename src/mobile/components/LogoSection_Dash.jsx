

import React from 'react';
import logo from '../../assets/sejong_logo.png'; 
import logotext from '../../assets/maintext_logo.png'

export default function LogoSection_Dash() {
  return (
    <div className="mobile-mini-header">
      <img
        src={logo}
        alt="로고"
        className="mobile-mini-logo"
      />

      <img
        src={logotext}
        alt="로고텍스트"
        className="mobile-mini-logotext"
      />

    </div>

    
  );
}
