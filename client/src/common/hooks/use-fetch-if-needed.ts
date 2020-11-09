import React from 'react';

export const useFetchIfNeeded = (dispatch: (func: unknown) => void, fetch: () => void) => {
  React.useEffect(() => {
    dispatch(fetch());
  }, [dispatch, fetch]);
};
