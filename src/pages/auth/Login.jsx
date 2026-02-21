import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();

  const handleLogin = (role) => {
    login(role);
    nav(role === "admin" ? "/admin" : "/user");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">

      <div className="bg-white p-10 rounded-2xl shadow-xl w-80 text-center">
        <h1 className="text-2xl font-bold mb-6">
          Pharma Support System
        </h1>

        <button
          onClick={() => handleLogin("user")}
          className="w-full bg-blue-500 text-white py-2 rounded mb-3 hover:bg-blue-600"
        >
          Login as Customer
        </button>

        <button
          onClick={() => handleLogin("admin")}
          className="w-full bg-gray-800 text-white py-2 rounded hover:bg-black"
        >
          Login as Admin
        </button>
      </div>
    </div>
  );
}