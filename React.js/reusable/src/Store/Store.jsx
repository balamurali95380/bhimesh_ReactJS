import { createStore,combineReducers } from 'redux'
import { EmployeeReducer } from './EmployeeReducer';
import { UserReducer } from './UserReducer';

const rootReducer=combineReducers({
    employees:EmployeeReducer,
    users:UserReducer,
    })
const store = createStore(rootReducer)
export default store;