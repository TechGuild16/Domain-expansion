import { motion } from "framer-motion";
import React from "react";
import Anuja from "../../Assets/Anuja.jpeg";
import DB from "../../Assets/Dnyaneshwar baride.jpg";
import ishwar from "../../Assets/Ishwar Mule.png";
import Ravi from "../../Assets/Ravi.jpg";
import Suraj from "../../Assets/Suraj-Baride.jpg";
import Aditya from "../../Assets/adi_subham.jpg";
import mankrit from "../../Assets/mankrit.jpeg";

const OurTeam = [
  {
    id: 1,
    imgSrc: Suraj,
    title: "Suraj Baride",
    text: "CEO - Development Head",
  },
  {
    id: 2,
    imgSrc: ishwar,
    title: "Ishwar Mule",
    text: "WordPress Designer",
  },
  {
    id: 3,
    imgSrc: DB,
    title: "Dnyaneshwar Baride",
    text: "Team Lead - Frontend Developer",
  },
  {
    id: 4,
    imgSrc: Ravi,
    title: "Ravi Gaikwad",
    text: "Team Lead - Frontend Developer",
  },
  {
    id: 5,
    imgSrc: Anuja,
    title: "Anuja Srivastava",
    text: "React JS Developer",
  },
  {
    id: 6,
    imgSrc: mankrit,
    title: "Mankirat Singh",
    text: "React JS Developer",
  },
  {
    id: 7,
    imgSrc: Aditya,
    title: "Aditya Basantia",
    text: "React JS Developer",
  },
];

const CardComponent = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center flex-wrap gap-4 p-2">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 d-flex align-items-center justify-content-center">
            <div className="Our-Team-member">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Our Team
              </motion.h1>
            </div>
          </div>
        </div>
      </div>

      {OurTeam.map((card) => (
        <div
          className="card text-center shadow-lg p-3 bg-black border border-white"
          style={{ width: "18rem" }}
          key={card.id}
        >
          <img
            src={card.imgSrc}
            className="card-img-top rounded-circle mx-auto d-block mt-3"
            alt={card.title}
            style={{ width: "140px", height: "140px", objectFit: "cover" }}
          />
          <div className="card-body text-white">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
