import React, { useState } from 'react';
import Layout from '../../../components/template/Layout';
import Container from '../../../components/organism/Container';
import styles from './index.module.css';
import InputBtn from '../../../components/molecule/InputBtn';
import Button from '../../../components/atom/Button';
import axios, { AxiosError } from 'axios';
import { ErrorState } from '@/pages/auth/register';
import Title from '../../../components/atom/Title';

function Index() {
  const [emailValue, setEmailValue] = useState<string>('');
  const [emailConfirm, setEmailConfirm] = useState<boolean>(false);
  const [validates, setValidates] = useState<ErrorState>({
    email: {
      isError: false,
      errorMsg: '',
    },
  });

  const handleInputValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmailValue(value);
    setValidates({
      email: {
        isError: false,
        errorMsg: '',
      },
    });
  };

  const handleSignUpCheck = async () => {
    try {
      const { status } = await axios.post(
        'http://localhost:8000/api/auth/subscribed/email',
        {
          email: emailValue,
        },
      );
      if (status === 201) {
        setEmailConfirm(true);
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        const errorMessage = err.response?.data.message;
        if (errorMessage === 'User with this email does not exist') {
          setValidates({
            email: {
              isError: true,
              errorMsg: '등록된 이메일 주소가 아닙니다.',
            },
          });
        }
        if (errorMessage[0] === 'email must be an email') {
          setValidates({
            email: {
              isError: true,
              errorMsg: '이메일 형식이 올바르지 않습니다.',
            },
          });
        }
      }
    }
  };
  const verificationEmail = async () => {
    try {
      await axios.post('http://localhost:8000/api/auth/find/password', {
        email: emailValue,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Layout>
      <Container classBind="flex items-center flex-1">
        <div className={styles['reset-wrap']}>
          <Title
            title={'비밀번호 재설정'}
            level={3}
            classBind="w-full flex justify-start mb-[2rem]"
          />
          <div className={styles['reset-area']}>
            <p>가입한 이메일 주소를 입력해주세요.</p>
            <p>
              비밀번호 재설정 링크가 포함된 메일이 계정의 이메일 주소로
              발송됩니다.
            </p>
            <InputBtn
              name="emailValue"
              value={emailValue}
              type={'text'}
              buttonText={emailConfirm ? '확인완료' : '확인'}
              placeholder={'이메일'}
              disabled={emailConfirm}
              btnDisabled={
                !emailValue || validates.email.isError || emailConfirm
              }
              isError={validates.email.isError}
              errorMsg={validates.email.errorMsg}
              onChange={handleInputValues}
              onClick={handleSignUpCheck}
            />
          </div>
          <Button
            classBind="mt-[2rem]"
            disabled={!emailConfirm}
            onClick={verificationEmail}
          >
            메일 발송
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
