import React, { ReactNode } from 'react';
import Input from '../../atom/Input';
import Button from '../../atom/Button';
import styles from './index.module.css';
import InputLabel from '../../atom/InputLabel';

interface IProps {
  children: ReactNode;
  classBind?: string;
}

function Index({ children, classBind }: IProps) {
  return <div className={`${styles.input_btn} ${classBind}`}>{children}</div>;
}

export default Index;

Index.Input = Input;
Index.InputLabel = InputLabel;
Index.Button = Button;
