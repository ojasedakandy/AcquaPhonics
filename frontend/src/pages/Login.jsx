import React from 'react';

function Login() {
  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Login</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input type="email" placeholder="Email" style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc' }} />
        <input type="password" placeholder="Password" style={{ padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc' }} />
        <button type="submit" style={{ padding: '0.8rem', backgroundColor: '#2c5e3f', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Login</button>
      </form>
    </div>
  );
}

export default Login;
