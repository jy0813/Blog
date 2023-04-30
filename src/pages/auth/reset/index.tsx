import React, { useState } from 'react';
import Layout from '../../../components/template/Layout';
import Container from '../../../components/organism/Container';
import styles from './index.module.css';
import InputBtn from '../../../components/molecule/InputBtn';
import Button from '../../../components/atom/Button';

function Index() {
  const [emailValue, setEmailValue] = useState<string>('');
  return (
    <Layout>
      <Container classBind="flex items-center flex-1">
        <div className={styles['reset-wrap']}>
          <div className={styles['reset-area']}>
            <p>가입한 이메일 주소를 입력해주세요.</p>
            <InputBtn>
              <InputBtn.Input
                value={emailValue}
                type={'text'}
                placeholder={'이메일'}
                onChange={(e) => setEmailValue(e.target.value)}
              />
              <InputBtn.Button
                size={'large'}
                disabled={!emailValue}
                onClick={() => console.log('')}
              >
                확인
              </InputBtn.Button>
            </InputBtn>
          </div>
          <Button classBind="mt-[2rem]" onClick={() => console.log('')}>
            이메일로 인증코드 받기
          </Button>
          <div className={styles['customer-area']}>
            <p>회원가입 시 입력한 정보가 기억나지 않는다면?</p>
            <a href="tel:1670-0876">고객센터 문의하기 (1670-0876)</a>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default Index;
