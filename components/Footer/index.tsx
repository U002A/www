import styles from './footer.module.css';

interface FooterProps {
  nav?: boolean,
  title?: string
}

const Footer = ({ nav = true, title }: FooterProps) => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <p className={styles.footerText}>under construction</p>
        <p className={styles.footerText}>&copy; {new Date().getFullYear()} asterisk</p>
      </footer>
    </div>
  );
}

export default Footer;