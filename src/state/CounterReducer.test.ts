import {
    counterReducer, EnableSetButtonAC,
    incrementAC,
    resetCounterAC,
    setCounterAC,
    SetMaxErrorCounterAC, SetStartErrorCounterAC,
    setValuesAC
} from './CounterReducer';


test('reset counter ', () => {
    const startState = {counter: 5, maxValue: 10, startValue: 0,
        isSetDisabled: false,
        maxError: false,
        startError: false};
    const endState = counterReducer(startState, resetCounterAC())
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

test('set_values counter', () => {
    const startState = {counter: 0, maxValue: 10, startValue: 2,
        isSetDisabled: false,
        maxError: false,
        startError: false};
    const endState = counterReducer(startState, setValuesAC(8, 4))
    expect(endState.counter).toBe(4)
    expect(endState.isSetDisabled).toBe(true)
    expect(endState.maxValue).toBe(8)
    expect(endState.startError).toBe(false)
    expect(endState.startValue).toBe(4)
    expect(endState.maxError).toBe(false)

});
test('set_counter', () => {
    const startState = {counter: 0, maxValue: 10, startValue: 2,
        isSetDisabled: false,
        maxError: false,
        startError: false};
    const endState = counterReducer(startState, setCounterAC(5))
    expect(endState.counter).toBe(5)
    expect(endState.isSetDisabled).toBe(false)
    expect(endState.maxValue).toBe(10)
    expect(endState.startError).toBe(false)
    expect(endState.startValue).toBe(2)
    expect(endState.maxError).toBe(false)

});
test('set_max_error_counter', () => {
    const startState = {counter: 0, maxValue: 10, startValue: 2,
        isSetDisabled: false,
        maxError: false,
        startError: false};
    const endState = counterReducer(startState, SetMaxErrorCounterAC(true))
    expect(endState.counter).toBe(0)
    expect(endState.isSetDisabled).toBe(false)
    expect(endState.maxValue).toBe(10)
    expect(endState.startError).toBe(false)
    expect(endState.startValue).toBe(2)
    expect(endState.maxError).toBe(true)

});
test('set_start_error_counter', () => {
    const startState = {counter: 0, maxValue: 10, startValue: 2,
        isSetDisabled: false,
        maxError: false,
        startError: false};
    const endState = counterReducer(startState, SetStartErrorCounterAC(true))
    expect(endState.counter).toBe(0)
    expect(endState.isSetDisabled).toBe(false)
    expect(endState.maxValue).toBe(10)
    expect(endState.startError).toBe(true)
    expect(endState.startValue).toBe(2)
    expect(endState.maxError).toBe(false)

});
test('enable_set_button', () => {
    const startState = {counter: 0, maxValue: 10, startValue: 2,
        isSetDisabled: false,
        maxError: false,
        startError: false};
    const endState = counterReducer(startState, EnableSetButtonAC(true))
    expect(endState.counter).toBe(0)
    expect(endState.isSetDisabled).toBe(true)
    expect(endState.maxValue).toBe(10)
    expect(endState.startError).toBe(false)
    expect(endState.startValue).toBe(2)
    expect(endState.maxError).toBe(false)

});