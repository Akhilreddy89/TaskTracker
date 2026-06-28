import "../style/NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to={user ? "/home" : "/"}>📋 Task Tracker</Link>
      </div>

      <ul className="navbar-links">
        {user ? (
          <>
            <li>
              <Link to="/home">Home</Link>
            </li>

            <li>
              <Link to="/tasks">Tasks</Link>
            </li>

            <li className="navbar-user">
              Hello, {user.name}
            </li>

            <li>
              <button
                className="logout-btn logout"
                onClick={handleLogout}
                // style={color="blue"}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;