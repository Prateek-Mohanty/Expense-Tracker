import { Expense } from "../../common/Expense";

interface ViewExpenseProps {
  expenses: Expense[];
}

function ViewExpense({ expenses }: ViewExpenseProps) {
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
              </tr>
            </thead>
            <tbody>
              {expenses.map((exp) => (
                <tr>
                  <td className="border px-4 py-2">{exp.expenseName}</td>
                  <td className="border px-4 py-2">₹{exp.amount}</td>
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
