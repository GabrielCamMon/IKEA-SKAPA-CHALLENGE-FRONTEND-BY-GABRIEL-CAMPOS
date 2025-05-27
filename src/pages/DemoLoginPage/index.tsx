import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import InputField from "../../components/common/InputField";
import Button from "../../components/common/Button";

const DemoLoginPage: React.FC = () => {
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const [hasError, setHasError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  useEffect(() => {
    setIsRtl(location.pathname.includes("/rtl"));
  }, [location]);

  useEffect(() => {
    const isValid = /^[0-9]*$/.test(pin);
    setHasError(pin.length > 0 && !isValid);
    setShowSuccess(pin.length >= 4 && isValid);
  }, [pin]);

  const title = isRtl ? "عرض حقل الإدخال" : "InputField Demo";

  return (
    <div dir={isRtl ? "rtl" : "ltr"}>
      <header className="login__header">
        <div className="heading-secondary">
          <h2 className="heading-secondary__title">{title}</h2>
        </div>
      </header>
      <section className="login">
        <div className="login__screen">
          <div className="login__content">
            <div className="u-margin-bottom-xl">
              <InputField
                label={isRtl ? "اسم المستخدم" : "Username"}
                value={username}
                onChange={setUsername}
                type="text"
                dir={isRtl ? "rtl" : "ltr"}
              />
            </div>

            <div className="u-margin-bottom-xl">
              <InputField
                label={isRtl ? "الرمز السري" : "Pin"}
                value={pin}
                onChange={setPin}
                type="password"
                showToggle
                maxLength={8}
                showValidation
                hasError={hasError}
                showSuccess={showSuccess}
                errorMessage={
                  isRtl ? "يرجى إدخال أرقام فقط" : "Please enter only numbers"
                }
                successMessage={isRtl ? "رمز صحيح" : "Valid PIN"}
                infoMessage={
                  isRtl ? "يسمح فقط بإدخال أرقام" : "Only numeric input allowed"
                }
                dir={isRtl ? "rtl" : "ltr"}
              />
            </div>
          </div>

          <div className="login__footer">
            <Button label={isRtl ? "تسجيل الدخول" : "Login"} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoLoginPage;
