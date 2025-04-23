// src/Components/Enrollmentlist.jsx
import React from 'react';

const EnrollmentList = ({ enrollments, onEdit, onDelete }) => {
  if (enrollments.length === 0) {
    return <p className="text-gray-500">No students found.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Courses</th>
            <th className="px-4 py-2 text-left">Batch</th>
            <th className="px-4 py-2 text-left">Year</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {enrollments.map((student) => (
            <tr key={student.id} className="border-t border-gray-200">
              <td className="px-4 py-2">{student.name}</td>
              <td className="px-4 py-2">{student.coursesEnrolled.join(', ')}</td>
              <td className="px-4 py-2">{student.batch}</td>
              <td className="px-4 py-2">{student.year}</td>
              <td className="px-4 py-2 space-x-2">
                <button
                  onClick={() => onEdit(student)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(student.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnrollmentList;
