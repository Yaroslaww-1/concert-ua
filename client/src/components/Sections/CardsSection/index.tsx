import React from 'react';

import styles from './styles.module.scss';
import Section from '../Section';
import TransparentButton from 'src/components/Buttons/TransparentButton';
import Text from 'src/components/Text';

interface IProps {
  header?: string;
  withLoadMore?: boolean;
  onLoadMore?: () => void;
}

const CardsSection: React.FC<IProps> = ({ header = null, withLoadMore = true, onLoadMore = () => {}, children }) => {
  return (
    <Section
      header={
        header ? (
          <Text
            fontSize="3rem"
            textTransform="uppercase"
            textAlign="left"
            color="black"
            letterSpacing="1px"
            fontFamily="League Gothic"
          >
            {header}
          </Text>
        ) : undefined
      }
      classes={{ contentRoot: styles.root }}
      footer={
        withLoadMore ? (
          <div className={styles.loadMoreButtonWrapper}>
            <TransparentButton onClick={onLoadMore} text={'Load more'} animationType={'growCenter'} color={'red'} />
          </div>
        ) : undefined
      }
    >
      <div className={styles.cardsWrapper}>{children}</div>
    </Section>
  );
};

export default CardsSection;
