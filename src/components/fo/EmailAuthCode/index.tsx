import React, { useState } from 'react';
import styles from './index.module.css';
import Error from '../../../assets/images/error-img.png';
import InputBtn from '../../molecule/InputBtn';

interface IProps {
  classBind?: string;
}

function Index({ classBind }: IProps) {
  const [emailAuthValue, setEmailAuthValue] = useState<string>('');
  const verificationNumber = () => {
    const localNumber = localStorage.getItem('randomNumber');
    if (emailAuthValue !== localNumber) {
      return alert('다시 이메일 인증을 완료해주세요.');
    }
    localStorage.removeItem('randomNumber');
    alert('인증완료');
  };
  return (
    <div className={`${styles['auth-wrap']} ${classBind}`}>
      <p className={styles.info}>이메일로 전송된 인증코드를 입력해주세요.</p>
      <InputBtn
        name="emailAuthValue"
        value={emailAuthValue}
        type={'text'}
        buttonText={'인증'}
        placeholder={'인증코드 6자리 입력'}
        btnDisabled={!emailAuthValue}
        onChange={(e) => setEmailAuthValue(e.target.value)}
        onClick={verificationNumber}
      />
      <div className={styles.resend}>
        <img src={Error} alt="경고" />
        <p>이메일을 받지 못하셨나요?</p>
        <button>이메일 재전송하기</button>
      </div>
    </div>
  );
}

export default Index;
