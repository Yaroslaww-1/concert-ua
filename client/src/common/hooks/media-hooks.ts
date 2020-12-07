import { useMediaQuery } from 'react-responsive';

export const useIsDesktop = () =>
  useMediaQuery({
    minDeviceWidth: 1200,
  });

export const useIsTablet = () =>
  useMediaQuery({
    minDeviceWidth: 768,
    maxDeviceWidth: 1200,
  });
