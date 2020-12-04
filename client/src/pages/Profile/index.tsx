import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './redux/actions';

import PageComponent from 'src/components/Page';
import { RootState } from 'src/redux/rootReducer';
import TabsHeader from './components/Tabs';
import PersonalInfo from './containers/PersonalInfo';
import Spinner from 'src/components/Spinner';

const ProfilePage: React.FC = () => {
  const loading = useSelector((state: RootState) => state.profile.loading.isLoading);
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
          <TabsHeader items={[{ index: 0, child: <PersonalInfo /> }]} />
        </PageComponent>
      )}
    </>
  );
};

export default ProfilePage;
