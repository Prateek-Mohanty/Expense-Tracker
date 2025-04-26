import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/add-expense" style={{ marginRight: '10px' }}>Add Expense</Link>
      <Link to="/view-expense" style={{ marginRight: '10px' }}>View Expenses</Link>
      <Link to="/">Dashboard</Link>
    </nav>
  );
};

export default Navbar;
