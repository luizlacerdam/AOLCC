import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import '../assets/styles/Layout.css'
import Header from "./Header";

const Layout: React.FC = () => {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                <Header />
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;