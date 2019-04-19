import { useContext } from 'react';
// FIXME: This is a workaround to get the Context of React Router
// https://github.com/ReactTraining/react-router/issues/6430
// @ts-ignore
import { __RouterContext, RouteComponentProps } from 'react-router-dom';

export function useRouter<TParams = {}>(): RouteComponentProps<TParams> {
  return useContext(__RouterContext) as RouteComponentProps<TParams>;
}
