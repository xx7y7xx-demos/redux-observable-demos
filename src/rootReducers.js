import { combineReducers } from 'redux';

// App level store
import { pingReducer } from './ping';
import { reposReducer } from './redux/modules/repos';

const rootReducer = combineReducers({
  ping: pingReducer,
  repos: reposReducer,
});

export default rootReducer;
