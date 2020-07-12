import Page from '@components/Page';
import Header from '@components/Header';
import Quote from '@components/Quote';
import Link from '@components/Link';
import Paragraph from '@components/Paragraph';

export default function Home() {
  return (
    <Page>
      <Header title='asterisk' nav={ false }/>
      <Quote attr='Steve Jobs'>
        Technology is nothing. What's important is that you have a faith in people, that they're basically good and smart, and if you give them tools, they'll do wonderful things with them.
      </Quote>
      <Paragraph>
        In software, the asterisk is the most common wildcard character. It's a kind of placeholder that could represent anything and everything.
      </Paragraph>
      <Paragraph>
        Asterisk is an experiment in building wonderful and beautiful tools for the web. View our current <Link href='/projects'>Projects</Link> or visit us on <Link href='//github.com/u002a/'>GitHub</Link>.
      </Paragraph>
    </Page>
  );
}
