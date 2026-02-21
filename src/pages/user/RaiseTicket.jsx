import { useState } from "react";
import { useTicket } from "../../context/TicketContext";

export default function RaiseTicket() {
  const { addTicket } = useTicket();

  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Minor",
    screenshot: null,
  });

  const submit = (e) => {
    e.preventDefault();
    addTicket(form);
    alert("Ticket Raised Successfully");
  };

  return (
    <form onSubmit={submit} className="max-w-xl mx-auto p-6 space-y-4">
      <input
        placeholder="Issue Title"
        className="w-full border p-3 rounded"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <textarea
        placeholder="Describe Issue"
        className="w-full border p-3 rounded"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <select
        className="border p-3 rounded w-full"
        onChange={(e) => setForm({ ...form, priority: e.target.value })}
      >
        <option>Minor</option>
        <option>Major</option>
        <option>Critical</option>
      </select>

      <input
        type="file"
        onChange={(e) =>
          setForm({ ...form, screenshot: URL.createObjectURL(e.target.files[0]) })
        }
      />

      <button className="bg-indigo-600 text-white px-4 py-2 rounded w-full">
        Raise Ticket
      </button>
    </form>
  );
}