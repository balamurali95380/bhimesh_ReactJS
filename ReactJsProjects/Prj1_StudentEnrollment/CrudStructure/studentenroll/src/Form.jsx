import React, { useEffect, useState } from 'react';

const Form = ({ onSubmit, studentData, editIndex, students, courses, batches, years }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    batch: '',
    year: '',
    coursesEnrolled: '',
  });

  useEffect(() => {
    if (studentData) {
      setFormData(studentData);
    } else {
      setFormData({
        name: '',
        age: '',
        email: '',
        batch: '',
        year: '',
        coursesEnrolled: '',
      });
    }
  }, [studentData]);

  const handleChange = (e) => {
    const updatedForm = { ...formData, [e.target.name]: e.target.value };
    setFormData(updatedForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, age, email, batch, year, coursesEnrolled } = formData;

    if (!name || !age || !email || !batch || !year || !coursesEnrolled) {
      alert("All fields are required.");
      return;
    }

    // Check for duplicate course and name combo (only for new entries)
    if (editIndex === null) {
      const duplicate = students.find(
        (s) => s.name === name && s.coursesEnrolled === coursesEnrolled
      );
      if (duplicate) {
        alert("This student is already enrolled in the selected course.");
        return;
      }
    }

    onSubmit(formData, editIndex);
    setFormData({
      name: '',
      age: '',
      email: '',
      batch: '',
      year: '',
      coursesEnrolled: '',
    });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} id="name" />
      </div>
      <div className="form-group">
        <label>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} id="age" />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} id="email" />
      </div>
      <div className="form-group">
        <label>Batch:</label>
        <select name="batch" value={formData.batch} onChange={handleChange} id="batch">
          <option value="">Select Batch</option>
          {batches.map((b, i) => (
            <option key={i} value={b}>{b}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Year:</label>
        <select name="year" value={formData.year} onChange={handleChange} id="year">
          <option value="">Select Year</option>
          {years.map((y, i) => (
            <option key={i} value={y}>{y}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Course:</label>
        <select name="coursesEnrolled" value={formData.coursesEnrolled} onChange={handleChange} id="coursesEnrolled">
          <option value="">Select Course</option>
          {courses.map((c, i) => (
            <option key={i} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="submit-btn">
        {editIndex === null ? 'Enroll Student' : 'Update Student'}
      </button>
    </form>
  );
};

export default Form;
