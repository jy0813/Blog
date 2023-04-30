import React from 'react';
import Layout from '../../components/template/Layout';
import Title from '../../components/atom/Title';
import Container from '../../components/organism/Container';

function Index() {
  return (
    <Layout>
      <Container>
        <Title title={'메인'} level={1} />
      </Container>
    </Layout>
  );
}

export default Index;
