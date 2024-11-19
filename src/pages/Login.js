import React, { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const clickLogin = () => {
        console.log("use", username)
        console.log("pass", password)
    }
    return (
        <div className='container mt-4'>
            <h3>ลงชื่อเข้าใช้</h3>
            <label htmlFor='username' className='form-label'>ชื่อผู้ใช้</label>
            <input
                type='text'
                className='form-control form-control-sm'
                id='username'
                value={username}
                onChange={(e) => { setUsername(e.target.value) }}>
            </input>
            <label htmlFor='password' className='form-label'>รหัสผ่าน</label>
            <input
                type='text'
                className='form-control form-control-sm'
                id='password'
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}>
            </input>
            <button className='btn btn-success btn-sm mt-3' onClick={() => clickLogin()}>ลงชื่อเข้าใช้</button>
        </div>
    )
}
export default Login