import React from 'react';
import Input from '../../atom/Input';
import Button from '../../atom/Button';
import styles from './index.module.css';

interface IProps {
  name: string;
  value: string | number;
  type: string;
  infoText?: string;
  labelText?: string;
  buttonText: string;
  placeholder: string;
  classBind?: string;
  disabled?: boolean;
  btnDisabled?: boolean;
  maxLength?: number;
  isError?: boolean;
  errorMsg?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

function InputBtn({
  name,
  value,
  type,
  infoText,
  labelText,
  buttonText,
  placeholder,
  classBind,
  onChange,
  onClick,
  disabled = false,
  btnDisabled,
  isError = false,
  errorMsg,
  maxLength = 524288,
}: IProps) {
  const errorStyles = isError ? styles.error : '';
  return (
    <div className={`${styles['input-wrap']} ${classBind}`}>
      {labelText ? <label className={styles.label}>{labelText}</label> : ''}
      {infoText ? <p className={styles.info}>{infoText}</p> : ''}
      <div className={`${styles['input-btn']}`}>
        <Input
          name={name}
          value={value}
          type={type}
          disabled={disabled}
          maxLength={maxLength}
          isError={isError}
          placeholder={placeholder}
          onChange={onChange}
        />
        <Button onClick={onClick} disabled={btnDisabled}>
          {buttonText}
        </Button>
      </div>
      {isError && errorMsg && <p className={`${errorStyles}`}>{errorMsg}</p>}
    </div>
  );
}

export default InputBtn;
