





import React, { useEffect, useState } from "react";
import "./AdminRegister.css";
import Header from "../header/header";
// import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Footer from "../footer/footer";
import { Alert } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
const AdminRegister = () => {
  const [AdminUser, SetAdminUser] = useState({
    Name: "",
    Mobile: "",
    Password: "",
    ConfPassword: "",
    Email: "",
  });
  // var box=document.getElementById('check')
  let [isAgreed, setIsAgreed] = useState(false);

  let handleCheckBox = (e) => {
    setIsAgreed (e.target.checked)
  };
  const handleChange = (e) => {
    const Name = e.target.name;
    const Value = e.target.value;
    SetAdminUser({
      ...AdminUser,
      [Name]: Value,
    });
  };
  const [errors, SetErrors] = useState({});
  // const ip=false;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!AdminUser.Name) {
      newErrors.Name = "user name is mandatory";
    }
    if (!AdminUser.Mobile) {
      newErrors.Mobile = "user mobile no is mandatory";
    } else if (isNaN(AdminUser.Mobile)) {
      newErrors.Mobile = "Mobile Number should be an integer value ";
    } else if (AdminUser.Mobile.length !== 10) {
      newErrors.Mobile = "Mobile Number should be min & max 10 ";
    }
    if (!AdminUser.Password) {
      newErrors.Password = "Enter Password";
    } else if (AdminUser.Password.length < 8) {
      newErrors.Password = "Password should contain minimum 8 values ";
    }
    if (!AdminUser.ConfPassword) {
      newErrors.ConfPassword = "Confirmatory password is required";
    } else if (AdminUser.ConfPassword !== AdminUser.Password) {
      newErrors.ConfPassword = "Password & Confirm password must be match";
    }
    if (!AdminUser.Email) {
      newErrors.Email = "Email is mandatory";
    }
    if (!isAgreed) {
      newErrors.Agreement = "Terms & Conditions should be accepted ";
    }

    SetErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post("http://localhost:3000/admin", AdminUser);
        console.log("User Register Successfully: ", AdminUser);
        toast.success("Registration Successfull");
        SetAdminUser({
          Name: "",
          Mobile: "",
          Password: "",
          ConfPassword: "",
          Email: "",
        });
      } catch (error) {
        console.log("Error in Registering User", error);
        toast.error("Registration failed please try again");
      }
    } else {
      // console.log('Signin validation failed',newErrors);
      // console.log('User Data: ',User);
      Object.values(newErrors).forEach((err) => {
        toast.warning(err);
      });
    }
  };
  const notify = () => toast();

  return (
    <>
      <Header />
      <div className="register-banner">
        {/* <img src="https://moitech.in/img/registerbanner.jpg"
          //  style={{position:"relative",display:"inline-block"}} alt="" class="register-banner"/> */}
        <div className="inner-banner row">
          <div className="col-lg-6">
            <h2
              className="mt-5"
              style={{
                textAlign: "center",
                padding: "120px",
                color: "MenuText",
              }}
            >
             Earn with us Grow with us
            </h2>
          </div>
          <div className="col-lg-6">
            <div className="register">
              <h2 style={{ color: "black", textAlign: "center" }}>
               Sign in
              </h2>
              <Form id="Logform" onSubmit={handleSubmit} className="inner-form">
                <Form.Group id="formInput" className="inputt">
                  <Form.Control
                    id="formInput"
                    name="Name"
                    placeholder="Name"
                    onChange={handleChange}
                    value={AdminUser.Name}
                    type="text"
                  />
                </Form.Group>
                <Form.Group id="formInput" className="inputt">
                  <Form.Control
                    name="Mobile"
                    placeholder="Mobile Number"
                    onChange={handleChange}
                    value={AdminUser.Mobile}
                    type="text"
                  />
                </Form.Group>
                <Form.Group id="formInput" className="inputt">
                  <Form.Control
                    name="Password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={AdminUser.Password}
                    type="password"
                  />
                </Form.Group>
                <Form.Group id="formInput" className="inputt">
                  <Form.Control
                    name="ConfPassword"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    value={AdminUser.ConfPassword}
                    type="password"
                  />
                </Form.Group>
                <Form.Group id="formInput" className="inputt">
                  <Form.Control
                    name="Email"
                    placeholder="Email Id"
                    onChange={handleChange}
                    value={AdminUser.Email}
                    type="email"
                  />
                </Form.Group>
                <Form.Check
                  type="checkbox"
                  checked={isAgreed}
                  onChange={handleCheckBox}
                  label="I agree to Event Planning terms of services"
                />
                <Button type="submit">Register</Button>
                <ToastContainer />
              </Form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AdminRegister;
