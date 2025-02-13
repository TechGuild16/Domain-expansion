import { AnimatePresence,motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import emailjs from "emailjs-com";
import clickSoundFile from "../../Assets/mouseClick.wav";

const LetsTalk = ({firstText,secondText,desc}) => {
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    phoneNumber: "",
    email: "",
    projectDetails: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const clickSound = useRef(new Audio(clickSoundFile));

  useEffect(() => {
    clickSound.current.load();
  }, []);

  function playSound() {
    clickSound.current.currentTime = 0;
    clickSound.current.play();
  }

  function handleOpen() {
    playSound();
    setFormOpen(true);
  }

  function handleClose() {
    playSound();
    setFormOpen(false);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = "First Name is required.";
    if (!formData.lastName) errors.lastName = "Last Name is required.";
    if (!formData.businessName) errors.businessName = "Business Name is required.";
    if (!/^[0-9]{10}$/.test(formData.phoneNumber))
      errors.phoneNumber = "Phone Number must be 10 digits.";
    if (!formData.email) errors.email = "Email is required.";
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
          firstName: formData.firstName,
          lastName: formData.lastName,
          businessName: formData.businessName,
          phoneNumber: formData.phoneNumber,
          email: formData.email,
          projectDetails: formData.projectDetails,
        },
        "D92VR1BGClds1s0u0"
      )
      .then((response) => {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          businessName: "",
          phoneNumber: "",
          email: "",
          projectDetails: "",
        });
        setFormErrors({});
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message. Please try again.");
      });
  };
  return (
    <div className='letsTalk'>
      <div className="talkDiv">
            <div className="talkDivheading">
                <h1>{firstText} <span className='boldpart'>{secondText}</span></h1>

                <p>{desc}</p>
                <div className="button">
                  <button onClick={handleOpen}>
                    Let's talk
                  </button>
                  </div>
            </div>
      </div>
      <AnimatePresence>
        {formOpen && (
          <>
            <div className="modal-overlay" onClick={handleClose}></div>
            <motion.div
              className="modal"
              initial={{ y: "-100vh", x: "-50%", opacity: 0 }}
              animate={{ y: "-50%", x: "-50%", opacity: 1 }}
              exit={{ y: "-100vh", opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
            >
              <div className="buttonClose">
              <button onClick={handleClose} className="modal-close-button">
                &#x2715;
              </button>
              </div>
              <h2>Let’s put your words to work.</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name*</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name*</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="businessName">Business Name*</label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Bussiness Name"
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number*</label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="projectDetails">Project Details</label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    placeholder="Enter The Project Detail"
                    rows="4"
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LetsTalk
