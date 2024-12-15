import {CHANGE_IS_FIRST_RENDER, CHANGE_IS_VALUE_CHANGED, CHANGE_MAX_VALUE, CHANGE_START_VALUE} from "../../App";

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
    isFirstRender: false
}

type ActionType = ActionStartValueType | ActionMaxValueType | ActionIsValueChangedType | ActionIsFirstRenderType

export const reducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case CHANGE_START_VALUE:
            return {...state, startValue: action.payload}
        case CHANGE_MAX_VALUE:
            return {...state, maxValue: action.payload}
        case CHANGE_IS_VALUE_CHANGED:
            return {...state, isValuesChanged: action.payload}
        case CHANGE_IS_FIRST_RENDER:
            return {...state, isFirstRender: action.payload}
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

type ActionStartValueType = ReturnType<typeof changeStartValueAC>
type ActionMaxValueType = ReturnType<typeof changeMaxValueAC>
type ActionIsValueChangedType = ReturnType<typeof changeIsValueChangedAC>
type ActionIsFirstRenderType = ReturnType<typeof changeIsFirstRenderAC>

