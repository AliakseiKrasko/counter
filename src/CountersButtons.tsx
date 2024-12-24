import React from 'react';
import { Button } from './Button';


type CounterButtonsProps = {
    onIncrement: () => void;
    onReset: () => void;
    disableIncrement: boolean;
    disableReset: boolean;
    onSet: () => void;
};

export const CounterButtons: React.FC<CounterButtonsProps> = ({
                                                                  onIncrement, onReset, onSet,
                                                                  disableIncrement, disableReset}) => {
    return (
        <div className="counter-buttons">
            <Button onClick={onIncrement} disabled={disableIncrement} text="inc" />
            <Button onClick={onReset} disabled={disableReset} text="reset" />
            {/*<Button onClick={onSet} disabled={disableIncrement} text="set" />*/}
        </div>
    );
};
