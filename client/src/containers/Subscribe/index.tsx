import React from 'react';

import { useDispatch } from 'react-redux';
import { fetchSubscribe } from './redux/actions';
import { useInitialFetch } from 'src/common/hooks/use-fetch-if-needed';

import SubscribeComponent from 'src/components/Subscribe/index';

const SubscribeContainer: React.FC = () => {
  const dispatch = useDispatch();
  useInitialFetch(dispatch, fetchSubscribe.request);

  return <SubscribeComponent onSubscribe={(email: string) => dispatch(fetchSubscribe.request(email))} />;
};

export default SubscribeContainer;
