import React from "react";
import './Blogs.css'
const Blogs = () => {
  return <div className="BlogsPage">
        <div className="outerwrapper">
            <div className="blogheading">
              <h1>Untitled Blog</h1>
              <div className="bloginput">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
              </div>
            </div>
            <div className="blogDetails">
              <p>New Brands, New Future in the<br/>Technology, solutions and updates</p>
            </div>
        </div>
  </div>;
};

export default Blogs;
