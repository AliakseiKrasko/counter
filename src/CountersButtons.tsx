import React from 'react';
import { Button } from './Button';
import './App.css';


type CounterButtonsProps = {
    onIncrement: () => void;
    onReset: () => void;
    disableIncrement: boolean;
    disableReset: boolean;

};

export const CounterButtons: React.FC<CounterButtonsProps> = ({
                                                                  onIncrement, onReset,
                                                                  disableIncrement, disableReset}) => {
    return (
        <div className="counter-buttons">
            <Button onClick={onIncrement} disabled={disableIncrement} text="inc" />
            <Button onClick={onReset} disabled={disableReset} text="reset" />
            {/*<Button onClick={onSet} disabled={disableIncrement} text="set" />*/}
        </div>
    );
};
