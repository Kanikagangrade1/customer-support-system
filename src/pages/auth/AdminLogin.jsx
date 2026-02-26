import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function AdminLogin() {
  const { loginAdmin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !password) return alert("Fill all fields");

    const success = loginAdmin(email, password);
    if (!success) return alert("Invalid Admin Credentials");

    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-bold">Admin Login</h2>
        <input type="email" placeholder="Admin Email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-2 border"/>
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full p-2 border"/>
        <button className="w-full bg-red-600 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}