import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

interface LayoutProps {
  onLogout: () => void;
}

const Layout = ({ onLogout }: LayoutProps) => {
  return (
    <div>
      <Navbar onLogout={onLogout} />
      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
