import qs from 'qs';

export const parseUrlParams = <T>(params: string): T => {
  const parsed = qs.parse(params, {
    comma: true,
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
