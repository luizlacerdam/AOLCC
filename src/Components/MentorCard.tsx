import React from 'react';
import '../assets/styles/MentorCard.css';
import { BiSolidUserRectangle } from 'react-icons/bi';
import { HiPhone } from 'react-icons/hi';
import { FaEnvelope } from 'react-icons/fa';

const MentorCard: React.FC = () => {
    return (
        <div className="mentor-card">
            <div className="mentor-header">
                Mentor
            </div>
            <div className="mentor-body">

                <BiSolidUserRectangle className='mentor-image' />

                <div className="mentor-details">
                    <div className="mentor-info">
                        <h4>Mentor Name</h4>
                        <p>Mentor Name</p>
                        <h5>Know your mentor</h5>
                        <p>Description...</p>
                    </div>
                    <div className="mentor-contact">
                        <h4>Contact Information</h4>
                        <p><HiPhone /> (###) ### - ####</p>
                        <p><FaEnvelope /> example@hotmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MentorCard;