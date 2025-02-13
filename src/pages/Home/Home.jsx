import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "emailjs-com";
import "./Home.css";
import WhychooseUs from "../../components/HomeComponents/WhychooseUs";
import Organization from "../../components/HomeComponents/Organization";
import ByTheName from "../../components/HomeComponents/ByTheName";
import BestSolutions from "../../components/HomeComponents/BestSolutions";
import SliderHome from "../../components/HomeComponents/SliderHome";
import clickSoundFile from "../../Assets/mouseClick.wav";
import ContactUs from '../ContactUs/ContactUs'
import ParticlesBackground from "../../components/particlecomponent/ParticlesBackground";
const Home = () => {
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
    <div className="HomePage">
      <div className="BrandingHerosec container-fluid">
        <div className="particles-wrapper">
          <ParticlesBackground />
        </div>
        <div className="brandingFirstDiv">
          <motion.p
            className="outbox mybox"
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Think OutSide the box
          </motion.p>
        </div>
        <div className="row">
          <div className="col-md-12 d-flex align-items-center justify-content-center">
            <div className="BrandHeading">
              <motion.h2
                initial="hidden"
                animate="visible"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ color: "#fff" }}
              >
                As Long As We Are Here There
              </motion.h2>
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                }}
              >
                {"Will Be Infinite Digital Ways To Succeed".split(" ").map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                    }}
                    style={{ display: "inline-block", marginRight: "8px", color: "#fff" }}
                  >
                    {word.split("").map((letter, letterIndex) => (
                      <motion.span
                        key={letterIndex}
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        style={{ display: "inline-block" }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.div
                className="button"
                id="homebutton"
                initial="hidden"
                animate={["visible", "float"]}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300 } },
                  hover: { scale: 1.1, y: -5, transition: { duration: 0.3 } },
                  float: { y: [0, -10, 0], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } },
                }}
                whileHover="hover"
              >
                <button style={{ color: "white" }} onClick={handleOpen}>Let's talk</button>
              </motion.div>
            </div>
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

      <WhychooseUs />
      <Organization />
      <ByTheName />
      <BestSolutions />
      <SliderHome />
      <div className="essentioaltook" style={{backgroundColor : "black"}}>
        <h1 style={{ color: "white" }}>Essential Tools</h1>
      </div>
      <div className="contacter">
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
