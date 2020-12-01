import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  header?: JSX.Element;
  footer?: JSX.Element;
  classes?: {
    root?: string;
    contentRoot?: string;
  };
  width?: number;
  contentAlign?: 'flex-start' | 'center';
}

const Section: React.FC<IProps> = ({
  header = null,
  footer = null,
  children,
  classes,
  width = null,
  contentAlign = 'center',
}) => {
  const getRootStyle = () => {
    const style: React.CSSProperties = {};
    style.alignItems = contentAlign;
    console.log(style);
    return style;
  };
  const getContentRootStyle = () => {
    const style: React.CSSProperties = {};
    if (width) {
      style.width = width;
    }
    return style;
  };
  return (
    <section className={`${styles.root} ${classes?.root || ''}`} style={getRootStyle()}>
      <div className={`${styles.content} ${classes?.contentRoot || ''}`} style={getContentRootStyle()}>
        {header && <div className={styles.header}>{header}</div>}
        <div className={styles.children}>{children}</div>
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </section>
  );
};

export default Section;
