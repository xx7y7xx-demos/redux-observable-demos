import { combineReducers } from 'redux';

// App level store
import { pingReducer } from './modules/ping';
import { reposReducer } from './modules/repos';

const rootReducer = combineReducers({
  ping: pingReducer,
  repos: reposReducer,
});

export default rootReducer;
