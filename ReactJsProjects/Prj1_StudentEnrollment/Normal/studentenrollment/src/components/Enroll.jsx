import React, { useState, useEffect } from 'react';
import "./styles.css"

const Enroll = () => {
  const MAX_ENROLLMENTS = 5;
  const COURSES = ['Math', 'Science', 'History', 'English'];
  const BATCHES = ['A', 'B', 'C'];
  const YEARS = ['2023', '2024', '2025'];

  const [students, setStudents] = useState([]);
  const [filters, setFilters] = useState({ name: '', course: '', batch: '', year: '' });
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    id: null,
    name: '',
    coursesEnrolled: [],
    batch: '',
    year: ''
  });

  useEffect(() => {
    if (editId !== null) {
      const student = students.find((s) => s.id === editId);
      if (student) setFormData(student);
    } else {
      resetForm();
    }
  }, [editId]);

  const resetForm = () => {
    setFormData({ id: null, name: '', coursesEnrolled: [], batch: '', year: '' });
    setEditId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleCheckboxChange = (course) => {
    setFormData((prev) => ({
      ...prev,
      coursesEnrolled: prev.coursesEnrolled.includes(course)
        ? prev.coursesEnrolled.filter((c) => c !== course)
        : [...prev.coursesEnrolled, course]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, coursesEnrolled, batch, year } = formData;

    if (!name || !batch || !year || coursesEnrolled.length === 0) {
      alert('All fields are required!');
      return;
    }

    const duplicate = students.find(
      (s) => s.name === name && s.coursesEnrolled.some(c => coursesEnrolled.includes(c)) && s.id !== editId
    );
    if (duplicate) {
      alert('This student is already enrolled in one of the selected courses.');
      return;
    }

    if (editId !== null) {
      setStudents(students.map((s) => (s.id === editId ? formData : s)));
    } else {
      if (students.length >= MAX_ENROLLMENTS) {
        alert('Maximum enrollment limit reached!');
        return;
      }
      setStudents([...students, { ...formData, id: Date.now() }]);
    }

    resetForm();
  };

  const handleEdit = (student) => {
    setEditId(student.id);
  };

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
    if (editId === id) resetForm();
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((f) => ({ ...f, [name]: value }));
  };

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(filters.name.toLowerCase()) &&
    s.batch.toLowerCase().includes(filters.batch.toLowerCase()) &&
    s.year.toLowerCase().includes(filters.year.toLowerCase()) &&
    (filters.course === '' || s.coursesEnrolled.includes(filters.course))
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-2">🎓 Student Enrollment System</h2>
      <p className="text-gray-600 mb-6">Total Enrollments: <strong>{students.length} / {MAX_ENROLLMENTS}</strong></p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-success-subtle rounded-2xl p-6 shadow-md mb-8 border border-gray-200">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">{editId !== null ? 'Edit Student' : 'Enroll Student'}</h3>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Student Name"
          className="w-full mb-4 border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="font-medium block mb-2 text-gray-700">Courses:</label>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {COURSES.map((course) => (
            <label key={course} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.coursesEnrolled.includes(course)}
                onChange={() => handleCheckboxChange(course)}
              />
              <span className="text-gray-800">{course}</span>
            </label>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <select
            name="batch"
            value={formData.batch}
            onChange={handleInputChange}
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Batch</option>
            {BATCHES.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>

          <select
            name="year"
            value={formData.year}
            onChange={handleInputChange}
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Year</option>
            {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {editId !== null ? 'Update' : 'Enroll'}
        </button>
      </form>

      {/* Filters */}
      <h1>search student details</h1>
      <div className=" bg-warning-subtle grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-centre">
        <input
          type="text"
          name="name"
          placeholder="Search by Name"
          value={filters.name}
          onChange={handleFilterChange}
          className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <select
          name="course"
          value={filters.course}
          onChange={handleFilterChange}
          className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <option value="">All Courses</option>
          {COURSES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <select
          name="batch"
          value={filters.batch}
          onChange={handleFilterChange}
          className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <option value="">All Batches</option>
          {BATCHES.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
        <select
          name="year"
          value={filters.year}
          onChange={handleFilterChange}
          className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <option value="">All Years</option>
          {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
        </select>
      </div>

      {/* Table */}
      {filteredStudents.length === 0 ? (
        <p className="text-gray-500 text-center">No students found.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full table-auto bg-white border border-gray-200">
            <thead className="bg-blue-100 text-gray-800">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Courses</th>
                <th className="px-4 py-2 text-left">Batch</th>
                <th className="px-4 py-2 text-left">Year</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((s, i) => (
                <tr key={s.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-2">{s.name}</td>
                  <td className="px-4 py-2">{s.coursesEnrolled.join(', ')}</td>
                  <td className="px-4 py-2">{s.batch}</td>
                  <td className="px-4 py-2">{s.year}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button
                      onClick={() => handleEdit(s)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(s.id)}
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
      )}
    </div>
  );
};

export default Enroll;
