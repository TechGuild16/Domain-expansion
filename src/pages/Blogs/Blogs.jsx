import React, { useState } from "react";
import "./Blogs.css";
import BlogCard from "../../components/BlogComponents/BlogCard";
import blogImg1 from '../../Assets/blog-img-1.png'
import blogImg2 from '../../Assets/blog-img-2.png'
import blogImg3 from '../../Assets/blog-img-3.png'
import blogImg4 from '../../Assets/blog-img-4.png'
const categories = ["Business", "Design", "Development", "Marketing", "Blockchain"];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("Business");

  return (
    <div className="BlogsPage">
      <div className="outerwrapper">
        <div className="blogheading">
          <h1>Cyber Blog</h1>
          <div className="bloginput">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="blogDetails">
          <p>
            Tech trends, futuristic insights, and 
            <br />
            next-gen solutions.
          </p>
        </div>
      </div>

      <div className="slider">
        <div className="miniSlider">
          {categories.map((item) => (
            <div
              key={item}
              className={`category-item ${activeCategory === item ? "blogActive" : "blogNotActive"}`}
              onClick={() => setActiveCategory(item)}
            >
              <span className="glow">{item}</span>
              <span className="wave"></span>
            </div>
          ))}
        </div>
      </div>
      <div className="blogCards container-fluid">
        <div className="row gap-4 px-5 pt-4 ">
          <div className="col-md-4 blog-Carder"><BlogCard imglink={blogImg1} /></div>
          <div className="col-md-4 blog-Carder"><BlogCard imglink={blogImg2} /></div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
