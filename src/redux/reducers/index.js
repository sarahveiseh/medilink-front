import { combineReducers } from "redux";
import activeJob from "./active-job.reducer";


const rootReducer = combineReducers({ activeJob });
export default rootReducer;
