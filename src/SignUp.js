import { useState } from 'react';
const SignUp = () => {
  const initFormData = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [dataForm, setForm] = useState(initFormData);
  const [errorMessage, setErrorMessage] = useState('');
  const [showUserData, setShowUserData] = useState(false);

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dataForm.email || !dataForm.password || !dataForm.confirmPassword) {
      setErrorMessage('Fill All Fields *');
      return;
    }
    if (dataForm.password !== dataForm.confirmPassword) {
      setErrorMessage('Passwords Must Match *');
      return;
    }

    setErrorMessage('');
    setShowUserData(true);
  };

  const deleteUser = () => {
    setForm(initFormData);
    setErrorMessage('');
    setShowUserData(false);
  };

  return (
    <div className="signup">
      <form>
        <input
          type="email"
          name="email"
          value={dataForm.email}
          onChange={handleFormData}
          placeholder="Enter Your Email"
        />
        <input
          type="password"
          name="password"
          value={dataForm.password}
          onChange={handleFormData}
          placeholder="Enter Your Password"
        />
        <input
          type="password"
          name="confirmPassword"
          value={dataForm.confirmPassword}
          onChange={handleFormData}
          placeholder="Confirm Password"
        />
        <p className="error">{errorMessage}</p>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {showUserData && (
        <div className="user-data">
          <span>{dataForm.email}</span>
          <span>{dataForm.password}</span>
          <button onClick={deleteUser}>delete</button>
        </div>
      )}
    </div>
  );
};
export default SignUp;
