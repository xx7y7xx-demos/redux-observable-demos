import { combineEpics } from 'redux-observable';

import { pingEpic } from './modules/ping';
import { reposEpic } from './modules/repos';

const rootEpic = combineEpics(
  pingEpic,
  reposEpic,
);

export default rootEpic;
