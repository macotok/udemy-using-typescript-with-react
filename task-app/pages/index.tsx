import * as React from 'react';
import { NextPage } from 'next';
import { withApollo } from '../lib/apollo';

interface InitialProps {
  greeting: string;
}

interface Props extends InitialProps {}

const IndexPage: NextPage<Props, InitialProps> = (props) => {
  return (
    <div>{props.greeting}</div>
  )
};

IndexPage.getInitialProps = async () => ({
  greeting: 'Hello World'
});

const IndexPageApollo = withApollo(IndexPage);

export default IndexPageApollo;
