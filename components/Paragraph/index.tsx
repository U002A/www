import styles from './paragraph.module.css';

interface ParagraphProps {
  children: any
}

const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <p className={ styles.paragraph }>{ children }</p>
  )
}

export default Paragraph;