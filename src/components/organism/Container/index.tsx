import React, { ReactNode } from 'react';
import styles from './index.module.css';

type ContainerSize = 'large' | 'medium' | 'small';
interface IContainer {
  children: ReactNode;
  size?: ContainerSize;
  classBind?: string;
}

function Index({ children, size = 'medium', classBind }: IContainer) {
  const containerSizeClass =
    size === 'large'
      ? styles.large
      : size === 'small'
      ? styles.small
      : styles.medium;
  return (
    <div className={`${styles.container} ${containerSizeClass} ${classBind}`}>
      {children}
    </div>
  );
}

export default Index;
