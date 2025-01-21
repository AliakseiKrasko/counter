import {counterReducer, incrementAC, resetCounterAC} from './CounterReducer';


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

test('increment', () => {
    const startState = {counter: 5, maxValue: 10, startValue: 2,
        isSetDisabled: false,
        maxError: false,
        startError: false};
    const endState = counterReducer(startState, incrementAC())
    expect(endState.counter).toBe(6)
    expect(endState.isSetDisabled).toBe(false)
    expect(endState.startError).toBe(false)
    expect(endState.startValue).toBe(2)
    expect(endState.maxError).toBe(false)

});