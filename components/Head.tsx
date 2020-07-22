import NextHead from 'next/head';

interface HeadProps {
    title: string,
    desc?: string,
    ogImage?: string,
    children?: any
}

const defaultDesc = 'Asterisk is an experiment in building practical and beautiful tools for the web.';
const defaultOgImage = 'https://raw.githubusercontent.com/U002A/assets/master/asterisk/og-white.png';

const Head = ({ title, desc = defaultDesc, ogImage = defaultOgImage, children }: HeadProps) => {
    return (
        <NextHead>
            <meta charSet='utf-8' />
            <meta httpEquiv='Content-Language' content='en' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />

            <title>{title}</title>
            <meta name='og:title' content={title} />
            <meta name='author' content='Kyle Huggins' />
            <meta name='description' content={desc} />
            <meta name='og:description' content={desc} />
            <meta name='og:image' content={ogImage} />
            <meta name='twitter:image' content={ogImage} />
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:site' content='@_kjhuggins' />

            <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
            <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
            <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
            <link rel='manifest' href='/icons/site.webmanifest' />
            <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#ffffff' />
            <link rel='shortcut icon' href='/icons/favicon.ico' />
            <meta name='msapplication-TileColor' content='#2d89ef' />
            <meta name='msapplication-config' content='/icons/browserconfig.xml' />
            <meta name='theme-color' content='#ffffff' />

            <link href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap' rel='preload' as='font' crossOrigin='anonymous' />

            {children}
        </NextHead>
    );
}

export default Head;