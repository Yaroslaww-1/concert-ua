import qs from 'qs';

export const parseUrlParams = <T>(params: string): T => {
  const parsed = qs.parse(params, { comma: true, ignoreQueryPrefix: true });
  return (parsed as unknown) as T;
};
