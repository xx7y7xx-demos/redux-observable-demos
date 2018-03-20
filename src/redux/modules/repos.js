import { Observable } from 'rxjs'; // eslint-disable-line
import axios from 'axios';

const initialState = {
  loading: false,
  data: [],
}

const LOAD = 'repos/LOAD';
const SUCCESS = 'repos/SUCCESS';
const FAILURE = 'repos/FAILURE';

export const loadRepos = (name) => ({
  type: LOAD,
  payload: {
    name,
  },
});
export const loadSuccess = (res) => ({
  type: SUCCESS,
  payload: {
    data: res.data,
  },
});
export const loadFailure = () => ({
  type: FAILURE,
});

export const reposEpic = action$ =>
  action$.ofType(LOAD)
    .mergeMap((action) => {
      return axios.get(`https://api.github.com/users/${action.payload.name}/repos?${Math.random()}`)
    })
    .map(loadSuccess)

export const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS:
      return {
        loading: false,
        data: action.payload.data,
      };
    case FAILURE:
      return {
        loading: false,
      };

    default:
      return state;
  }
};
