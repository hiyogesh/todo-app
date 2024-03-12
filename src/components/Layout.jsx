import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import { AuthProvider } from "../context/AuthContext";

const Layout = () => {
  return (
    <div className="wrapper">
      <AuthProvider>
        <Navbar />
        <Outlet />
      </AuthProvider>
    </div>
  );
};
export default Layout;
