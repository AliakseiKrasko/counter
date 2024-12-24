import React, {useState} from 'react';

import './App.css';
import {CounterDisplay} from './CounterDisplay';
import {CounterButtons} from './CountersButtons';
import {Button} from './Button';

function App() {

    const [counter, setCounter] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(10);

    const [isSetDisabled, setIsSetDisabled] = useState(false);

    const increment = () => {

        setCounter(counter + 1);
    }

    const reset = () => {
        setIsSetDisabled(false);
        setCounter(0);
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
        setMaxValue(newMaxValue);
        setCounter(startValue);
        // SetMode(false);
    };




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
                                    if (!isNaN(value) && value > 0) { // Проверка: число и больше 0

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
                    <CounterDisplay value={counter} maxValue={maxValue}/>
                    <CounterButtons
                        onIncrement={increment}
                        onReset={reset}
                        disableIncrement={counter >= maxValue}
                        disableReset={counter === 0}
                    />
                </>

            </div>
        </div>

    );
}

export default App;
