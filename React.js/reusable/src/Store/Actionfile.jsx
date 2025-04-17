export const addEmployee = (emp) => {
    return {
        type: "Create",
        payload: emp
    }

}

export const deleteEmployee = (emp) => {
    return{
        type:"Delete",
        payload:emp
    }


}
export const updateEmployee = (data) => {
    return{
        type:"Update",
        payload:data
    }

}