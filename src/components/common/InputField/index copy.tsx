// src/components/InputField/InputField.tsx
import React, { useState, useRef, useEffect } from "react";
import styles from "../../../styles/components/InputField.module.scss";

interface InputFieldProps {
  id: string;
  label?: string;
  type?: "text" | "password" | "email" | "tel" | "number" | "search";
  value?: string;
  placeholder?: string;
  helperText?: string;
  error?: string;
  success?: string;
  disabled?: boolean;
  required?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  autoFocus?: boolean;
  autoComplete?: string;
  dir?: "ltr" | "rtl";
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = "text",
  value = "",
  placeholder = "",
  helperText = "",
  error = "",
  success = "",
  disabled = false,
  required = false,
  prefix = null,
  suffix = null,
  maxLength,
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  readOnly = false,
  autoFocus = false,
  autoComplete = "off",
  dir = "ltr",
  className = "",
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur(e);
  };

  const containerClasses = [
    styles.container,
    className,
    error ? styles.error : "",
    success ? styles.success : "",
    disabled ? styles.disabled : "",
  ].join(" ");

  const helperTextClasses = [
    styles.helperText,
    error ? styles.error : "",
    success ? styles.success : "",
  ].join(" ");

  return (
    <div className={containerClasses} dir={dir}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <div className={styles.inputWrapper}>
        {prefix && <span className={styles.prefix}>{prefix}</span>}
        <input
          id={id}
          ref={inputRef}
          type={type}
          className={styles.input}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          maxLength={maxLength}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          aria-describedby={helperText ? `${id}-helper` : undefined}
          aria-invalid={!!error}
        />
        {suffix && <span className={styles.suffix}>{suffix}</span>}
      </div>

      {(helperText || error || success) && (
        <span id={`${id}-helper`} className={helperTextClasses}>
          {error || success || helperText}
        </span>
      )}
    </div>
  );
};

export default InputField;
