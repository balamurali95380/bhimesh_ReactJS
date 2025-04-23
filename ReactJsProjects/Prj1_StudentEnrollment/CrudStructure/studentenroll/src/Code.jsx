import React, { useState } from 'react';

import  "./Styles.css";
import Form from './form';
import Table from './table';


const Code = () => {
    const MAX_ENROLLMENTS = 5;
    const COURSES = ['Math', 'Science', 'History', 'English'];
    const BATCHES = ['A', 'B', 'C'];
    const YEARS = ['2024', '2025', '2026'];
  
    const [students, setStudents] = useState([]);
    const [filters, setFilters] = useState({
      name: '',
      age: '',
      batch: '',
      year: '',
      coursesEnrolled: ''
    });
    const [editIndex, setEditIndex] = useState(null);
  
    const handleAddOrUpdateStudent = (studentData, editIndex) => {
      if (editIndex === null) {
        if (students.length >= MAX_ENROLLMENTS) {
          alert('Maximum enrollment limit reached!');
          return;
        }
        setStudents([...students, studentData]);
      } else {
        const updatedStudents = [...students];
        updatedStudents[editIndex] = studentData;
        setStudents(updatedStudents);
        setEditIndex(null);
      }
    };
  
    const handleEditStudent = (student, index) => {
        setStudents(students)
      setEditIndex(index);
    };
  
    const handleDeleteStudent = (index) => {
      const updatedStudents = students.filter((_, i) => i !== index);
      setStudents(updatedStudents);
    };
  
    const handleFilterChange = (e) => {
      const updatedFilters = { ...filters };
      updatedFilters[e.target.name] = e.target.value;
      setFilters(updatedFilters);
    };
  
    return (
      <div className="container">
        <h2>Student Enrollment System</h2>
        <p>Total Enrollments: {students.length} / {MAX_ENROLLMENTS}</p>
  
        <Form
          onSubmit={handleAddOrUpdateStudent}
          studentData={editIndex !== null ? students[editIndex] : null}
          editIndex={editIndex}
          students={students}
          courses={COURSES}
          batches={BATCHES}
          years={YEARS}
        />
  
        <hr />
  
        <Table
          students={students}
          onEdit={handleEditStudent}
          onDelete={handleDeleteStudent}
          filters={filters}
          courses={COURSES}
          batches={BATCHES}
          years={YEARS}
          onFilterChange={handleFilterChange}
        />
      </div>
    );
  };
export default Code;
