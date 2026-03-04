"use client"; // Required to handle the button click

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignupPage() {
  const router = useRouter();

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    // This moves the user to the folder app/create-account
    router.push('/create-account'); 
  };

  return (
    <div className="login-container">
      {/* Left Banner Section */}
      <div className="left-banner">
        {/* Fixed back arrow to go to the root login page */}
        <Link href="/" className="back-arrow">〈</Link>
        <img src="/logo.png" alt="Logo" className="center-logo" />
        <h1>Join Our<br />Team Today!</h1>
      </div>

      {/* Right Form Section */}
      <div className="right-form">
        <div className="form-card">
          <h2 style={{ marginBottom: '30px' }}>Sign Up</h2>
          
          <form onSubmit={handleNext}>
            <div className="input-group">
              <label>First Name<span style={{color: 'red'}}>*</span></label>
              <input type="text" required />
            </div>

            <div className="input-group">
              <label>Last Name<span style={{color: 'red'}}>*</span></label>
              <input type="text" required />
            </div>

            <div className="input-group">
              <label>Email<span style={{color: 'red'}}>*</span></label>
              <input type="email" required />
            </div>

            <div className="input-group">
              <label>Phone Number<span style={{color: 'red'}}>*</span></label>
              <input type="tel" required />
            </div>

            <div className="input-group">
              <label>Password<span style={{color: 'red'}}>*</span></label>
              <input type="password" required />
            </div>

            <div className="input-group">
              <label>Confirm Password<span style={{color: 'red'}}>*</span></label>
              <input type="password" required />
            </div>

            {/* Button trigger for the navigation logic */}
            <button type="submit" className="login-button" style={{ float: 'none', marginTop: '20px' }}>
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}