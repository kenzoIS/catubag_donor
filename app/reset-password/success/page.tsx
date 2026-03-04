"use client";

import { useRouter } from 'next/navigation';

export default function PasswordSuccessPage() {
  const router = useRouter();

  return (
    <div className="forgot-pw-container">
      <div className="forgot-pw-card">
        <h1 style={{ fontSize: '2.2rem', marginBottom: '40px' }}>Password Reset</h1>
        
        {/* Success Icon */}
        <div className="success-icon-container">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 11V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7V11C5.89543 11 5 11.8954 5 13V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V13C19 11.8954 18.1046 11 17 11ZM12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16C14 17.1046 13.1046 18 12 18ZM9 11V7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7V11H9Z" fill="black"/>
            <rect x="9" y="15" width="6" height="2" fill="white" />
          </svg>
        </div>

        <div style={{ marginTop: '30px', marginBottom: '40px' }}>
          <p className="forgot-subtitle" style={{ margin: '0' }}>Your Password has been changed!</p>
          <p className="forgot-subtitle" style={{ margin: '0' }}>Please Login again.</p>
        </div>

        {/* Back to Login Button */}
        <button 
          onClick={() => router.push('/')} 
          className="continue-btn" 
          style={{ backgroundColor: '#FBB03B' }}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}