import React from 'react';
import styles from './index.module.css';

interface IProps {
  name: string;
  value: string;
  placeholder: string;
  accept: string;
  disabled?: boolean;
  classBind?: string;
  labelText?: string;
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
    <div>
      <label htmlFor={name} className={styles.label}>
        {labelText}
      </label>
      <input
        type="file"
        name={name}
        value={value}
        placeholder={placeholder}
        className={`${styles.input} ${classBind}`}
        onChange={onChange}
        disabled={disabled}
        accept={accept}
      />
    </div>
  );
}

export default Index;
