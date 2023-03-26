import { configureStore, combineReducers } from "@reduxjs/toolkit";
import errorReduser from "./errors";
import { logger } from "./middleware/logger";
import taskReducer from "./task";

const rootReducer = combineReducers({
  errors: errorReduser,
  tasks: taskReducer,
});

function createStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production",
  });
}

export default createStore;
