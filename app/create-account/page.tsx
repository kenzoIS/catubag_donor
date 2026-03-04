"use client"; // Required for the navigation button to work

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CreateAccount() {
  const router = useRouter();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // This navigates to the folder: app/review/page.tsx
    router.push('/review'); 
  };

  return (
    <div className="login-container">
      {/* Left side: Flood background image */}
      <div className="left-banner" style={{ 
        backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/flood-bg.webp')" 
      }}>
        <img src="/logo.png" alt="Logo" className="center-logo" />
        <h1 style={{color: '#FBB03B'}}>Sign Up</h1>
        <p style={{color: 'white'}}>Verify your identity to get started</p>
      </div>

      {/* Right side: Account Details & ID Upload */}
      <div className="right-form">
        <div className="form-card" style={{ textAlign: 'left' }}>
          <h2 style={{ textAlign: 'left', fontSize: '1.8rem' }}>Create Account</h2>
          <p className="signup-text">Please provide your details below</p>

          <form onSubmit={handleSignUp}>
            <div className="input-group">
              <label>ID Number<span style={{color: 'red'}}>*</span></label>
              <input type="text" placeholder="Enter your ID number" required />
            </div>

            <label style={{ fontSize: '0.85rem', fontWeight: '500', display: 'block', marginBottom: '8px' }}>
              Upload ID for Verification<span style={{color: 'red'}}>*</span>
            </label>
            
            {/* Upload Box */}
            <div style={{
              border: '1px solid #ddd',
              borderRadius: '15px',
              padding: '30px',
              textAlign: 'center',
              backgroundColor: '#f9f9f9',
              marginBottom: '20px'
            }}>
              <img src="/upload-icon.png" alt="Upload" style={{ width: '40px', marginBottom: '10px' }} />
              <p style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Drop your ID here or click to browse</p>
              <p style={{ fontSize: '0.7rem', color: '#999' }}>Supported formats: JPG, PNG, PDF (Max 10MB)</p>
              <button type="button" className="login-button" style={{ 
                float: 'none', marginTop: '15px', width: 'auto', padding: '8px 20px', fontSize: '0.8rem' 
              }}>
                Browse Files
              </button>
            </div>

            {/* Submit Button to go to Review Page */}
            <button type="submit" className="login-button" style={{ width: '100%', float: 'none' }}>
              Sign Up
            </button>
          </form>
          
          <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.9rem' }}>
            Already have an account? <Link href="/" style={{ color: '#FBB03B', fontWeight: 'bold', textDecoration: 'none' }}>Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}