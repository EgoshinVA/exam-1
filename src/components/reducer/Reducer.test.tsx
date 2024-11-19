import {reducer, StateType} from "./Reducer";
import {CHANGE_IS_FIRST_RENDER, CHANGE_IS_VALUE_CHANGED, CHANGE_MAX_VALUE, CHANGE_START_VALUE} from "../../App";

const initialState: StateType = {
    startValue : 0,
    maxValue: localStorage.getItem('maxValue') ? Number(localStorage.getItem('maxValue')) : 6,
    isValuesChanged: false,
    isFirstRender: true
}

test('reducer should change start value', () => {
    const newState = reducer(initialState, {type: CHANGE_START_VALUE, value: 20})

    expect(newState.startValue).toBe(20)
})

test('reducer should change max value', () => {
    const newState = reducer(initialState, {type: CHANGE_MAX_VALUE, value: 10})

    expect(newState.maxValue).toBe(10)
})

test('reducer should change IsValueChanged', () => {
    const newState = reducer(initialState, {type: CHANGE_IS_VALUE_CHANGED, value: true})

    expect(newState.isValuesChanged).toBe(true)
})

test('reducer should change IsFirstRender', () => {
    const newState = reducer(initialState, {type: CHANGE_IS_FIRST_RENDER, value: false})

    expect(newState.isFirstRender).toBe(false)
})