import React, { useState } from 'react';
import styles from './index.module.css';
import mainLogo from '../../../assets/images/logo.png';
import avatar from '../../../assets/images/avatar.webp';
import { Link } from 'react-router-dom';
import Input from '../../atom/Input';
import Button from '../../atom/Button';

function Index() {
  const [userData, setUserData] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  return (
    <header>
      <div className={styles['sticky-container']}>
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
              name="searchValue"
              value={searchValue}
              type={'text'}
              placeholder={'통합검색'}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {userData && userData ? (
              <div className={styles['user-area']}>
                <Link to={'/'}>스크랩북</Link>
                <Link to={'/'}>내 소식</Link>
                <Link to={'/'}>장바구니</Link>
                <Link to={'/auth/mypage'}>
                  <div className={styles['user-profile']}>
                    <img src={avatar} alt="프로필 이미지" />
                  </div>
                </Link>
              </div>
            ) : (
              <div className={styles['user-area']}>
                <Link to={'/'}>장바구니</Link>
                <Link to={'/auth/login'}>로그인</Link>
                <Link to={'/auth/register'}>회원가입</Link>
                <Link to={'/'}>고객센터</Link>
              </div>
            )}
            <Button classBind="flex-shrink" onClick={() => console.log()}>
              글쓰기
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Index;
