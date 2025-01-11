import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import {CounterReducer} from "../components/reducer/CounterReducer";
import {thunk} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    counter: CounterReducer
})

// непосредственно создаём store
export const store = legacy_createStore(rootReducer, {}, applyMiddleware(thunk));
export type AppDispatch = typeof store.dispatch

// определить автоматически тип всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store