import React from 'react';
import { parseUrlParams } from 'src/common/url/params-parser';
import { stringifyParams } from '../url/stringify-params';
import { usePath } from './use-path';

export const useFilter = <F>({
  fetchItems,
  parseFilter,
}: {
  fetchItems: (_filter: F) => void;
  parseFilter: (parsedFilterFromUrl: F) => F;
}) => {
  const parseFilterUrlParams = (urlParams: string): F => {
    const parsedParams = parseUrlParams<F>(urlParams);
    const filter = parseFilter(parsedParams);
    return filter;
  };

  const [filter, setFilter] = React.useState<F>(parseFilterUrlParams(window.location.search));

  const onUpdateFilter = () => {
    const urlParams = window.location.search;
    const newFilter = parseFilterUrlParams(urlParams);
    setFilter(newFilter);
  };

  const path = usePath();
  React.useEffect(() => {
    onUpdateFilter();
  }, [path]);

  React.useEffect(() => {
    fetchItems(filter);
  }, [filter]);

  const updateFilterUrlParams = (_filter: F) => {
    const newUrlParams = stringifyParams(_filter);
    window.history.replaceState(null, '', `?${newUrlParams}`);
    onUpdateFilter();
  };

  const updateFilterUrlParam = (propertyName: keyof F) => (newValue: F[keyof F]) => {
    updateFilterUrlParams({
      ...filter,
      [propertyName]: newValue,
    });
    onUpdateFilter();
  };

  return {
    filter,
    parseFilterUrlParams,
    updateFilterUrlParams,
    updateFilterUrlParam,
  };
};
