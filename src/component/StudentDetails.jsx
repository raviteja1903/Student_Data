import React from "react";
import './StudentDetails.css';

const StudentDetails = ({ student, onLogout }) => {
  return (
    <div className="student-card card shadow-sm p-4 mx-auto mt-5">
      <h2 className="card-title text-center mb-4">Student Details</h2>
      <ul className="list-group mb-3">
        <li className="list-group-item"><strong>ID:</strong> {student.studentId}</li>
        <li className="list-group-item"><strong>Name:</strong> {student.name}</li>
        <li className="list-group-item"><strong>Email:</strong> {student.email}</li>
        <li className="list-group-item"><strong>Course:</strong> {student.course}</li>
      </ul>
      <button className="btn btn-secondary w-100" onClick={onLogout}>Logout</button>
    </div>
  );
};

export default StudentDetails;
