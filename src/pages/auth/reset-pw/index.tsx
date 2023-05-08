import React, { useState } from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import indexLogo from '../../../assets/images/login-logo.png';
import Input from '../../../components/atom/Input';
import Button from '../../../components/atom/Button';

type NewPasswordProps = {
  password: string;
  passwordConfirm: string;
};
function Index() {
  const [inputValues, setInputValues] = useState<NewPasswordProps>({
    password: '',
    passwordConfirm: '',
  });
  const { password, passwordConfirm } = inputValues;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className={styles['password-wrap']}>
      <h1>
        <Link to={'/'}>
          <img src={indexLogo} alt="메인 이동" />
        </Link>
      </h1>
      <div className={styles['input-area']}>
        <Input
          name="password"
          value={password}
          type={'password'}
          placeholder={'새 비밀번호'}
          onChange={handleInput}
        />
        <Input
          classBind="mt-[1rem]"
          name="passwordConfirm"
          value={passwordConfirm}
          type={'password'}
          placeholder={'새 비밀번호 확인'}
          onChange={handleInput}
        />
        <Button classBind="mt-[1rem]" onClick={() => console.log('')}>
          비밀번호 변경하기
        </Button>
      </div>
    </main>
  );
}

export default Index;
