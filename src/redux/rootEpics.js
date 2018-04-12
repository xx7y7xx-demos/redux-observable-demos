import { combineEpics } from "redux-observable";

import { pingEpic } from "./modules/ping";
import { reposEpic, repoEpic } from "./modules/repos";

const rootEpic = combineEpics(pingEpic, reposEpic, repoEpic);

export default rootEpic;
