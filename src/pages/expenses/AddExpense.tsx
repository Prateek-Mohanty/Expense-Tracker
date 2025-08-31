import { useState } from "react";
import { Expense } from "../../common/Expense";

interface AddExpenseProps {
  addExpense: (expense: Expense) => void;
}

function AddExpense({ addExpense }: AddExpenseProps) {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0]; 
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!expenseName || !amount) return;

    const formattedDate = date; 
    addExpense({
      expenseName,
      amount: parseFloat(amount),
      formattedDate,
    });

    setExpenseName("");
    setAmount("");
    setDate(new Date().toISOString().split("T")[0]);

    console.log(`Expense Name: ${expenseName} amount: ${amount} date: ${date}`)
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
