
import React, { useState, useEffect } from 'react';

const EnrollmentForm = ({ onSubmit, editingStudent, coursesOffered, batchDetails }) => {
  const [name, setName] = useState('');
  const [coursesEnrolled, setCoursesEnrolled] = useState([]);
  const [batch, setBatch] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name || '');
      setCoursesEnrolled(editingStudent.coursesEnrolled || []);
      setBatch(editingStudent.batch || '');
      setYear(editingStudent.year || '');
    } else {
      setName('');
      setCoursesEnrolled([]);
      setBatch('');
      setYear('');
    }
  }, [editingStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || coursesEnrolled.length === 0 || !batch || !year) {
      alert('Please fill in all fields.');
      return;
    }
    onSubmit({ name, coursesEnrolled, batch, year });
  };

  const handleCourseChange = (course) => {
    setCoursesEnrolled((prev) =>
      prev.includes(course)
        ? prev.filter((c) => c !== course)
        : [...prev, course]
    );
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded shadow-sm">
      <h2 className="text-xl font-semibold mb-4">
        {editingStudent ? 'Edit Student' : 'Add New Student'}
      </h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border w-full px-3 py-2 rounded"
        />
      </div>

      <div className="mb-3">
        <label className="block font-medium mb-1">Courses:</label>
        <div className="grid grid-cols-2 gap-2">
          {coursesOffered.map((course) => (
            <label key={course} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={course}
                checked={coursesEnrolled.includes(course)}
                onChange={() => handleCourseChange(course)}
              />
              <span>{course}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-3">
        <select
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="">Select Batch</option>
          {batchDetails.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="">Select Year</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
      

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        {editingStudent ? 'Update' : 'Enroll'}
      </button>
    </form>
  );
};

export default EnrollmentForm;
