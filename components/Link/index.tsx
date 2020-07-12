import NextLink from 'next/link'
import styles from './link.module.css';

interface LinkProps {
  external?: boolean,
  href: string,
  children: any
}

const Link = ({ external = false, href, children }: LinkProps) => {
  if (external) {
    return <a className={ styles.link } href={ href }>{ children }</a>;
  } else {
    return <NextLink href={href}>
      <a className={styles.link}>{children}</a>
    </NextLink>;
  }
}

export default Link;