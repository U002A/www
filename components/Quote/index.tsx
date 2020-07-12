import styles from './quote.module.css';

interface QuoteProps {
  attr: string,
  url?: string,
  children:any
}

const Quote = ({ attr, url, children }: QuoteProps) => {
  return (
    <div className={ styles.container }>
      <blockquote cite={ url } style={{ marginBottom: 'var(--space)'}}>{ children }</blockquote>
      <span className={ styles.attr }>{ attr }</span>
    </div>
  );
}

export default Quote;