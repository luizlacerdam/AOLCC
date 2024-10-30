import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaDollarSign, FaFileAlt } from 'react-icons/fa';
import '../assets/styles/Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../assets/imgs/logo.png';
import { MdHome } from 'react-icons/md';
import { GiGraduateCap } from 'react-icons/gi';
import { BsPersonFill } from 'react-icons/bs';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src={logo} alt="Logo" />
            </div>

            <Nav className="flex-column">
                <Nav.Item>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    >
                        <MdHome className="nav-icon" /> Home
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink
                        to="/program"
                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    >
                        <GiGraduateCap className="nav-icon" /> Program
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink
                        to="/payment"
                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    >
                        <FaDollarSign className="nav-icon" /> Payment
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink
                        to="/documents"
                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    >
                        <FaFileAlt className="nav-icon" /> Documents
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                    >
                        <BsPersonFill className="nav-icon" /> Contact us
                    </NavLink>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default Sidebar;
