import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'
import Enroll from './components/Enroll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* <Dashboard/> */}
  <Enroll/>
    </>
  )
}
// import React, { useState } from 'react';
// import EnrollmentForm from './components/Enroolmentform';
// import EnrollmentList from './components/Enrollmentlist';
// import './styles.css';



// const MAX_ENROLLMENTS = 5;
// const COURSES_OFFERED = ['Math', 'Science', 'History', 'English'];
// const BATCH_DETAILS = ['A', 'B', 'C'];
// const ACADEMIC_YEAR = '2024-2025';

// const App = () => {
//   const [students, setStudents] = useState([]);
//   const [editing, setEditing] = useState(null);
//   const [filters, setFilters] = useState({
//     nameOrCourse: '',
//     batch: '',
//     year: '',
//   });

//   const addStudent = (student) => {
//     if (students.length >= MAX_ENROLLMENTS) {
//       alert('Enrollment limit reached. Cannot add more students.');
//       return;
//     }
//     const duplicate = students.find(
//       (s) =>
//         s.name === student.name &&
//         s.coursesEnrolled.some((course) => student.coursesEnrolled.includes(course))
//     );
//     if (duplicate) {
//       alert('Student already enrolled in one of the selected courses.');
//       return;
//     }
//     const newStudent = {
//       ...student,
//       id: Date.now(),
//       enrollmentDate: new Date().toISOString(),
//       academicYear: ACADEMIC_YEAR,
//     };
//     setStudents([...students, newStudent]);
//   };

//   const removeStudent = (studentID) => {
//     setStudents((prev) => prev.filter((s) => s.id !== studentID));
//   };

//   const updateCourses = (studentID, courses) => {
//     setStudents((prev) =>
//       prev.map((s) =>
//         s.id === studentID ? { ...s, coursesEnrolled: courses } : s
//       )
//     );
//   };

//   const handleAddOrUpdate = (student) => {
//     if (!editing) {
//       addStudent(student);
//     } else {
//       setStudents((prev) =>
//         prev.map((s) => (s.id === editing.id ? { ...student, id: editing.id } : s))
//       );
//       setEditing(null);
//     }
//   };

//   const handleEdit = (student) => setEditing(student);
//   const handleDelete = (id) => removeStudent(id);

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prev) => ({ ...prev, [name]: value }));
//   };

//   const filteredStudents = students.filter((student) => {
//     const nameMatch = student.name.toLowerCase().includes(filters.nameOrCourse.toLowerCase());
//     const courseMatch = student.coursesEnrolled.some(course =>
//       course.toLowerCase().includes(filters.nameOrCourse.toLowerCase())
//     );
//     const batchMatch = filters.batch === '' || student.batch === filters.batch;
//     const yearMatch = filters.year === '' || student.year === filters.year;

//     return (nameMatch || courseMatch) && batchMatch && yearMatch;
//   });

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-2">Student Enrollment System</h1>
     

     

//       <EnrollmentForm
//         onSubmit={handleAddOrUpdate}
//         editingStudent={editing}
//         coursesOffered={COURSES_OFFERED}
//         batchDetails={BATCH_DETAILS}
//       />
//        <p className="mb-4 text-gray-600">
//         Total Enrollments: <span className="font-semibold">{students.length}</span> / {MAX_ENROLLMENTS}
//       </p>
//       <EnrollmentList
//         enrollments={filteredStudents}
//         onEdit={handleEdit}
//         onDelete={handleDelete}
//       />

//     <h1>Filter students details</h1>
//        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
//         <input
//           type="text"
//           placeholder="Search by name or course"
//           name="nameOrCourse"
//           value={filters.nameOrCourse}
//           onChange={handleFilterChange}
//           className="border px-3 py-2 rounded"
//         />
//         <select
//           name="batch"
//           value={filters.batch}
//           onChange={handleFilterChange}
//           className="border px-3 py-2 rounded"
//         >
//           <option value="">All Batches</option>
//           {BATCH_DETAILS.map((batch) => (
//             <option key={batch} value={batch}>{batch}</option>
//           ))}
//         </select>
//         <input
//           type="text"
//           placeholder="Year (e.g. 2024)"
//           name="year"
//           value={filters.year}
//           onChange={handleFilterChange}
//           className="border px-3 py-2 rounded"
//         />
//       </div>
      
//     </div>
//   );
// };

export default App;


