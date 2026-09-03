import "./Login.css";

// Login page - UI only. Authentication & form handling to be implemented later.
export default function Login() {
  return (
    <main className="login-page" aria-label="Sign in to your account">
      <div className="login-form-card">
        <div className="login-form-heading">
          <h2>Welcome back</h2>
          <p>Sign in to continue to your dashboard</p>
        </div>

        <form className="login-form-body">
          <div className="login-field">
            <label htmlFor="login-email">Email address</label>
            <div className="login-input">
              <i className="fa fa-envelope"></i>
              <input
                id="login-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
          </div>

          <div className="login-field">
            <label htmlFor="login-password">Password</label>
            <div className="login-input">
              <i className="fa fa-lock"></i>
              <input
                id="login-password"
                name="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
              />
              <i className="fa fa-eye login-password-toggle" title="Show password"></i>
            </div>
          </div>

          <div className="login-options">
            <label className="login-remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#forgot" className="login-forgot">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="login-submit">
            Log in
          </button>
        </form>

        <p className="login-signup">
          Don&apos;t have an account? <a href="#signup">Sign up</a>
        </p>
      </div>
    </main>
  );
}