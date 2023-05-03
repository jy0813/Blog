import React from 'react';
import styles from './index.module.css';

interface IProps {
  name?: string;
  value: string | number;
  type: string;
  infoText?: string;
  labelText: string;
  placeholder: string;
  classBind?: string;
  disabled?: boolean;
  maxLength?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputLabel({
  name,
  value,
  type,
  infoText,
  labelText,
  placeholder,
  classBind,
  onChange,
  disabled = false,
  maxLength = 524288,
}: IProps) {
  return (
    <div className={`${classBind} ${styles['input_wrap']}`}>
      <label className={styles.label}>{labelText}</label>
      {infoText ? <p className={styles.info}>{infoText}</p> : ''}
      <input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        className={styles.input}
        onChange={onChange}
        disabled={disabled}
        maxLength={maxLength}
      />
    </div>
  );
}

export default InputLabel;
