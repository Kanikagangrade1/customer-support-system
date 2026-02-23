import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();
    register(form);
    navigate("/login");
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="Name"
        onChange={(e)=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Email"
        onChange={(e)=>setForm({...form,email:e.target.value})}/>
      <input type="password" placeholder="Password"
        onChange={(e)=>setForm({...form,password:e.target.value})}/>
      <button>Register</button>
    </form>
  );
}