import {CHANGE_IS_FIRST_RENDER, CHANGE_IS_VALUE_CHANGED, CHANGE_MAX_VALUE, CHANGE_START_VALUE} from "../../App";

type ActionStartValueType = {
    type: 'CHANGE-START-VALUE'
    value: number
}

type ActionMaxValueType = {
    type: 'CHANGE-MAX-VALUE'
    value: number
}

type ActionIsValueChangedType = {
    type: 'CHANGE-IS-VALUE-CHANGED'
    value: boolean
}

type ActionIsFirstRenderType = {
    type: 'CHANGE-IS-FIRST-RENDER'
    value: boolean
}

export type StateType = {
    startValue: number
    maxValue: number
    isValuesChanged: boolean
    isFirstRender: boolean
}

type ActionType = ActionStartValueType | ActionMaxValueType | ActionIsValueChangedType | ActionIsFirstRenderType

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case CHANGE_START_VALUE:
            return {...state, startValue: action.value}
        case CHANGE_MAX_VALUE:
            return {...state, maxValue: action.value}
        case CHANGE_IS_VALUE_CHANGED:
            return {...state, isValuesChanged: action.value}
        case CHANGE_IS_FIRST_RENDER:
            return {...state, isFirstRender: action.value}
    }

}