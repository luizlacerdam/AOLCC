import React from 'react';
import '../assets/styles/Home.css';
import ProgramDetailCard from '../Components/ProgramDetailCard';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <div className="column">
                <div className="row-content d-flex align-items-center justify-content-center">
                    <ProgramDetailCard title='Program Name' content='Program Name' textAlign='left' />
                </div>
                <div className="row-content bg-success d-flex align-items-center justify-content-center">
                    Second Row
                </div>
            </div>

            <div className="column">
                <div className="row-content d-flex align-items-center justify-content-center cards-column">
                    <ProgramDetailCard title='Start and End Date' content='June 15th, 2024 - December 15th, 2024' />
                    <ProgramDetailCard title='Payment due' content='$18,000.00' />
                    <ProgramDetailCard title='Mentor' content='Mentor Name' />
                </div>
                <div className="row-content bg-success d-flex align-items-center justify-content-center">
                    Second Row
                </div>
            </div>
        </div>
    );
};

export default Home;