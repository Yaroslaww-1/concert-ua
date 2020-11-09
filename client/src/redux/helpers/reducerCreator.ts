/* eslint-disable @typescript-eslint/no-explicit-any */
import { createReducer } from '@reduxjs/toolkit';
import { AsyncFunction } from './actionCreator';

export const createLoadingReducer = (asyncActions: AsyncFunction | AsyncFunction[]) => {
  if (!Array.isArray(asyncActions)) asyncActions = [asyncActions];
  const actionsMap: Record<string, any> = {};
  for (const asyncAction of asyncActions) {
    actionsMap[asyncAction.requestAction.type] = (
      state: { isLoading: boolean },
      action: ReturnType<typeof asyncAction.requestPayload>,
    ) => {
      state.isLoading = true;
    };
    actionsMap[asyncAction.successAction.type] = (
      state: { isLoading: boolean },
      action: ReturnType<typeof asyncAction.successPayload>,
    ) => {
      state.isLoading = false;
    };
    actionsMap[asyncAction.failureAction.type] = (state: { isLoading: boolean }, action: any) => {
      state.isLoading = false;
    };
  }
  const loading = createReducer<{ isLoading: boolean }>({ isLoading: false }, actionsMap);
  return loading;
};
