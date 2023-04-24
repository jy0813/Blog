import React, { ReactNode } from 'react';
import Button from './index';
import styles from './index.module.css';

type ButtonType = 'primary' | 'secondary';
type ButtonSize = 'small' | 'medium' | 'large' | 'full';

interface IProps {
  children: ReactNode;
  className?: string;
  size?: ButtonSize;
  type?: ButtonType;
  disabled: boolean;
  onClick: () => void;
}

function Index({
  children,
  onClick,
  disabled = false,
  type = 'primary',
  size = 'full',
}: IProps) {
  const btnSizeClass =
    size === 'full'
      ? styles.full
      : size === 'large'
      ? styles.large
      : size === 'small'
      ? styles.small
      : styles.medium;

  const btnTypeClass = type === 'primary' ? styles.primary : styles.secondary;
  return (
    <Button
      className={`${styles.button} ${btnSizeClass} ${btnTypeClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}

export default Index;
