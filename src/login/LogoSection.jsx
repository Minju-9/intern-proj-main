import React from 'react';
// ✅ Vite 빌드 시 public 경로 문제 방지: assets 경로를 정확히 맞춤
import sejongLogo from '/src/assets/sejong_logo.png';
import logo from '/src/assets/logo_all.png';

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
