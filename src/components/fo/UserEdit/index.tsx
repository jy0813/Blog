import React from 'react';
import Title from '../../atom/Title';
import styles from './index.module.css';
import InputLabel from '../../atom/InputLabel';
import Button from '../../atom/Button';
import { UserData } from '../../../pages/auth/mypage';
import File from '../../atom/File';

interface IProps {
  userData: UserData;
}
function Index({ userData }: IProps) {
  return (
    <div className={styles['edit-wrap']}>
      <div className={styles['edit-area']}>
        <div className={styles['edit-header']}>
          <Title classBind="mb-[3rem]" title={'회원정보수정'} level={5} />
        </div>
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
          name="password"
          value={''}
          type={'text'}
          labelText={'비밀번호'}
          placeholder={'비밀번호'}
          onChange={() => console.log('')}
        />
        <InputLabel
          classBind="mb-[3rem]"
          name="passwordconfirem"
          value={''}
          type={'text'}
          labelText={'비밀번호 확인'}
          placeholder={'비밀번호'}
          onChange={() => console.log('')}
        />
        <File
          classBind="mb-[3rem]"
          name="profileimage"
          value={''}
          labelText={'프로필 이미지'}
          placeholder={'프로필 이미지'}
          onChange={() => console.log('')}
          accept={'image/jpg, image/png, image/jpeg'}
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
