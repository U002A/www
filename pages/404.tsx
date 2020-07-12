import Page from '@components/Page';
import Header from '@components/Header';
import Quote from '@components/Quote';
import Link from '@components/Link';
import Heading from '@components/Heading';

export default function Custom404() {
  return (
    <Page title='Error 404'>
      <Header title='error' />
      <Heading>404 – Page not found</Heading>
      <p>We couldn't find the page you were for.</p>
    </Page>
  );
}