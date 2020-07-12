import styles from './heading.module.css';

interface HeadingProps {
    level?: number,
    children: any
}

const Heading = ({ level = 1, children }: HeadingProps) => {
    switch (level) {
        case 2:
            return <h2 className={ styles.h2 }>{ children }</h2>;
            break;
        case 3:
            return <h3 className={ styles.h3 }>{ children }</h3>;
            break;
        default:
            return <h1 className={ styles.h1 } >{ children }</h1>
            break;
    }
}

export default Heading;