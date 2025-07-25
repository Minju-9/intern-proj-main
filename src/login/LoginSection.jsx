// src/login/LoginSection.jsx
import React from 'react';

function LoginButton({ className, text, onClick }) {
  return (
    <button className={`login-button ${className}`} onClick={onClick}>
      <div className="icon-box" />
      <span>{text}</span>
    </button>
  );
}

export default function LoginSection() {
  // ✅ 백엔드 OAuth2 URL로 바로 이동
  const handleLogin = (provider) => {
    if (provider === "naver") {
      window.location.href = "https://internproject-ohxn.onrender.com/oauth2/authorization/naver";
    } else if (provider === "kakao") {
      window.location.href = "https://internproject-ohxn.onrender.com/oauth2/authorization/kakao";
    } else if (provider === "google") {
      window.location.href = "https://internproject-ohxn.onrender.com/oauth2/authorization/google";
    }
    // ✅ 페이스북은 아직 미구현이면 무시하거나 주석처리
  };

  return (
    <div className="mobile-login">
      <LogoSection />

      <div className="mobile-login-buttons">
        <SocialLoginButton type="naver" />
        <SocialLoginButton type="kakao" />
        <SocialLoginButton type="facebook" />
        <SocialLoginButton type="google" />
      </div>

      <footer className="mobile-login-footer">
        <p>
          회원가입 및 로그인 시<br />
          서비스 및 개인정보 처리방침 동의로 간주합니다.
        </p>
      </footer>
    </div>
  );
}