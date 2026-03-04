"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function VerifyCodePage() {
  const router = useRouter();
  // Array of 6 empty strings for the 6-digit OTP
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input automatically if value is entered
    if (element.nextSibling && element.value !== "") {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // Move to previous input on backspace if current is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevSibling = (e.currentTarget.previousSibling as HTMLInputElement);
      if (prevSibling) prevSibling.focus();
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigates to the new-password folder we created
    router.push('/reset-password/new-password'); 
  };

  return (
    <div className="forgot-pw-container">
      <div className="forgot-pw-card">
        {/* Back arrow to method selection */}
        <Link href="/reset-password/select" className="back-arrow-simple">〈</Link>

        <h1 style={{ fontSize: '2.2rem' }}>Verify Code</h1>
        <p className="forgot-subtitle">
          Please enter the code we sent to your email
        </p>

        <form onSubmit={handleVerify}>
          <div className="otp-container">
            {otp.map((data, index) => {
              return (
                <input
                  className="otp-input"
                  type="text"
                  name="otp"
                  maxLength={1}
                  key={index}
                  value={data}
                  onChange={e => handleChange(e.target, index)}
                  onKeyDown={e => handleKeyDown(e, index)}
                  onFocus={e => e.target.select()}
                  required
                />
              );
            })}
          </div>

          <p className="resend-text">
            Didn't receive a code? <a href="#" style={{ color: '#FBB03B', fontWeight: 'bold' }}>Resend</a>
          </p>

          <button type="submit" className="continue-btn" style={{ backgroundColor: '#FBB03B' }}>
            Verify
          </button>
        </form>
      </div>
    </div>
  );
}