import React, { ReactNode } from 'react';
import Header from '../../organism/Header';
import Footer from '../../organism/Footer';
import styles from './index.module.css';

interface IProps {
  children: ReactNode;
}

function Index({ children }: IProps) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}

export default Index;
