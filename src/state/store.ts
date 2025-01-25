import {configureStore} from '@reduxjs/toolkit';
import {counterReducer} from './CounterReducer';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

export const store = configureStore({
    reducer: {
        counter: counterReducer, // "counter" должен совпадать с тем, что вы используете в useSelector
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// @ts-ignore
window.store = store;
