import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import Button from '../../atom/Button';

function Index() {
  return (
    <footer>
      <div className={styles['footer-wrap']}>
        <div className={styles['customer-area']}>
          <Link className={styles['customer-link']} to={'/'}>
            고객센터
          </Link>
          <div className={styles['customer-info']}>
            <a href="tel:1670-0876">1670-0876</a>
            <time dateTime="09:00">09:00</time>
            <span>~</span>
            <time dateTime="18:00">18:00</time>
            <p>
              평일: 전체 문의 상담 가능 주말, 공휴일: 오늘의집 직접배송,
              이사/시공/수리 문의 상담 가능
            </p>
            <Button onClick={() => console.log('')}>
              카톡 상담 (평일 09:00 ~ 18:00)
            </Button>
            <Link className={styles.email} to={'/'}>
              이메일 문의
            </Link>
          </div>
        </div>
        <div className={styles['menu-area']}>
          <Link to={'/'}>회사소개</Link>
          <Link to={'/'}>채용정보</Link>
          <Link to={'/'}>이용약관</Link>
          <Link to={'/'}>개인정보 처리방침</Link>
          <Link to={'/'}>공지사항</Link>
          <Link to={'/'}>안전거래센터</Link>
          <Link to={'/'}>입점신청</Link>
          <Link to={'/'}>제휴/광고 문의</Link>
          <Link to={'/'}>사업자 구매 회원</Link>
          <Link to={'/'}>시공파트너 안내</Link>
          <Link to={'/'}>상품광고 소개</Link>
          <Link to={'/'}>고객의 소리</Link>
        </div>
        <div className={styles['info-area']}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
          asperiores blanditiis consequatur et fugiat harum illo in ipsam iusto
          laboriosam magnam mollitia nihil omnis, praesentium quidem ratione
          saepe sequi veniam? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Animi asperiores blanditiis consequatur et fugiat
          harum illo in ipsam iusto laboriosam magnam mollitia nihil omnis,
          praesentium quidem ratione saepe sequi veniam? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Animi asperiores blanditiis
          consequatur et fugiat harum illo in ipsam iusto laboriosam magnam
          mollitia nihil omnis, praesentium quidem ratione saepe sequi veniam?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
          asperiores blanditiis consequatur et fugiat harum illo in ipsam iusto
          laboriosam magnam mollitia nihil omnis, praesentium quidem ratione
          saepe sequi veniam? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Animi asperiores blanditiis consequatur et fugiat
          harum illo in ipsam iusto laboriosam magnam mollitia nihil omnis,
          praesentium quidem ratione saepe sequi veniam? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Animi asperiores blanditiis
          consequatur et fugiat harum illo in ipsam iusto laboriosam magnam
          mollitia nihil omnis, praesentium quidem ratione saepe sequi veniam?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
          asperiores blanditiis consequatur et fugiat harum illo in ipsam iusto
        </div>
      </div>
    </footer>
  );
}

export default Index;
