import Link from 'next/link';

export default function ReviewPage() {
  return (
    <div className="login-container">
      {/* Left side: Flood background with overlay */}
      <div className="left-banner" style={{ 
        backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/flood-bg.webp')" 
      }}>
        <img src="/logo.png" alt="Logo" className="center-logo" />
        <h1 style={{color: '#FBB03B'}}>Registration Under Review</h1>
        <p style={{color: 'white', marginTop: '10px'}}>Your profile is being Verified</p>
      </div>

      {/* Right side: Status message */}
      <div className="right-form">
        <div className="form-card" style={{ textAlign: 'center', padding: '60px 40px' }}>
          
          {/* Main Review Illustration (Replaced Logo) */}
          <div style={{ marginBottom: '30px' }}>
            <img 
              src="/review-icon.png" 
              alt="Profile Under Review Illustration" 
              style={{ width: '220px', height: 'auto', display: 'block', margin: '0 auto' }} 
            />
          </div>
          
          <h2 style={{ 
            fontSize: '1.6rem', 
            fontWeight: 'bold', 
            marginBottom: '15px',
            color: '#000' 
          }}>
            Your profile is under review
          </h2>
          
          <p style={{ 
            color: '#666', 
            fontSize: '0.95rem', 
            lineHeight: '1.6', 
            marginBottom: '50px',
            maxWidth: '90%',
            margin: '0 auto 50px auto'
          }}>
            Your profile has been submitted & will be reviewed by our team. 
            You will be notified if any extra information is needed.
          </p>

          <Link href="/" style={{ textDecoration: 'none' }}>
            <button className="login-button" style={{ 
              float: 'none', 
              width: '100%', 
              padding: '16px',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}>
              Back to Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}