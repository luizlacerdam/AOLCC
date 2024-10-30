import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import '../assets/styles/Header.css';
const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-title">Home</div>
            <div className="header-icons">
                <FaBell className="icon" />
                <FaUserCircle className="icon" />
            </div>
        </header>
    );
};

export default Header;
