import Head from '@components/Head';
import styles from './page.module.css';
import Footer from '@components/Footer';

interface PageProps {
    title?: string,
    desc?: string,
    ogImage?: string,
    children?: any
}

const Page = ({ title, desc, ogImage, children }: PageProps) => {
    return (
        <>
            <Head title={`${title ? `${title} – ` : ''}asterisk`} />
            <main className={styles.main}>
                {children}
                <Footer />
            </main>
        </>
    );
}

export default Page;