import "../App.css"

const Login = () => {
    return (
    <div className="login-card">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <div className="form-options">
          <a href="#">Forgot Password?</a>
          <a href="#">Already a User?</a>
        </div>

        <button type="submit" className="btn-login">
          Login
        </button>
      </form>
    </div>
    )
}

export default Login