import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {counterReducer} from './CounterReducer';

export const store = configureStore({
    reducer: counterReducer
});

export const RootReducer = combineReducers({
    counter: counterReducer
})


export type RooStateType = ReturnType<typeof RootReducer>;

// @ts-ignore
window.store = store
