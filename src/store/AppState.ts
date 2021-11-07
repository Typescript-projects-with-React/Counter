import { combineReducers } from "redux";
import {countReducer} from "./CountReducer";

export const rootReducer = combineReducers({
  count: countReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
