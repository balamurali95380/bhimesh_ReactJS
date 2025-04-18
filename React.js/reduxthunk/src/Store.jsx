import { thunk } from "redux-thunk";
import { createStore,combineReducers,applyMiddleware } from "redux";
import { Reducer } from "./Reducer";
const rootReducer=combineReducers({
    students:Reducer
})
const store=createStore(rootReducer,applyMiddleware(thunk))
export {rootReducer,store} 