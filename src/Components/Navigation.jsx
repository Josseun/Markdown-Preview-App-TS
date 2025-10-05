import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  return (
    <nav className="bg-gray-900 text-white px-6 py-3 shadow-md">
      <div className="flex items-center gap-6">
        <Link
          to="/"
          className={`px-4 py-2 rounded transition-colors ${
            location.pathname === "/" ? "bg-blue-600" : "hover:bg-gray-800"
          }`}
        >
          Editor
        </Link>
        <Link
          to="/error-test"
          className={`px-4 py-2 rounded transition-colors ${
            location.pathname === "/error-test"
              ? "bg-blue-600"
              : "hover:bg-gray-800"
          }`}
        >
          Test Error Boundary
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
