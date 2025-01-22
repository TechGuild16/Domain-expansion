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
    const mobileNumberRegex = /^[0-9]{10}$/; // Regex for 10-digit mobile number

    if (!formData.fullName) errors.fullName = "Full Name is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!mobileNumberRegex.test(formData.mobileNumber))
      errors.mobileNumber = "Mobile Number must be 10 digits.";
    if (!formData.companyName) errors.companyName = "Company Name is required.";
    if (!formData.emailSubject)
      errors.emailSubject = "Email Subject is required.";
    if (!formData.message) errors.message = "Message is required.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please fill all fields correctly.");
      return;
    }

    emailjs
      .send(
        "service_oyeu98a", // Replace with your EmailJS service ID
        "template_wrqvgpf", // Replace with your EmailJS template ID
        {
          to_email: "adityayt2003@gmail.com",
          from_name: formData.fullName,
          from_email: formData.email,
          subject: formData.emailSubject,
          message: formData.message,
          mobile: formData.mobileNumber,
          company_name: formData.companyName,
        },
        "D92VR1BGClds1s0u0" // Replace with your EmailJS user ID
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

  return (
    <>
      <div className="min-vh-100 d-flex align-items-center justify-content-center text-white p-4">
        <div className="w-100" style={{ maxWidth: "500px" }}>
          <h1 className="text-center fw-bold mb-4">
            Contact <span className="text-primary">Me!</span>
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="form-control"
                style={{
                  border: "1px solid blue",
                  borderRadius: "8px",
                  padding: "10px",
                }}
              />
              {formErrors.fullName && (
                <small className="text-danger">{formErrors.fullName}</small>
              )}
            </div>

            <div className="mb-3">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-control"
                style={{
                  border: "1px solid blue",
                  borderRadius: "8px",
                  padding: "10px",
                }}
              />
              {formErrors.email && (
                <small className="text-danger">{formErrors.email}</small>
              )}
            </div>
            <div className="mb-3">
              <input
                type="tel"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="form-control"
                required
                style={{
                  border: "1px solid blue",
                  borderRadius: "8px",
                  padding: "10px",
                }}
              />
              {formErrors.mobileNumber && (
                <small className="text-danger">{formErrors.mobileNumber}</small>
              )}
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                className="form-control"
                required
                style={{
                  border: "1px solid blue",
                  borderRadius: "8px",
                  padding: "10px",
                }}
              />
              {formErrors.companyName && (
                <small className="text-danger">{formErrors.companyName}</small>
              )}
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="emailSubject"
                placeholder="Email Subject"
                value={formData.emailSubject}
                onChange={handleChange}
                required
                className="form-control"
                style={{
                  border: "1px solid blue",
                  borderRadius: "8px",
                  padding: "10px",
                }}
              />
              {formErrors.emailSubject && (
                <small className="text-danger">{formErrors.emailSubject}</small>
              )}
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-control"
                rows="5"
                style={{
                  border: "1px solid blue",
                  borderRadius: "8px",
                  padding: "10px",
                }}
              ></textarea>
              {formErrors.message && (
                <small className="text-danger">{formErrors.message}</small>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={!isFormValid()} // Disable button if form is invalid
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
