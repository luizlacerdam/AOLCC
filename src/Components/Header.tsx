import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdNotificationsNone } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import '../assets/styles/Header.css';

const capitalize = (str: string) => {
    return str.charAt(1).toUpperCase() + str.slice(2);
};

const Header: React.FC = () => {
    const location = useLocation();
    const currentRouteName = location.pathname === '/' ? 'Home' : capitalize(location.pathname);

    return (
        <header className="header">
            {currentRouteName}
            <div className="header-icons">
                <MdNotificationsNone className="icon" />
                <FaUserCircle className="icon" />
            </div>
        </header>
    );
};

export default Header;