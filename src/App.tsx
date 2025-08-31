import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login";
import AddExpense from "./pages/expenses/AddExpense";
import ViewExpense from "./pages/expenses/ViewExpense";
import Layout from "./components/Layout";
import { useState } from "react";

import FailedLogin from "./pages/auth/failed_login";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setUserLoggedIn={setUserLoggedIn} />} />
        <Route path="/failed-login" element={<FailedLogin />} />

        {userLoggedIn ? (
          <>
            <Route element={<Layout onLogout={() => setUserLoggedIn(false)} />}>
              <Route path="/add-expense" element={<AddExpense />} />
              <Route path="/view-expense" element={<ViewExpense />} />
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
