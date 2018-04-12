import { Observable } from "rxjs"; // eslint-disable-line
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
  repoLoading: false,
  repoData: {}
};

const LOAD = "repos/LOAD";
const SUCCESS = "repos/SUCCESS";
const FAILURE = "repos/FAILURE";

/**
 * @param {String} name User name
 */
export const loadRepos = name => ({
  type: LOAD,
  payload: {
    name
  }
});
export const loadSuccess = res => ({
  type: SUCCESS,
  payload: {
    data: res.data
  }
});
export const loadFailure = () => ({
  type: FAILURE
});

// Load all repos of a user
export const reposEpic = action$ =>
  action$
    .ofType(LOAD)
    .mergeMap(action => {
      return axios.get(
        `https://api.github.com/users/${
          action.payload.name
        }/repos?${Math.random()}`
      );
    })
    .flatMap(
      response => {
        return Observable.concat(
          Observable.of(loadSuccess(response)),
          Observable.of(loadRepo(response.data[0].name))
        );
      }
      // Concat 2 observables so they fire sequentially
    );

const LOAD_REPO = "repo/LOAD";
const LOAD_REPO_SUCCESS = "repo/SUCCESS";
const LOAD_REPO_FAILURE = "repo/FAILURE";

/**
 * @param {String} name Repo name
 */
export const loadRepo = name => ({
  type: LOAD_REPO,
  payload: {
    name
  }
});
export const loadRepoSuccess = res => ({
  type: LOAD_REPO_SUCCESS,
  payload: {
    repoData: res.data
  }
});
export const loadRepoFailure = () => ({
  type: LOAD_REPO_FAILURE
});

// Load all repos of a user
export const repoEpic = action$ =>
  action$
    .ofType(LOAD_REPO)
    .mergeMap(action => {
      return axios.get(
        `https://api.github.com/repos/xxd3vin/${
          action.payload.name
        }?${Math.random()}`
      );
    })
    .map(loadRepoSuccess);

export const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    // load all repos
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      };
    case FAILURE:
      return {
        ...state,
        loading: false
      };

    // load a repo
    case LOAD_REPO:
      return {
        ...state,
        repoLoading: true
      };
    case LOAD_REPO_SUCCESS:
      return {
        ...state,
        repoLoading: false,
        repoData: action.payload.data
      };
    case LOAD_REPO_FAILURE:
      return {
        ...state,
        repoLoading: false
      };

    default:
      return state;
  }
};
