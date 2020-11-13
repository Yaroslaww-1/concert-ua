import qs from 'qs';

export const stringifyParams = (params: unknown) =>
  qs.stringify(params, { arrayFormat: 'comma', encodeValuesOnly: true, encode: false });
