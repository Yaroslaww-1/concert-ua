import { Routes } from 'src/common/enum/routes';
import { History } from 'history';

export const redirectToLogin = <H = unknown>(history: History<H>) => {
  history.push(Routes.LOGIN);
};
