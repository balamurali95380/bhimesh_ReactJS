import React, { useState } from 'react';


const Usercrud = () => {
    const [students, setStudents] = useState([])
    const [studentdetails, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: ''
    });
    const [editIndex, setEditIndex] = useState(null);

    const handleevent = (e) => {
        const newuser = { ...studentdetails }
        newuser[e.target.name] = e.target.value
        setFormData(newuser)
    }
    const addstudent = () => {
        const newstds = [...students]
        newstds.push(studentdetails)
        setStudents(newstds)
        setFormData({ fname: '', lname: '', email: '', password: '' })
    }
    const deletestd = (i) => {     
        const ar1=[...students]
        ar1.splice(i,1)
        setStudents(ar1);      
      
    };

    const editstd = (std, i) => {
        setFormData(std);
        setEditIndex(i);
    };

    const updatestudent = () => {
        const updatedStudents = [...students];
        updatedStudents[editIndex] = studentdetails;
        setStudents(updatedStudents);
        setFormData({ fname: '', lname: '', email: '', password: '' });
        setEditIndex(null);
    };

   

    return (<>
        <h1>hifrom Usercrud</h1>

        <form action="">
            <label htmlFor="">First name:</label>
            <input type="text" name="fname" value={studentdetails.fname} onChange={handleevent} />{""}
            <br /><label htmlFor="">Last name:</label>
            <input type="text" name="lname" value={studentdetails.lname} onChange={handleevent} />{""}
            <br /><label htmlFor="">Email:</label>
            <input type="text" name="email" value={studentdetails.email} onChange={handleevent} />{""}
            <br /><label htmlFor="">Password:</label>
            <input type="text" name="password" value={studentdetails.password} onChange={handleevent} />{""}
            <br />{editIndex === null ? <button type="button" class="btn btn-primary" style={{ marginTop: "10px" }} onClick={addstudent}>add student</button> : <button type="button" class="btn btn-success" onClick={updatestudent}>update student</button>}
        </form>
        <hr />
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>fname</th>
                    <th>lname</th>
                    <th>email</th>
                    <th>password</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {students.map((std, i) => {
                    return (<tr key={i}>
                        <td>{std.fname}</td>
                        <td>{std.lname}</td>
                        <td>{std.email}</td>
                        <td>{std.password}</td>
                        <td><button type="button" class="btn btn-warning" onClick={() => editstd(std, i)}>Edit</button></td>
                        <td><button type="button" class="btn btn-danger" onClick={() => deletestd(i)}>Delete</button></td>
                    </tr>
                    )
                })}

            </tbody>

        </table>

    </>)
}
export default Usercrud;