import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:3000/auth/login", { email, password })
            localStorage.setItem('token', res.data.token || '')
            navigate('/')
        } catch (err) {
            alert(err.response?.data?.message || 'Login Failed')
        }
    }
    return (
        <>
            <h2 className='text-center my-5'>Login Form</h2>
            <div className="d-flex justify-content-center align-items-center ">
                <div className="card shadow p-4 rounded-4" style={{ width: "400px" }}>
                    <h3 className="text-center mb-4  fw-bold">Enter Details</h3>
                    <form onSubmit={handleSubmit}>
                        {/* Username / Email */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-semibold">
                                Username / Email
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="Enter your username or email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label fw-semibold">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter your password"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {/* Remember Me */}
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="rememberMe"
                            />
                            <label className="form-check-label" htmlFor="rememberMe">
                                Remember Me
                            </label>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="btn btn-success w-100 fw-semibold"
                        >
                            Login
                        </button>
                      
                        <div className="text-center mt-3">
                            <small className="text-muted">
                                Don't Have An Account?{" "}
                                 <NavLink to="/register">
                            Register
                        </NavLink>
                            </small>
                        </div>
                        {/* Extra Links */}
                        <div className="text-center mt-3">
                            <small className="text-muted">
                                Forgot your password?{" "}
                                <a href="#" className="text-decoration-none">
                                    Reset here
                                </a>
                            </small>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login