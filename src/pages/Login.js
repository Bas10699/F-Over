// import React, { useState } from 'react'

// const Login = () => {
//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")

//     const clickLogin = () => {
//         console.log("use", username)
//         console.log("pass", password)
//     }
//     return (
//         <div className='container mt-4'>
            
//             <label htmlFor='username' className='form-label'>ชื่อผู้ใช้</label>
//             <input
//                 type='text'
//                 className='form-control form-control-sm'
//                 id='username'
//                 value={username}
//                 onChange={(e) => { setUsername(e.target.value) }}>
//             </input>
//             <label htmlFor='password' className='form-label'>รหัสผ่าน</label>
//             <input
//                 type='text'
//                 className='form-control form-control-sm'
//                 id='password'
//                 value={password}
//                 onChange={(e) => { setPassword(e.target.value) }}>
//             </input>
//             <button className='btn btn-primary btn-sm mt-3 float-right' onClick={() => clickLogin()}>ลงชื่อเข้าใช้</button>
//         </div>
//     )
// }
// export default Login

import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/JobQueue');  // เปลี่ยนเส้นทางไปที่หน้า Dashboard
    } catch (err) {
      setError('Failed to log in: ' + err.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center pt-5">
      <div className="card p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </div>
    </div>
  );
}

export default Login;
