import { Middleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { history } from 'lib/react-router/history';

export const middleware: ReadonlyArray<Middleware> = [routerMiddleware(history)];
