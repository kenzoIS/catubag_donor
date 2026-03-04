"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SelectMethodPage() {
  const router = useRouter();

  const handleSelect = (method: string) => {
    // Navigates to the 'verify' folder in your structure
    router.push('/reset-password/verify');
  };

  return (
    <div className="forgot-pw-container">
      <div className="forgot-pw-card">
        {/* Back arrow to the previous Reset Password input */}
        <Link href="/reset-password" className="back-arrow-simple">〈</Link>

        <h1 style={{ fontSize: '2.2rem' }}>Reset Password</h1>
        <p className="forgot-subtitle">
          Select which contact should we use to reset your password
        </p>

        <div className="selection-container">
          {/* SMS Selection Card */}
          <div className="method-card" onClick={() => handleSelect('sms')}>
            <div className="method-icon">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="method-details">
              <span>Send Code via SMS</span>
              <p>********8131</p>
            </div>
          </div>

          {/* Email Selection Card */}
          <div className="method-card" onClick={() => handleSelect('email')}>
            <div className="method-icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="method-details">
              <span>Send Code via Email</span>
              <p>********@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}