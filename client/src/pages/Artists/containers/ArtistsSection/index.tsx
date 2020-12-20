import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useInitialFetch } from 'src/common/hooks/use-fetch-if-needed';
import { RootState } from 'src/redux/rootReducer';
import { fetchArtists } from './redux/actions';

import CardsSection from 'src/components/Sections/CardsSection';
import Artist from '../../components/Artists';

const ArtistsSection: React.FC = () => {
  const dispatch = useDispatch();
  const artists = useSelector((state: RootState) => state.artists.artists.state.artists);
  useInitialFetch(dispatch, fetchArtists.request);
  return (
    <CardsSection withLoadMore={false}>
      {artists.map((artist) => (
        <Artist key={artist.id} artist={artist} />
      ))}
    </CardsSection>
  );
};

export default ArtistsSection;
