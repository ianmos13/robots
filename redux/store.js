import {combineReducers, configureStore} from '@reduxjs/toolkit'
import headerReducer from "./features/headerSlice";
import filtersReducer from './features/filtersSlice';

const rootReducer = combineReducers({
    header: headerReducer,
    filters: filtersReducer,
})

const store = configureStore({
    reducer: rootReducer
})

export default store
