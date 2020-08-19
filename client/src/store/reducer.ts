import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';
import { history } from 'lib/react-router/history';
import { authenticationReducer, AuthenticationReducerKey } from 'modules/authentication/store';

export const reducer = combineReducers({
  router: connectRouter(history),
  [AuthenticationReducerKey]: authenticationReducer,
});
