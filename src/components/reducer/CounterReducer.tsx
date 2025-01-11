import {Dispatch} from "redux";
import {RootState} from "../../store/Store";

export const CHANGE_START_VALUE = 'CHANGE-START-VALUE'
export const CHANGE_MAX_VALUE = 'CHANGE-MAX-VALUE'
export const CHANGE_IS_VALUE_CHANGED = 'CHANGE-IS-VALUE-CHANGED'
export const CHANGE_IS_FIRST_RENDER = 'CHANGE-IS-FIRST-RENDER'
export const SET_STATE_FROM_LS = 'SET-STATE-FROM-LS'

export type StateType = {
    startValue: number
    maxValue: number
    isValuesChanged: boolean
    isFirstRender: boolean
}

const initialState: StateType = {
    startValue: 0,
    maxValue: 5,
    isValuesChanged: false,
    isFirstRender: true
}

type ActionsType =
    ActionStartValueType
    | ActionMaxValueType
    | ActionIsValueChangedType
    | ActionIsFirstRenderType
    | ActionSetStateType

export const CounterReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case CHANGE_START_VALUE:
            return {...state, startValue: action.payload}
        case CHANGE_MAX_VALUE:
            return {...state, maxValue: action.payload}
        case CHANGE_IS_VALUE_CHANGED:
            return {...state, isValuesChanged: action.payload}
        case CHANGE_IS_FIRST_RENDER:
            return {...state, isFirstRender: action.payload}
        case SET_STATE_FROM_LS:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export const changeStartValueAC = (payload: number) => {
    return {type: CHANGE_START_VALUE, payload} as const
}

export const changeMaxValueAC = (payload: number) => {
    return {type: CHANGE_MAX_VALUE, payload} as const
}

export const changeIsValueChangedAC = (payload: boolean) => {
    return {type: CHANGE_IS_VALUE_CHANGED, payload} as const
}

export const changeIsFirstRenderAC = (payload: boolean) => {
    return {type: CHANGE_IS_FIRST_RENDER, payload} as const
}

export const setStateFromLSAC = (state: StateType) => {
    return {type: SET_STATE_FROM_LS, payload: state} as const
}

export const setValueTC = (startValue: number, maxValue: number) => (dispatch: Dispatch, getState: () => RootState) => {
    localStorage.setItem("state", JSON.stringify({
        startValue: getState().counter.startValue,
        maxValue: getState().counter.maxValue,
        isValuesChanged: false,
        isFirstRender: true
    }))
    dispatch(changeStartValueAC(startValue));
    dispatch(changeMaxValueAC(maxValue));
    dispatch(changeIsValueChangedAC(false));
}

type ActionStartValueType = ReturnType<typeof changeStartValueAC>
type ActionMaxValueType = ReturnType<typeof changeMaxValueAC>
type ActionIsValueChangedType = ReturnType<typeof changeIsValueChangedAC>
type ActionIsFirstRenderType = ReturnType<typeof changeIsFirstRenderAC>
type ActionSetStateType = ReturnType<typeof setStateFromLSAC>

export const setStateFromLSTC = () => (dispatch: Dispatch) => {
    const getFromLS = localStorage.getItem("state")
    if (getFromLS)
        dispatch(setStateFromLSAC(JSON.parse(getFromLS)));
}

