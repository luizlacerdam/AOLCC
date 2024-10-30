import React from 'react';
import '../assets/styles/Home.css';
import ProgramDetailCard from '../Components/ProgramDetailCard';
import StepsToFollow from '../Components/StepsToFollow';
import Calendar from '../Components/Calendar';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <div className="column">
                <div className="row-content d-flex align-items-center justify-content-center">
                    <ProgramDetailCard title='Program Name' content='Program Name' textAlign='left' />
                </div>
                <div className="row-content d-flex align-items-center justify-content-center">
                    <StepsToFollow />
                </div>
            </div>

            <div className="column">
                <div className="row-content d-flex align-items-center justify-content-center cards-column">
                    <ProgramDetailCard title='Start and End Date' content='June 15th, 2024 - December 15th, 2024' />
                    <ProgramDetailCard title='Payment due' content='$18,000.00' />
                    <ProgramDetailCard title='Mentor' content='Mentor Name' />
                </div>
                <div className="row-content new-division">
                    <div className="sub-row first-sub-row">
                        <div className="sub-column"> <Calendar /> </div>
                        <div className="sub-column">Right Column Content</div>
                    </div>
                    <div className="sub-row second-sub-row">
                        Second Sub Row (50% height)
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;