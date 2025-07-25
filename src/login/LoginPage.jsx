// src/login/LoginPage.jsx
import React from 'react';
import './LoginPage.css'; // ✅ CSS 연결
import LogoSection from './LogoSection';
import LoginSection from './LoginSection';

export default function LoginPage() {
  return (
    <div className="login-container">
      <LogoSection />
      <LoginSection />
    </div>
  );
}
