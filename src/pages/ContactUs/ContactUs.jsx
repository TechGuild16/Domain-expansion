import emailjs from "emailjs-com";
import { motion } from "framer-motion";
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
        <div
          className="w-100"
          style={{ maxWidth: "500px", paddingTop: "17vh" }}
        >
          <motion.h1
            className="text-center fw-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Contact <span className="text-primary">Me!</span>
          </motion.h1>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {[
              { name: "fullName", placeholder: "Full Name" },
              { name: "email", placeholder: "Email Address" },
              { name: "mobileNumber", placeholder: "Mobile Number" },
              { name: "companyName", placeholder: "Company Name" },
              { name: "emailSubject", placeholder: "Email Subject" },
            ].map((field, index) => (
              <motion.div
                className="mb-3"
                key={field.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 * index,
                  duration: 0.8,
                  ease: "easeOut",
                }}
              >
                <input
                  type={field.name === "email" ? "email" : "text"}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  className="form-control"
                  style={{
                    border: "1px solid blue",
                    borderRadius: "8px",
                    padding: "10px",
                  }}
                />
                {formErrors[field.name] && (
                  <small className="text-danger">
                    {formErrors[field.name]}
                  </small>
                )}
              </motion.div>
            ))}
            <motion.div
              className="mb-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            >
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
            </motion.div>
            <motion.button
              type="submit"
              className="btn btn-primary w-100"
              disabled={!isFormValid()}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              Let's Talk
            </motion.button>
          </motion.form>
        </div>
      </div>
      <div>
        <Details />
      </div>
    </>
  );
};

export default ContactForm;
