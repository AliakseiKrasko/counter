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



export type Increment = {
    type: 'INCREMENT';

};
export type ResetCounter = {
    type: 'RESET_COUNTER';
    counter: number;
};

export type SetValues = {
    type: 'SET_VALUES';
    maxValue: number;
    startValue: number
};
export type SetCounter = {
    type: 'SET_COUNTER';
    startValue: number
};
export type SetMaxErrorCounter = {
    type: 'SET_MAX_ERROR';
    maxError: boolean
};
export type SetStartErrorCounter = {
    type: 'SET_START_ERROR';
    startError: boolean
};
export type EnableSetButton = {
    type: 'ENABLE_SET_BUTTON';
    isSetDisabled: boolean
};


type ActionType = Increment | ResetCounter | SetValues | SetCounter | SetMaxErrorCounter | SetStartErrorCounter | EnableSetButton;


export const counterReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 };
        case 'RESET_COUNTER':
            return { ...state, counter: state.startValue, isSetDisabled: false };
        case 'SET_VALUES':
            return {
                ...state,
                maxValue: action.maxValue,
                startValue: action.startValue,
                counter: action.startValue,
                isSetDisabled: true,
            };
        case 'SET_COUNTER':
            return { ...state, counter: action.startValue };
        case 'SET_MAX_ERROR':
            return { ...state, maxError: action.maxError };
        case 'SET_START_ERROR':
            return { ...state, startError: action.startError };
        case 'ENABLE_SET_BUTTON':
            return { ...state, isSetDisabled: action.isSetDisabled };
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
export const setValuesAC = (maxValue: number, startValue: number): SetValues => {
    return {type: 'SET_VALUES', maxValue: maxValue, startValue: startValue}
}
export const setCounterAC = (startValue: number): SetCounter => {
    return {type: 'SET_COUNTER', startValue: startValue}
}
export const SetMaxErrorCounterAC = (maxError: boolean): SetMaxErrorCounter => {
    return {type: 'SET_MAX_ERROR', maxError: maxError}
}
export const SetStartErrorCounterAC = (startError: boolean): SetStartErrorCounter => {
    return {type: 'SET_START_ERROR', startError: startError}
}
export const EnableSetButtonAC = (isSetDisabled: boolean): EnableSetButton => {
    return {type: 'ENABLE_SET_BUTTON', isSetDisabled: isSetDisabled}
}


