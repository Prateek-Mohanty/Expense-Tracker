import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login";
import AddExpense from "./pages/expenses/AddExpense";
import ViewExpense from "./pages/expenses/ViewExpense";
import Layout from "./components/Layout";
import { useState } from "react";
import { Expense } from "./common/Expense";
import FailedLogin from "./pages/auth/failed_login";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (expense: Expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setUserLoggedIn={setUserLoggedIn} />} />
        <Route path="/failed-login" element={<FailedLogin />} />

        {userLoggedIn ? (
          <>
            <Route element={<Layout onLogout={() => setUserLoggedIn(false)} />}>
              <Route path="/add-expense" element={<AddExpense addExpense={addExpense} />} />
              <Route path="/view-expense" element={<ViewExpense expenses={expenses} />} />
            </Route>
          </>
        ) : (
          <Route path="*" element={<Login setUserLoggedIn={setUserLoggedIn} />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
