import React from 'react';
import { ArtistModel } from 'src/api/models/artist.model';

import styles from './styles.module.scss';
import Text from 'src/components/Text';
import { useScroll } from 'src/common/hooks/use-scroll';
import WysiwygText from 'src/components/WysiwygText';
import Section from 'src/components/Sections/Section';
import DescriptionHeader from 'src/components/DescriptionHeader';

interface IProps {
  artist: ArtistModel;
}

const EventDescriptionSection: React.FC<IProps> = ({ artist }) => {
  const { descriptionHTML } = artist;

  const [scrollToAbout, aboutElementRef] = useScroll();
  const [scrollToDates, datesElementRef] = useScroll();

  return (
    <div className={styles.root}>
      <DescriptionHeader
        links={[
          { label: 'About', onClick: scrollToAbout },
          { label: 'Dates', onClick: scrollToDates },
        ]}
      />
      <Section classes={{ contentRoot: styles.description }} contentAlign="flex-start">
        <div className={styles.descriptionHeader}>
          <Text
            color="black"
            textAlign="left"
            fontSize="4.5rem"
            fontFamily="League Gothic"
            letterSpacing="1px"
            textTransform="uppercase"
          >
            About
          </Text>
          <Text
            color="black"
            textAlign="left"
            fontSize="3rem"
            fontFamily="League Gothic"
            letterSpacing="1.26px"
            textTransform="uppercase"
          >
            Gallery
          </Text>
        </div>
        <WysiwygText html={descriptionHTML} />
      </Section>
    </div>
  );
};

export default EventDescriptionSection;
