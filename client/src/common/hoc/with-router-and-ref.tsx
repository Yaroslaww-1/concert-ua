/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { withRouter } from 'react-router-dom';

export type ForwarderRefProps<HTMLElement> = {
  forwardRef: React.RefObject<HTMLElement>;
};

export const withRouterAndRef = <P extends object = any, HTMLElement = any>(Wrapped: React.ComponentType<P>) => {
  const WithRouter = withRouter(({ forwardRef, ...otherProps }: any) => {
    return <Wrapped forwardRef={forwardRef} {...otherProps} />;
  });
  const WithRouterAndRef = React.forwardRef<HTMLElement, P & { ref: React.RefObject<HTMLElement> }>(
    ({ ref: _ref, ...props }, ref) => <WithRouter {...props} forwardRef={ref} />,
  );
  const name = Wrapped.displayName || Wrapped.name;
  WithRouterAndRef.displayName = `withRouterAndRef(${name})`;
  return WithRouterAndRef;
};
