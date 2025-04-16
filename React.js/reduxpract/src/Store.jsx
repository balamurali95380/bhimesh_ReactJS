import { EmployeeReducer } from "./Reducer/EmployeeReducer";
import { studentReducer } from "./Reducer/StudentReducer";
import { UserReducer } from "./Reducer/UserReducer";
import { createStore,combineReducers } from "redux";

const rootReducer=combineReducers({
    employee:EmployeeReducer,
    users:UserReducer,
    students:studentReducer
})
const store=createStore(rootReducer)
export default store;