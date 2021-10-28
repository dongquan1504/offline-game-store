import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
// import thunk from "redux-thunk";
// import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
// import rootSaga from "./root-saga";

// const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  //   sagaMiddleware,
  // thunk
];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

// sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);

const storage = { store, persistor };

export default storage;
