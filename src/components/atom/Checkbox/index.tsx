import React from 'react';
import styles from './index.module.css';

interface IProps {
  checked: boolean;
  children: string;
  disabled?: boolean;
  name?: string;
  classBind?: string;
  required?: boolean;
  requiredText?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox({
  checked = false,
  children,
  disabled = false,
  name,
  classBind,
  onChange,
  required,
  requiredText,
}: IProps) {
  return (
    <label className={`${styles.label} ${classBind}`}>
      <input
        name={name}
        className={styles.input}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        required={required}
        type="checkbox"
      />
      <p className={styles.text}>
        {children}
        {requiredText === '필수' ? (
          <span className={styles.required}>{`(${requiredText})`}</span>
        ) : requiredText === undefined ? null : (
          <span className={styles.choice}>{`(${requiredText})`}</span>
        )}
      </p>
    </label>
  );
}

export default Checkbox;
