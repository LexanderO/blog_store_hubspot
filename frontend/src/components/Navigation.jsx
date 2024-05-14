import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navigation = () => {
  const { isAuthenticated } = useAuth();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-gray-800 p-4">
      {isAuthenticated && (
        <div className="flex justify-between items-center">
          <div className="text-white space-x-4">
            <Link
              to="/blogs"
              className="hover:text-gray-300 transition duration-150 ease-in-out"
            >
              My Blogs
            </Link>
            <span>|</span>
            <Link
              to="/stored-blogs"
              className="hover:text-gray-300 transition duration-150 ease-in-out"
            >
              Public Blogs
            </Link>
            <span>|</span>
            <Link
              to="/"
              onClick={handleLogout}
              className="hover:text-gray-300 transition duration-150 ease-in-out"
            >
              Logout
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
