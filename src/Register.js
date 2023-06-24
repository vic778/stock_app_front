import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:3000/api/users", {
        user: {
          email,
          password,
          password_confirmation: passwordConfirmation,
        },
      });
      console.log(data);

      localStorage.setItem("token", data.token);
      toast.success("Registration successful");
      navigate('/login');
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmationChange = (e) => {
    setPasswordConfirmation(e.target.value);
  };

  return (
    <div className="offset-md-3 col-md-6">
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h3>Register</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Email <span className="errmsg">*</span></label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Password <span className="errmsg">*</span></label>
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Password Confirmation <span className="errmsg">*</span></label>
                    <input
                      type="password"
                      className="form-control"
                      value={passwordConfirmation}
                      onChange={handlePasswordConfirmationChange}
                    />
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
