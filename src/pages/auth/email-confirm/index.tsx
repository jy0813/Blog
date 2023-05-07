import React from 'react';
import Layout from '../../../components/template/Layout';

import { useSearchParams } from 'react-router-dom';

function Index() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('token'); // test

  return (
    <Layout>
      <h1>이메일 확인 페이지</h1>
      <h1>{query}</h1>
    </Layout>
  );
}

export default Index;
