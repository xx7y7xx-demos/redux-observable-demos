import { combineEpics } from 'redux-observable';

import { pingEpic } from './ping';
import { reposEpic } from './repos';

const rootEpic = combineEpics(
  pingEpic,
  reposEpic,
);

export default rootEpic;
