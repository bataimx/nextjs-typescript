import { takeLatest } from 'redux-saga/effects';
import {
  ActionCreatorWithNonInferrablePayload,
  ActionCreatorWithPayload,
  createAction
} from '@reduxjs/toolkit';
import { IsAny, IsUnknown } from '@reduxjs/toolkit/dist/tsHelpers';
import ActionModel from '../../models/redux/ActionModel';

type sagaGenerator<T> = (action: ActionModel<T>) => Generator<any, void, T>

interface ActionCreatorWithPayloadExtends<T, Y extends string> extends ActionCreatorWithPayload<T, Y> {
  saga?: sagaGenerator<T>;
}
interface ActionCreatorWithNonInferrablePayloadExtends<T extends string> extends ActionCreatorWithNonInferrablePayload<T> {
  saga?: sagaGenerator<T>;
}
type ActionSaga<T> = IsAny<T, ActionCreatorWithPayloadExtends<any, string>, IsUnknown<T, ActionCreatorWithNonInferrablePayloadExtends<string>, any>>

export function createActionSaga<T>(
  actionName: string,
  actionSaga: sagaGenerator<T>
) {
  const newAction: ActionSaga<T> = createAction<T, string>(actionName);
  newAction.saga = actionSaga;
  return newAction;
}

export function takeLatestSaga<T>(asyncActionSaga: ActionSaga<T>) {
  return takeLatest.bind(this, asyncActionSaga.type, asyncActionSaga.saga);
}
