/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export const useInitialFetch = (
  dispatch: (func: unknown) => void,
  fetch: (params?: any) => void,
  fetchParams?: unknown,
) => {
  React.useEffect(() => {
    if (fetchParams) {
      dispatch(fetch(fetchParams));
    } else {
      dispatch(fetch());
    }
  }, [dispatch, fetch]);
};
