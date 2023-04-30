import React from 'react';
import Title from '../../atom/Title';
import styles from './index.module.css';
import InputLabel from '../../molecule/InputLabel';
import Button from '../../atom/Button';
import { UserData } from '../../../pages/auth/mypage';
import Input from '../../atom/Input';

interface IProps {
  userData: UserData;
}
function Index({ userData }: IProps) {
  return (
    <div className={styles['edit-wrap']}>
      <div className={styles['edit-area']}>
        <Title classBind="mb-[3rem]" title={'회원정보수정'} level={5} />
        <InputLabel
          classBind="mb-[3rem]"
          name="email"
          value={userData.email}
          type={'text'}
          labelText={'이메일'}
          placeholder={'이메일'}
          onChange={() => console.log('')}
        />
        <InputLabel
          classBind="mb-[3rem]"
          name="nickname"
          value={userData.userName}
          type={'text'}
          labelText={'별명'}
          placeholder={'별명'}
          onChange={() => console.log('')}
        />
      </div>
      <div>
        <Button onClick={() => console.log('')}>회원 정보 수정</Button>
      </div>
    </div>
  );
}

export default Index;
