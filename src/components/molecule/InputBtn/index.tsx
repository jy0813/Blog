import React, { ReactNode } from 'react';
import Input from '../../atom/Input';
import Button from '../../atom/Button';
import styles from './index.module.css';
import InputLabel from '../../atom/InputLabel';

interface IProps {
  children: ReactNode;
  classBind?: string;
  isError?: boolean;
  errorMsg?: string;
}

function Index({ children, classBind, isError = false, errorMsg }: IProps) {
  const errorStyles = isError ? styles.error : '';
  return (
    <div className={`${styles.input_btn} ${classBind}`}>
      {children}
      {isError && <p className={`${errorStyles}`}>{errorMsg}</p>}
    </div>
  );
}

export default Index;

Index.Input = Input;
Index.InputLabel = InputLabel;
Index.Button = Button;
