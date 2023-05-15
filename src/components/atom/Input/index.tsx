import React from 'react';
import styles from './index.module.css';

interface IProps {
  name: string;
  value: string | number;
  type: string;
  infoText?: string;
  labelText?: string;
  placeholder: string;
  className?: string;
  classBind?: string;
  disabled?: boolean;
  maxLength?: number;
  isError?: boolean;
  errorMsg?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

function Input({
  name,
  value,
  type,
  infoText,
  labelText,
  placeholder,
  className,
  classBind,
  onChange,
  onBlur,
  disabled = false,
  isError = false,
  errorMsg,
  maxLength = 524288,
}: IProps) {
  const errorStyles = isError ? styles.error : '';
  return (
    <div className={`${classBind} ${styles['input_wrap']}`}>
      {labelText ? <label className={styles.label}>{labelText}</label> : null}
      {infoText ? <p className={styles.info}>{infoText}</p> : null}
      <input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        className={`${styles.input} ${errorStyles} ${className}`}
        onChange={onChange}
        disabled={disabled}
        maxLength={maxLength}
        onBlur={onBlur}
      />
      {isError && errorMsg && <p className={`${errorStyles}`}>{errorMsg}</p>}
    </div>
  );
}

export default Input;
