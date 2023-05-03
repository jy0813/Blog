import React from 'react';
import Title from '../../atom/Title';
import styles from './index.module.css';
import Button from '../../atom/Button';
import { UserData } from '@/pages/auth/mypage';
import scrapBook from '../../../assets/images/scrap-img.png';
import like from '../../../assets/images/like-img.png';
import coupon from '../../../assets/images/coupon-img.png';
import share from '../../../assets/images/share-img.png';
import { Link } from 'react-router-dom';

interface IProps {
  userData: UserData;
}

function Index({ userData }: IProps) {
  return (
    <div className={styles['card-wrap']}>
      <div className={styles['sticky-profile']}>
        <button className={styles['share-btn']}>
          <img src={share} alt="공유하기" />
        </button>
        <div className={styles['profile-area']}>
          <img
            className={styles.profile}
            src={userData.profileImage}
            alt="프로필 이미지"
          />
          <Title title={userData.userName} level={2} />
          <p className={styles['user-email']}>{userData.email}</p>
          <div className={styles['follower-area']}>
            <p>
              팔로워 <Link to={'/'}>{userData.follower}</Link>
            </p>
            <p>
              팔로잉 <Link to={'/'}>{userData.following}</Link>
            </p>
          </div>
          <Button size="medium" onClick={() => console.log('')}>
            설정
          </Button>
        </div>
        <div className={styles['get-area']}>
          <Link to={'/'} className={styles['item-area']}>
            <img src={scrapBook} alt="스크랩북" />
            <p>스크랩북</p>
            <span>{userData.scrapBook}</span>
          </Link>
          <Link to={'/'} className={styles['item-area']}>
            <img src={like} alt="좋아요" />
            <p>좋아요</p>
            <span>{userData.like}</span>
          </Link>
          <Link to={'/'} className={styles['item-area']}>
            <img src={coupon} alt="쿠폰" />
            <p>내 쿠폰</p>
            <span>{userData.couponCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;
