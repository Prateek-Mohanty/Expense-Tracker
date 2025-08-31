import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../api/api";

interface LoginProps {
  setUserLoggedIn: (value: boolean) => void;
}

function Login({ setUserLoggedIn }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const payload = new URLSearchParams();
      payload.append("username", username);
      payload.append("password", password);

      const response = await api.post("/auth/token", payload, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });

      if(response.status !== 200){
          setLoginError(response.data.detail)
        navigate("/failed-login",{state:{error:response.data.detail}})
      }

      setUserLoggedIn(true);
      navigate("/add-expense");

    } catch (err) {
      console.error("Login failed:", err);
      navigate("/failed-login");
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Login</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>

        {/* 👇 Sign Up link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-600 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
