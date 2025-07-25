import React from 'react';
import '../mobile.css';

export default function LogoSection() {
  return (
    <div className="mobile-logo-section">
      <img
        src="/src/assets/sejong_logo.png"
        alt="Sejong Logo"
        className="mobile-logo-image-sejong"
      />
      <img
        src="/src/assets/maintext_logo.png"
        alt="Main Text"
        className="mobile-logo-image-maintext"
      />
      <img
        src="/src/assets/subtext_logo.png"
        alt="Sub Text"
        className="mobile-logo-image-subtext"
      />
      <p className="mobile-logo-text">
      </p>
    </div>
  );
}
