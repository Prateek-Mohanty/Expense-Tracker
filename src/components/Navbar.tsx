import { NavLink, useNavigate } from "react-router-dom";

interface NavbarProps {
  onLogout: () => void;
}

const Navbar = ({ onLogout }: NavbarProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();        // clear login state
    navigate("/login"); // redirect to login
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex gap-6 justify-between shadow-lg">
      <div className="flex gap-6">
        <NavLink
          to="/add-expense"
          className={({ isActive }) =>
            isActive ? "font-bold underline" : "hover:underline"
          }
        >
          Add Expense
        </NavLink>
        <NavLink
          to="/view-expense"
          className={({ isActive }) =>
            isActive ? "font-bold underline" : "hover:underline"
          }
        >
          View Expenses
        </NavLink>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
