import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import loginLogo from '../../../assets/images/login-logo.png';
import styles from './index.module.css';
import Title from '../../../components/atom/Title';
import facebook from '../../../assets/images/sns-facebook.png';
import kakao from '../../../assets/images/sns-kakao.png';
import naver from '../../../assets/images/sns-naver.png';
import InputBtn from '../../../components/molecule/InputBtn';
import Checkbox from '../../../components/atom/Checkbox';
import Button from '../../../components/atom/Button';
import EmailAuthCode from '../../../components/fo/EmailAuthCode';
import axios, { AxiosError } from 'axios';
import Input from '../../../components/atom/Input';

type RegisterProps = {
  userName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  ageCheck: boolean;
  agreeToTerms: boolean;
  agreeToPrivacyPolicy: boolean;
  isMarketing: boolean;
  isEvent: boolean;
};

export type ErrorState = {
  [key: string]: {
    isError: boolean;
    errorMsg: string;
  };
};

interface ValidationRules {
  [key: string]: {
    condition: (value: string | boolean) => boolean;
    message: string;
  }[];
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()\-_=+[\]{};:'",.<>/?]{8,}$/;

function Index() {
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [emailAuth, setEmailAuth] = useState<boolean>(false);
  const [inputValues, setInputValue] = useState<RegisterProps>({
    userName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    ageCheck: false,
    agreeToTerms: false,
    agreeToPrivacyPolicy: false,
    isMarketing: false,
    isEvent: false,
  });
  const {
    userName,
    email,
    password,
    passwordConfirm,
    isMarketing,
    isEvent,
    ageCheck,
    agreeToTerms,
    agreeToPrivacyPolicy,
  } = inputValues;

  const [validates, setValidates] = useState<ErrorState>({
    email: {
      isError: false,
      errorMsg: '',
    },
    password: {
      isError: false,
      errorMsg: '',
    },
    passwordConfirm: {
      isError: false,
      errorMsg: '',
    },
    userName: {
      isError: false,
      errorMsg: '',
    },
  });

  useEffect(() => {
    setIsAllChecked(
      ageCheck &&
        agreeToTerms &&
        agreeToPrivacyPolicy &&
        isMarketing &&
        isEvent,
    );
  }, [inputValues]);

  const sendDuplicateRequest = async (email: string) => {
    const { data } = await axios.post(
      'http://localhost:8000/api/auth/duplicate/email',
      { email },
    );
    return data;
  };

  const sendEmailRequest = async (email: string) => {
    const { data } = await axios.post('http://localhost:8000/api/auth/email', {
      email,
    });
    setValidates((prev) => ({
      ...prev,
      email: {
        isError: false,
        errorMsg: '',
      },
    }));
    return data;
  };

  const handleRequestError = (err: unknown) => {
    if (err instanceof AxiosError) {
      const errorMessage = err.response?.data.message;
      if (errorMessage === 'Duplicate Email') {
        handleValidation('email', '중복된 이메일 입니다.');
      }
      if (errorMessage[0] === 'email must be an email') {
        handleValidation('email', '이메일 형식이 올바르지 않습니다.');
      }
    }
  };

  const submitEmail = async () => {
    try {
      await sendDuplicateRequest(email);
      const data = await sendEmailRequest(email);
      setEmailAuth(true);
      await localStorage.setItem('randomNumber', data.number);
    } catch (err) {
      handleRequestError(err);
    }
  };

  const handleInputValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    setValidates((prev) => ({
      ...prev,
      [name]: {
        isError: false,
        errorMsg: '',
      },
    }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleAllCheckbox = () => {
    setIsAllChecked((prev) => !prev);
    const isChecked = !isAllChecked;
    setInputValue((prev) => ({
      ...prev,
      ageCheck: isChecked,
      agreeToTerms: isChecked,
      agreeToPrivacyPolicy: isChecked,
      isMarketing: isChecked,
      isEvent: isChecked,
    }));
  };

  const isFormValid = () => {
    const isInputValueEmpty = Object.values(inputValues).every(
      (value) => value,
    );

    const isInputValidFalse = Object.values(validates).every(
      (validation) => !validation.isError,
    );

    return isInputValueEmpty && isInputValidFalse;
  };

  // const validationCheck = (name: string, value: string) => {
  //   if (name === 'email') {
  //     if (!value) {
  //       handleValidation('email', '이메일을 입력해주세요.');
  //     } else if (!emailRegex.test(value)) {
  //       handleValidation('email', '이메일 형식이 올바르지 않습니다');
  //     }
  //   } else if (name === 'password') {
  //     if (!value) {
  //       handleValidation('password', '비밀번호를 입력해주세요.');
  //     } else if (!passwordRegex.test(value)) {
  //       handleValidation(
  //         'password',
  //         '비밀번호는 영문, 숫자를 포함하여 8자 이상이어야 합니다.',
  //       );
  //     }
  //   } else if (name === 'passwordConfirm') {
  //     if (password !== value || !value) {
  //       handleValidation('passwordConfirm', '비밀번호가 일치하지 않습니다.');
  //     }
  //   } else if (name === 'userName') {
  //     if (!value) {
  //       handleValidation('userName', '닉네임을 입력해주세요.');
  //     }
  //     if (value.length < 2) {
  //       handleValidation('userName', '2자 이상 입력해주세요.');
  //     }
  //   }
  // };

  const handleValidation = (name: string, errorMsg: string) => {
    setValidates((prev) => ({
      ...prev,
      [name]: {
        isError: true,
        errorMsg: `${errorMsg}`,
      },
    }));
  };

  const validationRules: ValidationRules = {
    email: [
      {
        condition: (value) => !value,
        message: '이메일을 입력해주세요.',
      },
      {
        condition: (value) => !emailRegex.test(value as string),
        message: '이메일 형식이 올바르지 않습니다.',
      },
    ],
    password: [
      {
        condition: (value) => !value,
        message: '비밀번호를 입력해주세요.',
      },
      {
        condition: (value) => !passwordRegex.test(value as string),
        message: '비밀번호는 영문, 숫자를 포함하여 8자 이상이어야 합니다.',
      },
    ],
    passwordConfirm: [
      {
        condition: (value) => password !== value || !value,
        message: '비밀번호가 일치하지 않습니다.',
      },
    ],
    userName: [
      {
        condition: (value) => !value,
        message: '닉네임을 입력해주세요.',
      },
      {
        condition: (value) => (value as string).length < 2,
        message: '2자 이상 입력해주세요.',
      },
    ],
    requiredAgree: [
      {
        condition: (value) => !value,
        message: '2자 이상 입력해주세요.',
      },
    ],
  };

  const checkboxValid = () => {
    const required = [ageCheck, agreeToTerms, agreeToPrivacyPolicy].every(
      (isChecked) => isChecked,
    );
    if (!required) {
      const rules = validationRules['requiredAgree'];
      if (rules) {
        const invalidRule = rules.find((rule) => rule.condition(required));
      }
    }
  };

  checkboxValid();

  const validationCheck = (name: string, value: string | boolean) => {
    const rules = validationRules[name];
    if (rules) {
      const invalidRule = rules.find((rule) => rule.condition(value));
      if (invalidRule) {
        handleValidation(name, invalidRule.message);
      }
    }
  };

  return (
    <main className={styles['register-wrap']}>
      <h1>
        <Link to={'/'}>
          <img src={loginLogo} alt="로그인 로고" />
        </Link>
      </h1>
      <div className={styles['register-area']}>
        <div className={styles['register-head']}>
          <Title title={'회원가입'} level={3} />
          <div className={styles['sns-area']}>
            <p>SNS 계정으로 간편하게 회원가입</p>
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
        </div>
        <div className={styles['register-body']}>
          <InputBtn
            classBind="mb-[3rem]"
            name="email"
            value={email}
            type={'text'}
            labelText={'이메일'}
            buttonText={'인증'}
            placeholder={'이메일'}
            isError={validates.email.isError}
            errorMsg={validates.email.errorMsg}
            onChange={handleInputValues}
            onClick={submitEmail}
            onBlur={() => validationCheck('email', email)}
            btnDisabled={
              !email ||
              emailAuth ||
              validates.email.isError ||
              !emailRegex.test(email)
            }
          />
          {emailAuth ? <EmailAuthCode classBind="mb-[3rem]" /> : null}
          <Input
            classBind="w-full mb-[3rem]"
            name="password"
            value={password}
            type={'password'}
            infoText={'영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.'}
            labelText={'비밀번호'}
            placeholder={'비밀번호'}
            isError={validates.password.isError}
            errorMsg={validates.password.errorMsg}
            onChange={handleInputValues}
            onBlur={() => validationCheck('password', password)}
          />
          <Input
            classBind="w-full  mb-[3rem]"
            name="passwordConfirm"
            value={passwordConfirm}
            type={'password'}
            labelText={'비밀번호 확인'}
            placeholder={'비밀번호 확인'}
            isError={validates.passwordConfirm.isError}
            errorMsg={validates.passwordConfirm.errorMsg}
            onChange={handleInputValues}
            onBlur={() => validationCheck('passwordConfirm', passwordConfirm)}
          />
          <Input
            classBind="w-full  mb-[3rem]"
            name="userName"
            value={userName}
            type={'text'}
            infoText={'다른 유저와 겹치지 않도록 입력해주세요. (2~15자)'}
            labelText={'닉네임'}
            placeholder={'닉네임'}
            maxLength={15}
            isError={validates.userName.isError}
            errorMsg={validates.userName.errorMsg}
            onChange={handleInputValues}
            onBlur={() => validationCheck('userName', userName)}
          />
          <Title title={'약관동의'} level={5} />
          <div className={`${styles['agree-area']}`}>
            <div className={styles['all-checkbox-area']}>
              <Checkbox
                name="allAgree"
                checked={isAllChecked}
                required={true}
                onChange={handleAllCheckbox}
              >
                전체동의
              </Checkbox>
            </div>
            <Checkbox
              classBind="mt-[2rem]"
              name="ageCheck"
              checked={ageCheck}
              required={true}
              onChange={handleCheckbox}
            >
              만 14세 이상입니다
            </Checkbox>
            <Checkbox
              classBind="mt-[2rem]"
              name="agreeToTerms"
              checked={agreeToTerms}
              required={true}
              onChange={handleCheckbox}
            >
              이용약관
            </Checkbox>
            <Checkbox
              classBind="mt-[2rem]"
              name="agreeToPrivacyPolicy"
              checked={agreeToPrivacyPolicy}
              required={true}
              onChange={handleCheckbox}
            >
              개인정보수집 및 이용동의
            </Checkbox>
            <Checkbox
              classBind="mt-[2rem]"
              name="isMarketing"
              checked={isMarketing}
              required={false}
              onChange={handleCheckbox}
            >
              개인정보 마케팅 활용 동의
            </Checkbox>
            <Checkbox
              classBind="mt-[2rem]"
              name="isEvent"
              checked={isEvent}
              required={false}
              onChange={handleCheckbox}
            >
              이벤트, 쿠폰, 특가 알림 메일 및 SMS 등 수신
            </Checkbox>
          </div>
          <Button
            classBind="mt-[3rem]"
            disabled={!isFormValid()}
            onClick={() => console.log('')}
          >
            회원가입하기
          </Button>
          <p className={styles['login-area']}>
            이미 아이디가 있으신가요? <Link to={'/auth/login'}>로그인</Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Index;
