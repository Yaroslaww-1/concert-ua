import qs from 'qs';

export const stringifyParams = (params: unknown) =>
  qs.stringify(params, { arrayFormat: 'indices', encodeValuesOnly: true, encode: false });

export const parseUrlParams = <T>(params: string): T => {
  const parsed = qs.parse(params, {
    ignoreQueryPrefix: true,
    decoder(value) {
      if (/^(\d+|\d*\.\d+)$/.test(value)) {
        return parseFloat(value);
      }

      let keywords = {
        true: true,
        false: false,
        null: null,
        undefined: undefined,
      };
      if (value in keywords) {
        return keywords[value as keyof typeof keywords];
      }

      return value;
    },
  });
  return (parsed as unknown) as T;
};
