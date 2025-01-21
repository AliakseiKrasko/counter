import {counterReducer, resetCounterAC} from './CounterReducer';


test('reset counter ', () => {
    const startState = {counter: 5, maxValue: 10, startValue: 0,
        isSetDisabled: false,
        maxError: false,
        startError: false};
    const endState = counterReducer(startState, resetCounterAC(0))
    expect(endState.counter).toBe(0)
    expect(endState.isSetDisabled).toBe(false)
    expect(endState.startError).toBe(false)
    expect(endState.startValue).toBe(0)
    expect(endState.maxError).toBe(false)

});