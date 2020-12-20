import React from 'react';
import { parseUrlParams, updateQuerystringParams, updateQuerystringParam } from 'src/common/url/qs-helper';
import { usePath } from './use-path';

export const useFilter = <F>({
  fetchItems,
  parseFilter,
}: {
  fetchItems: () => void;
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
    fetchItems();
  }, [filter]);

  const updateFilterUrlParams = (_filter: F) => {
    updateQuerystringParams(_filter);
    onUpdateFilter();
  };

  const updateFilterUrlParam = (propertyName: keyof F) => (newValue: F[keyof F]) => {
    updateQuerystringParam(propertyName as string, newValue);
    onUpdateFilter();
  };

  return {
    filter,
    parseFilterUrlParams,
    updateFilterUrlParams,
    updateFilterUrlParam,
  };
};
