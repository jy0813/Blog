import React from 'react';
import styles from './index.module.css';

type headerLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface IProps {
  title: string;
  level: headerLevel;
  classBind?: string;
}

function Index({ title, level, classBind }: IProps) {
  return React.createElement(
    `h${level}`,
    { className: `${styles.heading} ${classBind}` },
    title,
  );
}
export default Index;
