import React, {useEffect, useReducer, useState} from 'react';

import './App.css';
import {CounterDisplay} from './CounterDisplay';
import {CounterButtons} from './CountersButtons';
import {Button} from './Button';
import {
    counterReducer,
    incrementAC,
    initialState,
    resetCounterAC,
    setCounterAC,
    setValuesAC
} from './state/CounterReducer';

function AppWithReducer() {

    const [counter, dispatchToCounter] = useReducer(counterReducer, initialState);
    const [maxValue, setMaxValue] = useState<number>(10);

    const [isSetDisabled, setIsSetDisabled] = useState(true);

    const increment = () => {
        const action = incrementAC();
        dispatchToCounter(action)
    }

    const reset = () => {
        const action = resetCounterAC(counter.counter);
        setIsSetDisabled(false);
        dispatchToCounter(action)
        setMaxValue(maxValue);
    }

    const onSet = () => {
        saveValues(maxValue, startValue)
        setMaxError(false)
        setStartError(false)
        setIsSetDisabled(true);
    }

    const [maxError, setMaxError] = useState(false);
    const [startError, setStartError] = useState(false);
    const [startValue, setStartValue] = useState(0);

    // const [mode, SetMode] = useState(false);
    // const toggleSetMode = () => {
    //     SetMode(prev => !prev);

    const saveValues = (newMaxValue: number, startValue: number) => {
        const action = setValuesAC(newMaxValue, startValue)
        dispatchToCounter(action)
        setMaxValue(newMaxValue);
    };

    useEffect(() => {
        try {
            let valueAsString = localStorage.getItem('counterValue');
            if (valueAsString) {
                const newValue = JSON.parse(valueAsString);
                if (newValue && typeof newValue.counter === 'number') {
                    dispatchToCounter(setCounterAC(newValue.counter));
                }
            }
        } catch (error) {
            console.error('Error reading counterValue from localStorage:', error);
        }
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem('counterValue', JSON.stringify({ counter: counter.counter }));
        } catch (error) {
            console.error('Error saving counterValue to localStorage:', error);
        }
    }, [counter]);

    useEffect(() => {
        try {
            let valueAsMax = localStorage.getItem('counterValueMax');
            if (valueAsMax) {
                const newValueAsMax = JSON.parse(valueAsMax);
                if (typeof newValueAsMax === 'number') {
                    setMaxValue(newValueAsMax);
                }
            }
        } catch (error) {
            console.error('Error reading counterValueMax from localStorage:', error);
        }
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem('counterValueMax', JSON.stringify(maxValue));
        } catch (error) {
            console.error('Error saving counterValueMax to localStorage:', error);
        }
    }, [maxValue]);

    useEffect(() => {
        try {
            let valueAsStart = localStorage.getItem('counterValueStart');
            if (valueAsStart) {
                const newValueStart = JSON.parse(valueAsStart);
                if (typeof newValueStart === 'number') {
                    setStartValue(newValueStart);
                }
            }
        } catch (error) {
            console.error('Error reading counterValueStart from localStorage:', error);
        }
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem('counterValueStart', JSON.stringify(startValue));
        } catch (error) {
            console.error('Error saving counterValueStart to localStorage:', error);
        }
    }, [startValue]);



    return (
        <div className="App-body">
            <div className="App">

                <div className="display-set">
                    <div className="set-mode">
                        <label className={"label-max"}>
                            Max Value:
                            <input
                                type="number"
                                value={maxValue}
                                className={maxError ? 'error' : ''}
                                placeholder="Max value"
                                onChange={(e) => {
                                    const value = Number(e.target.value);
                                    if (!isNaN(value) && value > 0 && value > startValue) { // Проверка: число и больше 0

                                        setMaxValue(value);
                                        setMaxError(false);
                                        setStartError(false);

                                    } else {
                                        setMaxError(true);
                                        setStartError(true);
                                    }
                                    setIsSetDisabled(false);
                                }}
                            />
                        </label>
                        <label className="label-start">
                            Start Value:
                            <input
                                type="number"
                                value={startValue}
                                className={startError ? 'error' : ''}
                                placeholder="Start value"
                                onChange={(e) => {
                                    const value = Number(e.target.value);
                                    if (!isNaN(value) && value >= 0 && value < maxValue) {
                                        setStartValue(value);
                                        setStartError(false);
                                        setMaxError(false);
                                    } else {
                                        setStartError(true);
                                        setMaxError(true);
                                    }
                                    // Включаем кнопку при любом новом вводе
                                    setIsSetDisabled(false);
                                }}
                            />
                        </label>
                    </div>
                    <div className={"button-set"}>
                        <Button onClick={onSet} disabled={isSetDisabled} text="Set"/>

                    </div>
                </div>
            </div>

            <div className="App">

                <>
                    <CounterDisplay value={counter.counter} maxValue={maxValue}/>
                    <CounterButtons
                        onIncrement={increment}
                        onReset={reset}
                        disableIncrement={counter.counter >= maxValue}
                        disableReset={counter.counter === 0}
                    />
                </>

            </div>
        </div>

    );
}

export default AppWithReducer;
