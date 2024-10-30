import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import '../assets/styles/Layout.css'

const Layout: React.FC = () => {
    return (
        <div className="Layout">
            <Navbar />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;