import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  header?: JSX.Element;
  footer?: JSX.Element;
  classes?: {
    root?: string;
    contentRoot?: string;
  };
}

const Section: React.FC<IProps> = ({ header = null, footer = null, children, classes }) => {
  return (
    <section className={`${styles.root} ${classes?.root || ''}`}>
      {header && <div className={styles.header}>{header}</div>}
      <div className={`${styles.content} ${classes?.contentRoot || ''}`}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </section>
  );
};

export default Section;
