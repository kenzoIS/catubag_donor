export default function LoginPage() {
  return (
    <div className="login-container">
      {/* Left side: Background Image & Welcome text */}
      <div className="left-banner">
        {/* Corrected path based on your folder structure */}
        <img src="/logo.png" alt="Rescue Logo" className="center-logo" />
        <h1>Welcome Back<br />Site Manager!</h1>
      </div>

      {/* Right side: Form details */}
      <div className="right-form">
        <div className="form-card">
          <h2>Login</h2>
          <p className="signup-text">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>

          <form>
            <div className="input-group">
              <label>Email</label>
              {/* Uses the cream color from your CSS variables */}
              <input type="email" placeholder="Email" required />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Password" required />
            </div>

            <a href="/reset-password" className="forgot-link">Forgot Password?</a>

            {/* Align button right to match image */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
              <button type="submit" className="login-button">Login</button>
            </div>
          </form>

          {/* New "or login with?" section */}
          <div className="social-login" style={{ marginTop: '60px' }}>
            <p style={{ color: '#999', fontSize: '0.8rem' }}>or login with?</p>
            {/* Standard CSS class will now apply the proper sizing */}
            <img src="/google-icon.png" alt="Google Login" className="google-btn" />
          </div>
        </div>
      </div>
    </div>
  );
}