import React, { ReactNode } from 'react';
import styles from './index.module.css';

type ButtonType = 'primary' | 'secondary';
type ButtonSize = 'small' | 'medium' | 'large' | 'full';

interface IProps {
  children: ReactNode;
  classBind?: string;
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
  onClick: () => void;
}

function Index({
  children,
  onClick,
  disabled = false,
  type = 'primary',
  size = 'full',
  classBind,
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
    <button
      className={`${styles.button} ${btnSizeClass} ${btnTypeClass} ${classBind}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Index;
