import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function FailedLogin() {
  const location = useLocation();
  const error = location.state?.error || "Login failed. Please try again.";

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="bg-white shadow-xl rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Login Failed 🚫</h2>
        <p className="text-gray-600 mb-6">{`${error}`}</p>
        <Link
          to="/login"
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Try Again
        </Link>
      </div>
    </div>
  );
}

export default FailedLogin;
