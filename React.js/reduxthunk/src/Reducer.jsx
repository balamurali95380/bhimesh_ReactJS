const intialstate = []
export const Reducer = (state = intialstate, action) => {
    switch (action.type) {
        case "Getstudents":
            return action.payload
            break;
        case "Delete":
            return state.filter((std) => {
                return std.email !== action.payload.email;
            });
            break;



        case "Update":
            const newStudents = [...state];
            newStudents[action.payload.id] = action.payload.students;
            return newStudents;
            break;

        

        default:
            return state;

    }
}
