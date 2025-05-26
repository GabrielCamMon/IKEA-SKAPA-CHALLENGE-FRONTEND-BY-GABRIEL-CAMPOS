import { useState } from "react";

const DemoLoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login">
      <div className="login__screen">
        <div className="login__content">
          <h1 className="login__title">InputField Demo</h1>

          <div className="u-margin-bottom-xl">
            <h2 className="login__subtitle">Username</h2>

            <div className="login__input-field">
              <input
                type="text"
                id="username"
                placeholder=" "
                maxLength={8}
                className="login__input"
              />
            </div>
            <div className="login__input-note">
              Only numeric input allowed
              <span className="login__counter">0/8</span>
            </div>
          </div>

          <div className="u-margin-bottom-xl">
            <h2 className="login__subtitle">Pin</h2>
            <div className="login__input-field">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder=""
                className="login__input"
              />
              <button
                type="button"
                className="login__toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5C5.63636 5 2 12 2 12C2 12 5.63636 19 12 19C18.3636 19 22 12 22 12C22 12 18.3636 5 12 5Z"
                      stroke="#929292"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                      stroke="#929292"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5C5.63636 5 2 12 2 12C2 12 5.63636 19 12 19C18.3636 19 22 12 22 12C22 12 18.3636 5 12 5Z"
                      stroke="#929292"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                      stroke="#929292"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 4L4 20"
                      stroke="#929292"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="login__input-note">
              Only numeric input allowed
              <span className="login__counter">0/8</span>
            </div>
          </div>
        </div>

        <div className="login__footer">
          <button className="btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default DemoLoginPage;
