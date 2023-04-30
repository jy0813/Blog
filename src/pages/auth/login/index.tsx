import React, { useState } from 'react';
import loginLogo from '../../../assets/images/login-logo.png';
import facebook from '../../../assets/images/sns-facebook.png';
import kakao from '../../../assets/images/sns-kakao.png';
import naver from '../../../assets/images/sns-naver.png';
import styles from './index.module.css';
import Input from '../../../components/atom/Input';
import Button from '../../../components/atom/Button';
import { Link } from 'react-router-dom';

type loginProps = {
  id: string;
  password: string;
};

function Index() {
  const [loginValue, setLoginValue] = useState<loginProps>({
    id: '',
    password: '',
  });

  const { id, password } = loginValue;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setLoginValue({
      ...loginValue,
      [name]: value,
    });
  };

  return (
    <main className={styles['login-wrap']}>
      <h1>
        <Link to={'/'}>
          <img src={loginLogo} alt="로그인 로고" />
        </Link>
      </h1>
      <div className={styles['input-area']}>
        <Input
          name="id"
          value={id}
          type={'text'}
          placeholder={'이메일'}
          onChange={handleInput}
        />
        <Input
          classBind="mt-[1rem]"
          name="password"
          value={password}
          type={'password'}
          placeholder={'비밀번호'}
          onChange={handleInput}
        />
        <Button classBind="mt-[1rem]" onClick={() => console.log('')}>
          로그인
        </Button>
        <div className={styles['link-area']}>
          <Link to={'/auth/reset'}>비밀번호 재설정</Link>
          <Link to={'/auth/register'}>회원가입</Link>
        </div>
        <div className={styles['sns-area']}>
          <p>SNS 계정으로 간편 로그인/회원가입</p>
          <div className={styles['sns-list']}>
            <a href="">
              <img src={facebook} alt="페이스북으로 회원가입" />
            </a>
            <a href="">
              <img src={kakao} alt="카카오톡으로 회원가입" />
            </a>
            <a href="">
              <img src={naver} alt="네이버로 회원가입" />
            </a>
          </div>
        </div>
        <Link className={styles['customer-link']} to={'/'}>
          로그인에 문제가 있으신가요?
        </Link>
      </div>
    </main>
  );
}

export default Index;
