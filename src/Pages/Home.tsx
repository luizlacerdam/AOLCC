import React from 'react';
import '../assets/styles/Home.css';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <div className="column">
                <div className="row-content bg-danger d-flex align-items-center justify-content-center">
                    First Row
                </div>
                <div className="row-content bg-success d-flex align-items-center justify-content-center">
                    Second Row
                </div>
            </div>

            <div className="column">
                <div className="row-content bg-danger d-flex align-items-center justify-content-center">
                    First Row
                </div>
                <div className="row-content bg-success d-flex align-items-center justify-content-center">
                    Second Row
                </div>
            </div>
        </div>
    );
};

export default Home;


