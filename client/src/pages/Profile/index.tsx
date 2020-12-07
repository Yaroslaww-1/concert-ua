import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'src/redux/rootReducer';
import { fetchUser } from './containers/PersonalInfo/redux/actions';

import PageComponent from 'src/components/Page';
import TabsHeader from './components/Tabs';
import PersonalInfo from './containers/PersonalInfo';
import Spinner from 'src/components/Spinner';
import Footer from 'src/components/Footer';
import LikedEventsByUser from './containers/LikedEventsByUser';
import SubscribeContainer from 'src/containers/Subscribe';

const ProfilePage: React.FC = () => {
  const loading = useSelector((state: RootState) => state.profile.user.loading.isLoading);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUser.request());
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <PageComponent>
          <TabsHeader
            items={[
              { index: 0, child: <PersonalInfo /> },
              { index: 1, child: <LikedEventsByUser /> },
            ]}
          />
          <SubscribeContainer />
          <Footer />
        </PageComponent>
      )}
    </>
  );
};

export default ProfilePage;
