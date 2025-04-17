const initialState = ["john", "june", "alice"]
const employeesintial=[{
   
    "fname": "bhim",
    "lname": "reddy",
    "email": "bhimesh.smile@gmail.com",
    "password": "12345"
  },{
    "fname": "bhim",
    "lname": "reddy",
    "email": "bhimesh.smile@gmail.com",
    "password": "12345"
  },{
    "fname": "bhim",
    "lname": "reddy",
    "email": "bhimesh.smile@gmail.com",
    "password": "12345"
  }]
export const EmployeeReducer = (state = employeesintial, action) =>{

    switch (action.type) {
        case "Create":
            return [...state, action.payload]

            break;
        case "Delete":
            return state.filter((emp) => emp !== action.payload);
            break;
        case "Update":
            return state.map((emp, idx) =>
                idx === action.payload.index ? action.payload.value : emp
            );
            break;

        default:
            return state;
    }
}