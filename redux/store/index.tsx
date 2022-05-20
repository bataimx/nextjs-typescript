import { Action, configureStore, ThunkAction, createSlice } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import loggerMiddleware from '../middlewares/loggerMiddleware';
import rootSaga from '../middlewares/saga';
import { combineReducers } from 'redux';
import { rootReducer } from '../reducers';
import { StoreModel } from '../../models';

// const sagaMiddleware = createSagaMiddleware();

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(loggerMiddleware).concat(sagaMiddleware),
// });

// sagaMiddleware.run(rootSaga);

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

const combinedReducer = combineReducers<any, any>(rootReducer as any);

const masterReducer = (state, action) => {
  switch (action.type) {
    case 'SERVER_UPDATE_STORE':
      return {
        ...state,
        ...action.payload
      } as StoreModel;
    case HYDRATE:
      return action.payload;
    default:
      return combinedReducer(state, action);
  }
};


const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: masterReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(loggerMiddleware).concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga);

  return store;
}

export const wrapper = createWrapper<AppStore>(makeStore);
