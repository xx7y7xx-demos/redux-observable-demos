import { combineEpics } from 'redux-observable';

import { pingEpic } from './ping';
import { reposEpic } from './redux/modules/repos';

const rootEpic = combineEpics(
  pingEpic,
  reposEpic,
);

export default rootEpic;
