export type StateType = {
    counter: number;
    maxValue: number;
    startValue: number;
    isSetDisabled: boolean;
    maxError: boolean;
    startError: boolean;
};

const initialState: StateType = {
    counter: 0,
    maxValue: 10,
    startValue: 0,
    isSetDisabled: true,
    maxError: false,
    startError: false,
};

type ActionType = Increment | ResetCounter;

export type Increment = {
    type: 'INCREMENT';

};
export type ResetCounter = {
    type: 'RESET_COUNTER';
    counter: number;
};



export const counterReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 };
        case 'RESET_COUNTER':
            return { ...state, counter: state.startValue, isSetDisabled: false };
        default:
            return state; // Возвращаем текущее состояние, если действие не распознано
    }
};



export const incrementAC = (): Increment => {
    return {type: 'INCREMENT'}
}

export const resetCounterAC = (counter: number): ResetCounter => {
    return {type: 'RESET_COUNTER', counter: counter}
}


