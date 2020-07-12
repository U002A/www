import NextLink from 'next/link'
import styles from './header.module.css';
import Logo from './Logo';

interface HeaderProps {
  nav?: boolean,
  title?: string
}

const Header = ({ nav = true, title }: HeaderProps) => {
  const button: string = nav ? styles.nav_button : styles.not_button;
  const logoContainer = <div className={button}><Logo /></div>;
  let headerLogo: JSX.Element = <div></div>;
  let headerTitle: JSX.Element = <div></div>;

  if (nav) {
    headerLogo = (
      <NextLink href='/'>
        { logoContainer }
      </NextLink>
    );
  } else {
    headerLogo = logoContainer;
  }

  if (title) {
    headerTitle = (
      <div className={ styles.title }>
        <span>{ title }</span>
      </div>
    )
  }

  return (
    <div className={ styles.header }>
      { headerLogo }
      { headerTitle }
    </div>
  );
}

export default Header;