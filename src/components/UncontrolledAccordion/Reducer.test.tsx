import {reducer, stateType} from "./Reducer";

test('collapsed should be true', () => {
    const state: stateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: 'SET-TOGGLE-COLLAPSED'})

    expect(newState.collapsed).toBe(true);
})

test('collapsed should be false', () => {
    const state: stateType = {
        collapsed: true
    }

    const newState = reducer(state, {type: 'SET-TOGGLE-COLLAPSED'})

    expect(newState.collapsed).toBe(false);
})

test('reducer should throw error because action type is incorrect', () => {
    const state: stateType = {
        collapsed: true
    }

    expect(()=> {
        reducer(state, {type: 'FAKETYPE'})
    }).toThrowError()
})