import React, { useState } from 'react';
import Layout from '../../../components/template/Layout';
import Container from '../../../components/organism/Container';
import MypageCard from '../../../components/fo/MypageCard';
import UserEdit from '../../../components/fo/UserEdit';

export type UserData = {
  email: string;
  userName: string;
  follower: number;
  following: number;
  scrapBook: number;
  like: number;
  couponCount: number;
  profileImage: string;
};

const mockData = {
  email: 'test@gmail.com',
  userName: '테스트',
  follower: 0,
  following: 0,
  scrapBook: 0,
  like: 0,
  couponCount: 0,
  profileImage:
    'http://localhost:3000/static/media/avatar.5a59b12d76019f2e9291.webp',
};

function Index() {
  const [userData, setUserData] = useState<UserData>(mockData);
  return (
    <Layout>
      <Container classBind="flex gap-[2rem]">
        <MypageCard userData={userData} />
        <UserEdit userData={userData} />
      </Container>
    </Layout>
  );
}

export default Index;
