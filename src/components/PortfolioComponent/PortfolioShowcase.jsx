import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioCard from './PortfolioCard';

const PortfolioShowcase = () => {
  const portfolioData = [
    {
      title: 'Project 1',
      image: 'https://via.placeholder.com/300',
      description: 'This is a description of Project 1.'
    },
    {
      title: 'Project 2',
      image: 'https://via.placeholder.com/300',
      description: 'This is a description of Project 2.'
    }
  ];

  return (
    <div className='PortfolioShowcase'>
      <div className="portfolioHeading text-center mb-5">
        <h1>Portfolio <span>Social Media</span></h1>
      </div>
        <div className="container-fluid">
            <div className="row d-flex  gap-5 gapset flex-wrap justify-content-center">
                    <div className="col-md-5 ">
                        <PortfolioCard title="Enter Your title" description='enter your description here....................' />
                    </div>
                    <div className="col-md-5 ">
                    <PortfolioCard title="Enter Your title" description='enter your description here....................' />
                    </div>
                    <div className="col-md-5 ">
                        <PortfolioCard title="Enter Your title" description='enter your description here....................' />
                    </div>
                    <div className="col-md-5 ">
                    <PortfolioCard title="Enter Your title" description='enter your description here....................' />
                    </div>
                    <div className="col-md-5 ">
                    <PortfolioCard title="Enter Your title" description='enter your description here....................' />
                    </div>
                    <div className="col-md-5 ">
                    <PortfolioCard title="Enter Your title" description='enter your description here....................' />
                    </div>
            </div>
        </div>
    </div>
  );
};

export default PortfolioShowcase;
