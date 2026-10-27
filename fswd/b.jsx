import React from 'react';

const StudentInfo = ({ student }) => {
  const { name, rollNo, branch } = student;

  const details = {
    name,
    rollNo,
    branch
  };

  const extraDetails = {
    college: 'Vasavi College of Engineering'
  };

  const fullDetails = { ...details, ...extraDetails };

  return (
    <div>
      <h2>Student Information</h2>
      <p>{`Name: ${fullDetails.name}`}</p>
      <p>{`Roll Number: ${fullDetails.rollNo}`}</p>
      <p>{`Branch: ${fullDetails.branch}`}</p>
      <p>{`College: ${fullDetails.college}`}</p>
    </div>
  );
};

const App = () => {
  const student = {
    name: 'Kovidh',
    rollNo: '1602-24-733-019',
    branch: 'CSE'
  };

  return <StudentInfo student={student} />;
};

export default App;