import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import planning from "../../Assets/strategic.png";
import flexibleService from "../../Assets/flexibleService.png";
import dedicatedTeam from "../../Assets/dedicatedTeam.png";
import continuos from "../../Assets/continuos.png";
import optimal from "../../Assets/optimal.png";
import img1 from "../../Assets/solImg1.png";
import Slider from "react-slick";
import img2 from "../../Assets/solImg2.png";
import img3 from "../../Assets/solImg3.png";
import img4 from "../../Assets/solImg4.png";
import img5 from "../../Assets/solImg5.png";
import img6 from "../../Assets/solImg6.png";
import img7 from "../../Assets/solImg7.png";
import img8 from "../../Assets/solImg8.png";
import img9 from "../../Assets/solImg9.png";
import img10 from "../../Assets/solImg10.png";
import img11 from "../../Assets/solImg11.png";
import img12 from "../../Assets/solImg12.png";
import img13 from "../../Assets/solImg13.png";
import img14 from "../../Assets/solImg14.png";
import img15 from "../../Assets/solImg15.png";
import img16 from "../../Assets/solImg16.png";
import img17 from "../../Assets/solImg17.png";
import img18 from "../../Assets/solImg18.png";
import img19 from "../../Assets/solImg19.png";
import img20 from "../../Assets/solImg20.png";
import emailjs from "emailjs-com";
import SolutionsCard from "./SolutionsCard";
import SliderHome from "../../components/HomeComponents/SliderHome";
import clickSoundFile from "../../Assets/mouseClick.wav";
const CustomerService = () => {
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
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, 
        slidesToScroll: 1,
        draggable: true, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    const Solutions = [
        { Highlight: "CD Solutions", title: "Logo Design", imgLink: img1 },
        { Highlight: "CC Solutions", title: "Website Content", imgLink: img2 },
        { Highlight: "CC Solutions", title: "Blog and Article Writing", imgLink: img3 },
        { Highlight: "DM Solutions", title: "Content Marketing", imgLink: img4 },
        { Highlight: "WAD Solutions", title: "E-Commerce Development", imgLink: img5 },
        { Highlight: "CC Solutions", title: "Social Media Copy", imgLink: img6 },
        { Highlight: "WAD Solutions", title: "Mobile App Development", imgLink: img7 },
        { Highlight: "CD Solutions", title: "Print Design", imgLink: img8 },
        { Highlight: "DM Solutions", title: "Email Marketing", imgLink: img9 },
        { Highlight: "CD Solutions", title: "Website and App Design", imgLink: img10 },
        { Highlight: "DM Solutions", title: "Analytics and Reporting", imgLink: img11 },
        { Highlight: "CD Solutions", title: "Social Media Graphics", imgLink: img12 },
        { Highlight: "WAD Solutions", title: "Website Development", imgLink: img13 },
        { Highlight: "WAD Solutions", title: "Maintenance and Support", imgLink: img14 },
        { Highlight: "DM Solutions", title: "Performance Marketing", imgLink: img15 },
        { Highlight: "DM Solutions", title: "Social Media Management", imgLink: img16 },
        { Highlight: "CC Solutions", title: "Product Descriptions", imgLink: img17 },
        { Highlight: "DM Solutions", title: "Search Engine Optimization", imgLink: img18 },
        { Highlight: "CD Solutions", title: "Branding and Identity Design", imgLink: img20 },
        { Highlight: "WAD Solutions", title: "Custom Web Applications", imgLink: img19 },
    ];
    const headingVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const paragraphVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
        },
    };

    const dotVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    };

    const services = [
        { name: "Strategic Planning", img: planning },
        { name: "Flexible Services", img: flexibleService },
        { name: "Dedicated Team", img: dedicatedTeam },
        { name: "Continuous Feedback", img: continuos },
        { name: "Optimal Results", img: optimal },
    ];

    return (
        <div>
            {/* Hero Section */}
            <div className="BrandingHerosec container-fluid" style={{ paddingTop: "9vw" }}>
                <div className="row">
                    <div className="col-md-12 d-flex align-items-center justify-content-center">
                        <motion.div
                            className="BrandHeading"
                            initial="hidden"
                            whileInView="visible"
                            variants={headingVariants}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <h1>Let's Bring Your Ideas to Life</h1>
                            <motion.p
                                variants={paragraphVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                Turning Your Ideas into Stunning Visuals: Let’s Make Your Vision a Reality.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>

                <div className="howItWorks pb-5">
                    <div className="contentwork">
                        <h2>How It Works:</h2>
                        <p className="pt-2">
                            Our process for custom digital solutions is straightforward. We start with a thorough consultation to
                            understand your business, goals, and challenges.
                            <br />
                            From there, our expert team will work closely with you to design a personalized strategy that meets your
                            exact needs.
                        </p>
                    </div>

                    <div className="services-list">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="service-item"
                                initial="hidden"
                                whileInView="visible"
                                variants={dotVariants}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div className="service-dot">
                                    <img src={service.img} alt={service.name} className="service-img" />
                                </div>
                                <span style={{ color: "#b1b1b1" }}>{service.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="AllServices pb-5">
                    <div className="servicesHeading">
                        <h1>All Services</h1>
                    </div>
                    <div className="customer-service-slider pt-4">
                        <Slider {...sliderSettings}>
                            {Solutions.map((solution, index) => (
                                <SolutionsCard
                                    key={index}
                                    Highlight={solution.Highlight}
                                    Title={solution.title}
                                    imgLink={solution.imgLink}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className="tailoredStrategrgy pb-5">
                    <div className="headingtailor">
                        <h1><span className="boldpart">Develop a tailored strategy</span>, and drive your<br /> success in the digital world.</h1>
                        <p className="pt-3">Get in touch with us. Our team is here to provide expert guidance</p>
                    </div>
                    <motion.div
                        className="button"
                        initial="hidden"
                        animate={["visible", "float"]}
                        style={{display: "flex", justifyContent: "center"}}
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300 } },
                            hover: { scale: 1, y: -5, transition: { duration: 0.3 } },
                            float: { y: [0, -10, 0], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } },
                        }}
                        whileHover="hover"
                    >
                        <button onClick={handleOpen}>Let's talk</button>
                    </motion.div>
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
    );
};

export default CustomerService;
