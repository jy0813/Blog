import React, { useState } from 'react';
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
import InputLabel from '../../../components/atom/InputLabel';

function Index() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
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
          <InputBtn classBind="mb-[3rem]">
            <InputBtn.InputLabel
              name="email"
              value={''}
              type={'text'}
              labelText={'이메일'}
              placeholder={'이메일'}
              onChange={() => console.log('')}
            />
            <InputBtn.Button size={'large'} onClick={() => console.log('')}>
              인증
            </InputBtn.Button>
          </InputBtn>
          <InputLabel
            classBind="w-full mb-[3rem]"
            name="password"
            value={''}
            type={'text'}
            infoText={'영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.'}
            labelText={'비밀번호'}
            placeholder={'비밀번호'}
            onChange={() => console.log('')}
          />
          <InputLabel
            classBind="w-full  mb-[3rem]"
            name="passwordconfirm"
            value={''}
            type={'text'}
            labelText={'비밀번호 확인'}
            placeholder={'비밀번호 확인'}
            onChange={() => console.log('')}
          />
          <InputLabel
            classBind="w-full  mb-[3rem]"
            name="nickname"
            value={''}
            type={'text'}
            infoText={'다른 유저와 겹치지 않도록 입력해주세요. (2~15자)'}
            labelText={'닉네임'}
            placeholder={'닉네임'}
            maxLength={15}
            onChange={() => console.log('')}
          />
          <Title title={'약관동의'} level={5} />
          <div className={styles['agree-area']}>
            <div className={styles['all-checkbox-area']}>
              <Checkbox
                checked={isChecked}
                required={true}
                onChange={() => setIsChecked((prev) => !prev)}
              >
                전체동의
              </Checkbox>
            </div>
            <Checkbox
              classBind="mt-[2rem]"
              checked={isChecked}
              required={true}
              onChange={() => setIsChecked((prev) => !prev)}
            >
              만 14세 이상입니다
            </Checkbox>
            <Checkbox
              classBind="mt-[2rem]"
              checked={isChecked}
              required={true}
              onChange={() => setIsChecked((prev) => !prev)}
            >
              이용약관
            </Checkbox>
            <Checkbox
              classBind="mt-[2rem]"
              checked={isChecked}
              required={true}
              onChange={() => setIsChecked((prev) => !prev)}
            >
              개인정보수집 및 이용동의
            </Checkbox>
            <Checkbox
              classBind="mt-[2rem]"
              checked={isChecked}
              required={false}
              onChange={() => setIsChecked((prev) => !prev)}
            >
              개인정보 마케팅 활용 동의
            </Checkbox>
            <Checkbox
              classBind="mt-[2rem]"
              checked={isChecked}
              required={false}
              onChange={() => setIsChecked((prev) => !prev)}
            >
              이벤트, 쿠폰, 특가 알림 메일 및 SMS 등 수신
            </Checkbox>
          </div>
          <Button classBind="mt-[3rem]" onClick={() => console.log('')}>
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
