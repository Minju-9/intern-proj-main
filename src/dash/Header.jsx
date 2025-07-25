import React from 'react';
import sejongLogo from '../assets/sejong_logo.png'
import logoimg from '../assets/logo_all.png'

function Header({ toggleSidebar, toggleUserMenu, userMenuOpen }) {
  return (
    <header>
  <div className="header-left">
    <div className="menu-icon" onClick={toggleSidebar}>&#9776;</div>
    <div className="dash-logo-box">
      <img
        src={sejongLogo}
        alt="세종시 로고"
        className="dash-logo-sejong"
       />
       <img
        src={logoimg}
        alt="세종시 로고"
        className="dash-logo-title"
       />
    </div>
    <div className="nav-links">
    <a href="#" style={{ color: 'black', fontWeight: 'semibold' }}>대시보드</a>     
    <a href="#">Monitoring</a>
    </div>
  </div>
  <div className={`user-info ${userMenuOpen ? 'active' : ''}`} onClick={toggleUserMenu}>
    관리자 | gildongHong
    <div className="logout-menu">로그아웃</div>
  </div>
</header>

  );
}

export default Header;
