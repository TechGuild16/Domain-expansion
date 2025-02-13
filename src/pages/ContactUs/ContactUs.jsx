import emailjs from "emailjs-com";
import React, { useState } from "react";
import Details from "./Details";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    emailSubject: "",
    message: "",
    companyName: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    const mobileNumberRegex = /^[0-9]{10}$/;

    if (!formData.fullName) errors.fullName = "Full Name is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!mobileNumberRegex.test(formData.mobileNumber))
      errors.mobileNumber = "Mobile Number must be 10 digits.";
    if (!formData.companyName) errors.companyName = "Company Name is required.";
    if (!formData.emailSubject)
      errors.emailSubject = "Email Subject is required.";
    if (!formData.message) errors.message = "Message is required.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please fill all fields correctly.");
      return;
    }

    emailjs
      .send(
        "service_oyeu98a",
        "template_wrqvgpf",
        {
          to_email: "adityayt2003@gmail.com",
          from_name: formData.fullName,
          from_email: formData.email,
          subject: formData.emailSubject,
          message: formData.message,
          mobile: formData.mobileNumber,
          company_name: formData.companyName,
        },
        "D92VR1BGClds1s0u0"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          mobileNumber: "",
          emailSubject: "",
          message: "",
          companyName: "",
        });
        setFormErrors({});
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  const isFormValid = () =>
    formData.fullName &&
    formData.email &&
    /^[0-9]{10}$/.test(formData.mobileNumber) &&
    formData.companyName &&
    formData.emailSubject &&
    formData.message;

  const inputStyle = {
    border: "1px solid blue",
    borderRadius: "8px",
    padding: "10px",
    width: "calc(100% - 120px)", // Adjust width to leave space for label
    marginLeft: "120px", // Push input to the right to make space for label
  };

  const formGroupStyle = {
    position: "relative",
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
  };

  const labelStyle = {
    position: "absolute",
    left: "0",
    width: "118px",
    textAlign: "right",
    color: "#fff",
    marginRight: "15px",
  };

  const textareaGroupStyle = {
    ...formGroupStyle,
    alignItems: "flex-stasrt",
    paddingTop: "10px",
  };

  return (
    <>
      <div className="min-vh-100 d-flex align-items-center justify-content-center text-white p-4">
        <div className="w-100" style={{ maxWidth: "500px" }}>
          <h1 className="text-center fw-bold mb-4 pt-5">
            Contact <span className="formname">Me!</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div style={formGroupStyle}>
              <label style={labelStyle}>Full Name: </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="form-control"
                style={inputStyle}
              />
              {formErrors.fullName && (
                <small className="text-danger">{formErrors.fullName}</small>
              )}
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Email Address: </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-control"
                style={inputStyle}
              />
              {formErrors.email && (
                <small className="text-danger">{formErrors.email}</small>
              )}
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Mobile Number: </label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="form-control"
                required
                style={inputStyle}
              />
              {formErrors.mobileNumber && (
                <small className="text-danger">{formErrors.mobileNumber}</small>
              )}
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Company Name: </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="form-control"
                required
                style={inputStyle}
              />
              {formErrors.companyName && (
                <small className="text-danger">{formErrors.companyName}</small>
              )}
            </div>

            <div style={formGroupStyle}>
              <label style={labelStyle}>Email Subject: </label>
              <input
                type="text"
                name="emailSubject"
                value={formData.emailSubject}
                onChange={handleChange}
                required
                className="form-control"
                style={inputStyle}
              />
              {formErrors.emailSubject && (
                <small className="text-danger">{formErrors.emailSubject}</small>
              )}
            </div>

            <div style={textareaGroupStyle}>
              <label style={labelStyle}>Your Message: </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-control"
                rows="5"
                style={inputStyle}
              ></textarea>
              {formErrors.message && (
                <small className="text-danger">{formErrors.message}</small>
              )}
            </div>

            <button
              type="submit"
              className="btn myformbutton w-100"
              disabled={!isFormValid()}
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>
      <div>
        <Details />
      </div>
    </>
  );
};

export default ContactForm;
