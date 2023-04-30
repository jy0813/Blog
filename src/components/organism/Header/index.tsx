import React, { useState } from 'react';
import styles from './index.module.css';
import mainLogo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import Input from '../../atom/Input';
import Button from '../../atom/Button';

function Index() {
  const [searchValue, setSearchValue] = useState<string>('');
  return (
    <header>
      <div className={styles['header-wrap']}>
        <h1 className={styles.logo}>
          <Link to={'/'}>
            <img src={mainLogo} alt="메인로고" />
          </Link>
        </h1>
        <nav className={styles['nav-wrap']}>
          <Link to={'/'}>커뮤니티</Link>
          <Link to={'/store'}>쇼핑</Link>
          <Link to={'/experts'}>이사/시공/수리</Link>
        </nav>
        <div className={styles['user-wrap']}>
          <Input
            classBind="mr-[1.4rem]"
            value={searchValue}
            type={'text'}
            placeholder={'통합검색'}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <div className={styles['user-area']}>
            <Link to={'/'}>장바구니</Link>
            <Link to={'/'}>로그인</Link>
            <Link to={'/'}>회원가입</Link>
            <Link to={'/'}>고객센터</Link>
          </div>
          <Button classBind="flex-shrink" onClick={() => console.log()}>
            글쓰기
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Index;
