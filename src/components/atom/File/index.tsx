import React from 'react';
import styles from './index.module.css';

interface IProps {
  name: string;
  value: string;
  placeholder: string;
  accept: string;
  disabled?: boolean;
  classBind?: string;
  labelText: string;
  onChange: () => void;
}

function Index({
  name,
  value,
  placeholder,
  accept,
  disabled = false,
  onChange,
  classBind,
  labelText,
}: IProps) {
  return (
    <div className={`${classBind}`}>
      <label className={styles.label}>{labelText}</label>
      <label htmlFor={name} className={styles.thumbnail}>
        <input
          type="file"
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          className={`${styles.input} ${classBind}`}
          onChange={onChange}
          disabled={disabled}
          accept={accept}
        />
      </label>
    </div>
  );
}

export default Index;
