import { useState } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
const Register = () => {
    //for Register Users details
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:3000/auth/register", {
                name,
                email,
                password,
            });
            alert(res.data.message || "Account created successfully!");
            navigate("/login");
        } catch (err) {
            alert(err.response?.data?.message || "Registration failed!");
        }
    };
    return (
        <>
            <h2 className='text-center my-5'>Register Form </h2>
            <div className="d-flex justify-content-center align-items-center">
                <div className="card shadow p-4 rounded-4" style={{ width: "450px" }}>
                    <h3 className="text-center mb-4 text-success fw-bold">Create Account</h3>

                    <form onSubmit={handleSubmit}>
                        {/* Name */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label fw-semibold">
                                Full Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter your full name"
                                required
                                onChange={(e) => setName(e.target.value)}

                            />
                        </div>

                        {/* Username / Email */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-semibold">
                                Username / Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
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
                                placeholder="Create a password"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {/* Terms */}
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="terms"
                                required
                            />
                            <label className="form-check-label" htmlFor="terms">
                                I agree to the <a href="#">Terms & Conditions</a>
                            </label>
                        </div>

                        {/* Register Button */}
                        <button
                            type="submit"
                            className="btn btn-success w-100 fw-semibold"
                        >
                            Register
                        </button>

                        {/* Login Link */}
                        <div className="text-center mt-3">
                            <small className="text-muted">
                                Already have an account?{" "}
                                <NavLink to="/login" className="text-decoration-none">
                                    Login here
                                </NavLink>
                            </small>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register