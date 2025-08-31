import { Expense } from "../../common/Expense";
import { useEffect, useState } from "react";
import api from "../../api/api";

function ViewExpense() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("You must be logged in");
          setLoading(false);
          return;
        }

        const response = await api.get<Expense[]>("/expense/get_all", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setExpenses(response.data);
      } catch (err: any) {
        console.error("Error fetching expenses:", err);
        setError("Failed to load expenses");
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  if (loading) return <p className="text-gray-500">Loading expenses...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Expenses</h2>
        {expenses.length === 0 ? (
          <p className="text-gray-500">No expenses added yet.</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Amount</th>
                <th className="border px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((exp) => (
                <tr key={exp.id}>
                  <td className="border px-4 py-2">{exp.expense_name}</td>
                  <td className="border px-4 py-2">₹{exp.amount}</td>
                  <td className="border px-4 py-2">{exp.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ViewExpense;
