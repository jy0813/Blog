import React from 'react';
import styles from './index.module.css';

interface IProps {
  checked: boolean;
  children: string;
  disabled?: boolean;
  name?: string;
  classBind?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Index({
  checked = false,
  children,
  disabled = false,
  name,
  classBind,
  onChange,
  required,
}: IProps) {
  return (
    <label htmlFor={name} className={`${styles.label} ${classBind}`}>
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
        {required ? (
          <span className={styles.required}>(필수)</span>
        ) : (
          <span className={styles.choice}>(선택)</span>
        )}
      </p>
    </label>
  );
}

export default Index;
