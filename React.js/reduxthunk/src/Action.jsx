import axios from "axios";
export const getstudentfromserver = (students) => {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:3000/students")
            dispatch({
                type: "Getstudents",
                payload: response.data
            })

        } catch (error) {

        }
    }
}
export const addStudent = (students) => {
    return async (dispatch) => {
        try {
            const resp = await axios.post("http://localhost:3000/students", students);
            const response = await axios.get("http://localhost:3000/students");
            dispatch({
                type: "Getstudents",
                payload: response.data,
            })

        } catch (error) {

        }
    }
}
export const deleteStudent = (std) => {
    return async (dispatch) => {
        try {
            const resp = await axios.delete("http://localhost:3000/students/" + std.id)
            const response = await axios.get("http://localhost:3000/students")
            dispatch({
                type: "Getstudents",
                payload: response.data
            })

        } catch (error) {

        }
    }

}
export const updateStudent = (student) => {
    return async (dispatch) => {
        try {

            const resp = await axios.put(
                "http://localhost:3000/students/" + student.id, student
            )

            // Fetch updated list of students
            const response = await axios.get("http://localhost:3000/students");

            // Dispatch updated list
            dispatch({
                type: "Getstudents",
                payload: response.data,
            });
        } catch (error) {

        }
    };
};




