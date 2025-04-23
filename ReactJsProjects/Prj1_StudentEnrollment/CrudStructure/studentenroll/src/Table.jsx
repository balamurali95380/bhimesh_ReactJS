import React from 'react';

const Table = ({ students, onEdit, onDelete, filters, courses, batches, years, onFilterChange }) => {
    const filteredStudents = students.filter((student) => {
      return (
        (filters.name === '' || student.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (filters.age === '' || student.age === filters.age) &&
        (filters.batch === '' || student.batch === filters.batch) &&
        (filters.year === '' || student.year === filters.year) &&
        (filters.coursesEnrolled === '' || student.coursesEnrolled.some(course => course.toLowerCase().includes(filters.coursesEnrolled.toLowerCase())))
      );
    });
  
    return (
      <div>
        <h3>Student List</h3>
        
        {/* Filter Section */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Filter by name"
            value={filters.name}
            onChange={onFilterChange}
          />
          <input
            type="text"
            name="age"
            placeholder="Filter by age"
            value={filters.age}
            onChange={onFilterChange}
          />
          
          {/* Filter Batch Dropdown */}
          <select name="batch" value={filters.batch} onChange={onFilterChange}>
            <option value="">Filter by Batch</option>
            {batches.map((batch, index) => (
              <option key={index} value={batch}>{batch}</option>
            ))}
          </select>{" "}
          
          {/* Filter Year Dropdown */}
          <select name="year" value={filters.year} onChange={onFilterChange}>
            <option value="">Filter by Year</option>
            {years.map((year, index) => (
              <option key={index} value={year}>{year}</option>
            ))}
          </select>{" "}
          
          {/* Filter Courses Dropdown */}
          <select
            name="coursesEnrolled"
            value={filters.coursesEnrolled}
            onChange={onFilterChange}
          >
            <option value="">Filter by Courses</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>{course}</option>
            ))}
          </select>
        </div>
  
        {/* Student Table */}
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Batch</th>
              <th>Year</th>
              <th>Courses</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.batch}</td>
                <td>{student.year}</td>
                <td>{student.coursesEnrolled.join(', ')}</td>
                <td><button onClick={() => onEdit(student, index)}>Edit</button></td>
                <td><button onClick={() => onDelete(index)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
export default Table;
