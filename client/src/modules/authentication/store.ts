import { createReducer, createAction } from '@reduxjs/toolkit';
import { User } from 'operations';
import { AppState } from 'store';

export type AuthenticationState =
  | {
      status: 'NOT_READY';
    }
  | {
      status: 'AUTHENTICATED';
      user: User;
    }
  | {
      status: 'UNAUTHENTICATED';
    };

export const setAuthenticatedUser = createAction<User>('setAuthenticatedUser');
export const removeAuthenticatedUser = createAction('removeAuthenticatedUser');

const initialState: AuthenticationState = { status: 'NOT_READY' };

export const AuthenticationReducerKey = 'authentication';
export const authenticationReducer = createReducer<AuthenticationState>(initialState, (builder) => {
  return builder
    .addCase(setAuthenticatedUser, (state, action) => ({
      ...state,
      status: 'AUTHENTICATED',
      user: action.payload,
    }))
    .addCase(removeAuthenticatedUser, () => ({
      status: 'UNAUTHENTICATED',
    }));
});

export class AuthenticationSelector {
  static status(state: AppState) {
    return state.authentication.status;
  }

  static user(state: AppState): User | undefined {
    return state.authentication.status === 'AUTHENTICATED' ? state.authentication.user : undefined;
  }
}
