const userdetail = [
    "ram",
    "ravi"
]
export const UserReducer = (state = userdetail, action) => {

    switch (action.type) {
        case "Create":
            return [...state, action.payload]

            break;
        case "Delete":
            return state.filter((usr) => usr !== action.payload);
            break;
        case "Update":
            return state.map((user, idx) =>
                idx === action.payload.index ? action.payload.value : user
            );
            break;

        default:
            return state;
    }
}