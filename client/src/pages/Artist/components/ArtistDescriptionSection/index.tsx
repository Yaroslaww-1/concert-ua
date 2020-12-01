import React from 'react';
import { ArtistModel } from 'src/api/models/artist.model';

import styles from './styles.module.scss';
import Text from 'src/components/Text';
import { useScroll } from 'src/common/hooks/use-scroll';
import WysiwygText from 'src/components/WysiwygText';
import Section from 'src/components/Sections/Section';
import DescriptionHeader from 'src/components/DescriptionHeader';
import { EventModel } from 'src/api/models/event.model';
import BuyTicket from '../BuyTicket';
import ArtistGallery from '../Gallery';

interface IProps {
  artist: ArtistModel;
  tickets: EventModel[];
}

const EventDescriptionSection: React.FC<IProps> = ({ artist, tickets }) => {
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
            ref={aboutElementRef}
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
        <ArtistGallery artist={artist} />
        <WysiwygText html={descriptionHTML} />
        <div className={styles.buyTickets}>
          <Text
            ref={datesElementRef}
            color="black"
            textAlign="left"
            fontSize="3rem"
            fontFamily="League Gothic"
            letterSpacing="1.26px"
            textTransform="uppercase"
          >
            Dates
          </Text>
          {tickets.map((ticket) => (
            <BuyTicket key={ticket.id} event={ticket} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default EventDescriptionSection;
