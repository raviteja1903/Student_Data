import { useState } from "react";
import "./App.css";
// import RegisterForm from "./component/RegistrationForm";
import RegisterForm from "./component/RegisterForm";

import LoginForm from "./component/LoginForm";
import StudentDetails from "./component/StudentDetails";

function App() {
  const [showRegister, setShowRegister] = useState(false);
  const [student, setStudent] = useState(null);

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      {!student ? (
        showRegister ? (
          <RegisterForm
            onRegisterSuccess={() => setShowRegister(false)}
            onToggleLogin={() => setShowRegister(false)}
          />
        ) : (
          <LoginForm
            onLogin={setStudent}
            onToggleRegister={() => setShowRegister(true)}
          />
        )
      ) : (
        <StudentDetails student={student} onLogout={() => setStudent(null)} />
      )}
    </div>
  );
}

export default App;
