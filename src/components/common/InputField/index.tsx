import { useState, useEffect } from "react";
import EyeIcon from "../icon/EyeIcon";
import ErrorIcon from "../icon/ErrorIcon";
import SuccessIcon from "../icon/SuccessIcon";

export interface InputFieldProps {
  /** The label text for the input field */
  label: string;
  /** The current value of the input */
  value: string;
  /** Callback function when value changes */
  onChange: (val: string) => void;
  /** HTML input type */
  type?: "text" | "password" | "email" | "tel" | "number";
  /** Whether to show password toggle (only for type="password") */
  showToggle?: boolean;
  /** Maximum character count */
  maxLength?: number;
  /** Whether to show validation messages */
  showValidation?: boolean;
  /** Whether the input has an error */
  hasError?: boolean;
  /** Whether to show success state */
  showSuccess?: boolean;
  /** Informational message (shown when no error/success) */
  infoMessage?: string;
  /** Error message (shown when hasError is true) */
  errorMessage?: string;
  /** Success message (shown when showSuccess is true) */
  successMessage?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Whether the input is required */
  required?: boolean;
  /** Direction for RTL support */
  dir?: "ltr" | "rtl" | "auto";
}

/**
 * A reusable InputField component that supports validation, password toggling, and RTL.
 *
 * @example
 * <InputField
 *   label="Password"
 *   value={password}
 *   onChange={setPassword}
 *   type="password"
 *   showToggle
 *   showValidation
 * />
 */
const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  type = "text",
  showToggle = false,
  maxLength,
  showValidation = false,
  hasError = false,
  showSuccess = false,
  infoMessage = "",
  errorMessage = "Invalid input",
  successMessage = "Success",
  placeholder = " ",
  disabled = false,
  required = false,
  dir = "auto",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const inputId = `input-${Math.random().toString(36).substr(2, 9)}`;
  const messageId = `${inputId}-message`;

  useEffect(() => {
    setCharCount(value.length);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div dir={dir}>
      <div className="input__label">
        <label htmlFor={inputId}>{label}</label>
      </div>

      <div className="input__field">
        <input
          id={inputId}
          type={
            showToggle && type === "password"
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          placeholder={placeholder}
          className="input"
          value={value}
          onChange={handleChange}
          maxLength={maxLength}
          disabled={disabled}
          required={required}
          aria-invalid={hasError}
          aria-describedby={showValidation ? messageId : undefined}
          aria-required={required}
        />
        {showToggle && type === "password" && (
          <button
            type="button"
            className="input__toggle-password"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? "Hide password" : "Show password"}
            style={dir === "rtl" ? { left: "12px", right: "auto" } : undefined}
          >
            <EyeIcon open={showPassword} />
          </button>
        )}
      </div>

      {showValidation && (
        <div id={messageId} className="input__note">
          {hasError ? (
            <span className="input__error" role="alert">
              <ErrorIcon /> {errorMessage}
            </span>
          ) : showSuccess ? (
            <span className="input__success">
              <SuccessIcon /> {successMessage}
            </span>
          ) : (
            <span>{infoMessage}</span>
          )}
          {maxLength && (
            <span className="input__counter">
              {charCount}/{maxLength}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default InputField;
