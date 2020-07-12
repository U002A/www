import styles from './project.module.css';

interface ProjectProps {
  name: string,
  desc: string,
  link: string,
  img: string,
  theme?: 'dark' | 'light'
}

const Project = ({ name, desc, link, img, theme = 'dark' }: ProjectProps) => {
  return (
    <a href={link} className={styles.anchor}>
      <div
        className={styles.project}
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: 'top',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }}>
        <div className={styles.text_container}>
          <div className={styles.text_wrapper}>
            <p className={styles.name}>{name}</p>
            <p className={styles.desc}>{desc}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Project;