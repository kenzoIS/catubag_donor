"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NewPasswordPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigates to the success folder we just created
    router.push('/reset-password/success');
  };

  return (
    <div className="forgot-pw-container">
      <div className="forgot-pw-card">
        {/* Back arrow to verify screen */}
        <Link href="/reset-password/verify" className="back-arrow-simple">〈</Link>

        <h1 style={{ fontSize: '2.2rem' }}>New Password</h1>
        <p className="forgot-subtitle">
          Your new password must be different from previous used passwords
        </p>

        <form onSubmit={handleReset}>
          {/* Password Input */}
          <div className="input-group" style={{ position: 'relative', textAlign: 'left' }}>
            <label style={{ marginLeft: '15px', fontSize: '0.85rem', fontWeight: '600' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                className="centered-input-field"
                required 
                style={{ textAlign: 'left', paddingRight: '50px', marginTop: '5px' }}
              />
              <i 
                className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'} password-toggle`}
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: '#999' }}
              ></i>
            </div>
          </div>

          {/* Confirm Password Input */}
          <div className="input-group" style={{ position: 'relative', textAlign: 'left', marginTop: '20px' }}>
            <label style={{ marginLeft: '15px', fontSize: '0.85rem', fontWeight: '600' }}>Confirm Password</label>
            <div style={{ position: 'relative' }}>
              <input 
                type={showConfirm ? "text" : "password"} 
                placeholder="••••••••" 
                className="centered-input-field"
                required 
                style={{ textAlign: 'left', paddingRight: '50px', marginTop: '5px' }}
              />
              <i 
                className={`fa-solid ${showConfirm ? 'fa-eye-slash' : 'fa-eye'} password-toggle`}
                onClick={() => setShowConfirm(!showConfirm)}
                style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: '#999' }}
              ></i>
            </div>
          </div>

          <button type="submit" className="login-button" style={{ float: 'none', width: '100%', marginTop: '40px', padding: '18px' }}>
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}