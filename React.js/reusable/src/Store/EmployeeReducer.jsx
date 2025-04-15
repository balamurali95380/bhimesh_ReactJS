const initialState = ["john", "june", "alice"]
export const EmployeeReducer = (state = initialState, action) => {

    switch (action.type) {
        case "Create":

            break;
        case "Delete":

            break;

        default:
            return state;
    }
}
