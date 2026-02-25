import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    // save user
    login(role);

    // navigate based on role
    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-80 text-center">
        <h2 className="text-xl font-bold mb-6">Login</h2>

        <button
          onClick={() => handleLogin("user")}
          className="w-full bg-indigo-600 text-white p-3 rounded mb-3"
        >
          Login as Customer
        </button>

        <button
          onClick={() => handleLogin("admin")}
          className="w-full bg-gray-800 text-white p-3 rounded"
        >
          Login as Admin
        </button>
      </div>
    </div>
  );
}