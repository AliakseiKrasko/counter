import React, { useEffect, useReducer } from 'react';
import './App.css';
import { CounterDisplay } from './CounterDisplay';
import { CounterButtons } from './CountersButtons';
import { Button } from './Button';
import {
    counterReducer,
    incrementAC,
    initialState,
    resetCounterAC,
    setValuesAC,
    EnableSetButtonAC,
    SetMaxErrorCounterAC,
    SetStartErrorCounterAC,
} from './state/CounterReducer';
import {useDispatch} from 'react-redux';

function AppWithRedux() {
    const dispatch = useDispatch()
    const [state] = useReducer(counterReducer, initialState);

    const increment = () => {
        dispatch(incrementAC());
    };

    const reset = () => {
        dispatch(resetCounterAC());
        dispatch(EnableSetButtonAC(false));
    };

    const onSet = () => {
        dispatch(setValuesAC(state.maxValue, state.startValue));
        dispatch(SetMaxErrorCounterAC(false));
        dispatch(SetStartErrorCounterAC(false));
        dispatch(EnableSetButtonAC(true));
    };

    const handleMaxValueChange = (value: number) => {
        if (!isNaN(value) && value > 0 && value > state.startValue) {
            dispatch(setValuesAC(value, state.startValue));
            dispatch(SetMaxErrorCounterAC(false));
            dispatch(SetStartErrorCounterAC(false));
        } else {
            dispatch(SetMaxErrorCounterAC(true));
            dispatch(SetStartErrorCounterAC(true));
        }
        dispatch(EnableSetButtonAC(false));
    };

    const handleStartValueChange = (value: number) => {
        if (!isNaN(value) && value >= 0 && value < state.maxValue) {
            dispatch(setValuesAC(state.maxValue, value));
            dispatch(SetStartErrorCounterAC(false));
            dispatch(SetMaxErrorCounterAC(false));
        } else {
            dispatch(SetStartErrorCounterAC(true));
            dispatch(SetMaxErrorCounterAC(true));
        }
        dispatch(EnableSetButtonAC(false));
    };

    useEffect(() => {
        try {
            const savedState = localStorage.getItem('counterAppState');
            if (savedState) {
                const parsedState = JSON.parse(savedState);
                dispatch(setValuesAC(parsedState.maxValue, parsedState.startValue));
            }
        } catch (error) {
            console.error('Error reading from localStorage:', error);
        }
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem('counterAppState', JSON.stringify(state));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    }, [state]);

    return (
        <div className="App-body">
            <div className="App">
                <div className="display-set">
                    <div className="set-mode">
                        <label className="label-max">
                            Max Value:
                            <input
                                type="number"
                                value={state.maxValue}
                                className={state.maxError ? 'error' : ''}
                                placeholder="Max value"
                                onChange={(e) => handleMaxValueChange(Number(e.target.value))}
                            />
                        </label>
                        <label className="label-start">
                            Start Value:
                            <input
                                type="number"
                                value={state.startValue}
                                className={state.startError ? 'error' : ''}
                                placeholder="Start value"
                                onChange={(e) => handleStartValueChange(Number(e.target.value))}
                            />
                        </label>
                    </div>
                    <div className="button-set">
                        <Button onClick={onSet} disabled={state.isSetDisabled} text="Set" />
                    </div>
                </div>
            </div>

            <div className="App">
                <>
                    <CounterDisplay value={state.counter} maxValue={state.maxValue} />
                    <CounterButtons
                        onIncrement={increment}
                        onReset={reset}
                        disableIncrement={state.counter >= state.maxValue}
                        disableReset={state.counter === 0}
                    />
                </>
            </div>
        </div>
    );
}

export default AppWithRedux;

