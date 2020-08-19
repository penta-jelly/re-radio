import { configureStore } from '@reduxjs/toolkit';

import { reducer } from './reducer';
import { middleware } from './middleware';

export const store = configureStore({ reducer, middleware });
export type AppState = ReturnType<typeof store.getState>;
