import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  html: string;
}

const WysiwygText: React.FC<IProps> = ({ html }) => {
  return <div className={styles.root} dangerouslySetInnerHTML={{ __html: html }}></div>;
};

export default WysiwygText;
