 
import { useState } from 'react';
import './App.css';
import LoginForm from './component/LoginForm';
import RegistrationForm from './component/RegistrationForm';
import StudentDetails from './component/StudentDetails';

function App() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [student, setStudent] = useState(null);

  return (
    <div className="container">
      {!student && !showRegistration && (
        <LoginForm onLogin={(studentData) => setStudent(studentData)} />
      )}

      {!student && (
        <button
          className="register-toggle-btn btn btn-success"
          onClick={() => setShowRegistration(true)}
        >
          +
        </button>
      )}

      {showRegistration && !student && (
        <div className="registration-modal">
          <button
            className="close-btn"
            onClick={() => setShowRegistration(false)}
          >
            X
          </button>
          <RegistrationForm
            onRegistered={() => setShowRegistration(false)}
          />
        </div>
      )}

      {student && (
        <StudentDetails student={student} onLogout={() => setStudent(null)} />
      )}
    </div>
  );
}

export default App;
