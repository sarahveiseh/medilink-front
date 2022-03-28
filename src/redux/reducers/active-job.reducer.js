import { JOBS_LOADED } from "../constants";

const jobsInitialState = {
  jobs: []
};

export default function activeJob(state = jobsInitialState, action) {
  switch (action.type) {
    case JOBS_LOADED:
      return Object.assign({}, state, {
        jobs: [...action.payload]
      });
    default:
      return state;
  }
}