import { useState } from "react";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";

function AddExpense() {
  const navigate = useNavigate()
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0]; 
  });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Get token from localStorage
  const token = localStorage.getItem('token');
  if (!expenseName || !amount) return;

  try {
    // Make POST request
    const response = await api.post(
      "/expense/create_expense",
      {
        expense_name: expenseName,
        amount: amount,
        date: date,
      },
      {
        headers: { 'Authorization': `Bearer ${token}` }
      }
    );

    if (response.status === 201) {
      navigate("/view-expense");
    }

    // Clear form fields
    setExpenseName("");
    setAmount("");
    setDate(new Date().toISOString().split("T")[0]);

    console.log(`Expense Name: ${expenseName}, Amount: ${amount}, Date: ${date}`);

  } catch (error: any) {
    console.error("Failed to create expense:", error.response ? error.response.data : error.message);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white shadow-2xl rounded-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">Add Expense</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Expense Title"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Amount"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="date"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddExpense;
