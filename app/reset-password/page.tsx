"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const router = useRouter();

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigates to the 'select' folder inside reset-password
    router.push('/reset-password/select');
  };

  return (
    <div className="forgot-pw-container">
      <div className="forgot-pw-card">
        {/* Small back arrow */}
        <Link href="/" className="back-arrow-simple">〈</Link>

        <h1>Forgot Password?</h1>
        <p className="forgot-subtitle">Enter your Phone Number or Email</p>

        <form onSubmit={handleContinue}>
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Phone Number or Email" 
              className="centered-input-field"
              required 
            />
          </div>

          <button type="submit" className="continue-btn">
            Continue
          </button>
        </form>

        <p className="forgot-footer-text">
          We'll send you a verification code to reset your password
        </p>
      </div>
    </div>
  );
}