import React from 'react';
import styles from './index.module.css';

interface IProps {
  name?: string;
  value: string | number;
  type: string;
  placeholder: string;
  classBind?: string;
  disabled?: boolean;
  maxLength?: number;
  isError?: boolean;
  errorMsg?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  name,
  value,
  type,
  placeholder,
  classBind,
  onChange,
  disabled = false,
  isError = false,
  errorMsg,
  maxLength = 524288,
}: IProps) {
  const errorStyles = isError ? styles.error : '';
  return (
    <div className={`${classBind} ${styles['input_wrap']}`}>
      <label className={`${styles['input_label']}`}>
        <input
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          className={`${styles.input} ${errorStyles}`}
          onChange={onChange}
          disabled={disabled}
          maxLength={maxLength}
        />
      </label>
      {isError && <p className={`${errorStyles}`}>{errorMsg}</p>}
    </div>
  );
}

export default Input;
