import { useState, useEffect } from "react";
import EyeIcon from "../icon/EyeIcon";
import ErrorIcon from "../icon/ErrorIcon";
import SuccessIcon from "../icon/SuccessIcon";

interface InputFieldProps {
  label: string;
  value: string;
  setValue: (val: string) => void;
  type?: "text" | "password";
  showToggle?: boolean;
  maxLength?: number;
  showValidation?: boolean;
  hasError?: boolean;
  showSuccess?: boolean;
  infoMessage?: string;
  errorMessage?: string;
  successMessage?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  setValue,
  type = "text",
  showToggle = false,
  maxLength,
  showValidation = false,
  hasError = false,
  showSuccess = false,
  infoMessage = "",
  errorMessage = "Invalid input",
  successMessage = "Success",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setCharCount(value.length);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div className="login__subtitle">
        <label>{label}</label>
      </div>

      <div className="login__input-field">
        <input
          type={
            showToggle && type === "password"
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          placeholder=" "
          className="login__input"
          value={value}
          onChange={handleChange}
          maxLength={maxLength}
        />
        {showToggle && type === "password" && (
          <button
            type="button"
            className="login__toggle-password"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide input" : "Show input"}
          >
            <EyeIcon open={showPassword} />
          </button>
        )}
      </div>

      {showValidation && (
        <div className="login__input-note">
          {hasError ? (
            <span className="login__error">
              <ErrorIcon /> {errorMessage}
            </span>
          ) : showSuccess ? (
            <span className="login__success">
              <SuccessIcon /> {successMessage}
            </span>
          ) : (
            <span>{infoMessage}</span>
          )}
          {maxLength && (
            <span className="login__counter">
              {charCount}/{maxLength}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default InputField;
