import { useEffect, useState } from "react";
import InputField from "../../components/common/InputField";

const DemoLoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const [hasError, setHasError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  useEffect(() => {
    const isValid = /^[0-9]*$/.test(pin);
    setHasError(pin.length > 0 && !isValid);
    setShowSuccess(pin.length >= 4 && isValid);
  }, [pin]);

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      <header className="login__header">
        <div className="heading-secondary">
          <h2 className="heading-secondary__title">InputField Demo</h2>
        </div>
      </header>
      <section className="login">
        <div className="login__screen">
          <div className="login__content">
            <div className="u-margin-bottom-xl">
              <InputField
                label="Username"
                value={username}
                onChange={setUsername}
                type="text"
                dir={isRtl ? "rtl" : "ltr"}
              />
            </div>

            <div className="u-margin-bottom-xl">
              <InputField
                label="Pin"
                value={pin}
                onChange={setPin}
                type="password"
                showToggle
                maxLength={8}
                showValidation
                hasError={hasError}
                showSuccess={showSuccess}
                errorMessage="Please enter only numbers"
                successMessage="Valid PIN"
                infoMessage="Only numeric input allowed"
                dir={isRtl ? "rtl" : "ltr"}
              />
            </div>
          </div>

          <div className="login__footer">
            <button className="btn">Login</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoLoginPage;
