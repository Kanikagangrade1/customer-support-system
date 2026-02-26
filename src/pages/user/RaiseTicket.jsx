import { useState, useEffect } from "react";
import { useTickets } from "../../context/TicketContext";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function RaiseTicket() {
  const { raiseTicket, tickets } = useTickets();
  const { user } = useAuth(); // get logged-in user
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "General",
  });

  const [file, setFile] = useState(null);

  // redirect if not logged in
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  // generate unique ticket id
  const generateTicketId = () => {
    return "TCK-" + (tickets.length + 1).toString().padStart(4, "0");
  };

  // handle input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // handle file
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTicket = {
      id: generateTicketId(),
      user: user.email, // automatically link ticket to logged-in user
      title: form.title,
      description: form.description,
      category: form.category,
      status: "Pending",
      attachment: file ? file.name : null,
      createdAt: new Date().toISOString(),
    };

    raiseTicket(newTicket);
    alert("Ticket Raised Successfully");

    setForm({
      title: "",
      description: "",
      category: "General",
    });
    setFile(null);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Raise Support Ticket</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* User Email (readonly, logged-in) */}
        <input
          type="email"
          value={user?.email || ""}
          readOnly
          className="w-full border p-3 rounded bg-gray-100"
        />

        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Issue Title"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Describe your issue..."
          value={form.description}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          rows="3"
          required
        />

        {/* Category */}
        <div>
          <label className="block font-medium mb-1">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          >
            <option>General</option>
            <option>Technical</option>
            <option>Billing</option>
          </select>
        </div>

        {/* File Upload */}
        <div>
          <label className="block font-medium mb-1">Attachment</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full border p-2 rounded"
          />
          {file && (
            <p className="text-sm text-green-600 mt-1">Selected: {file.name}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
        >
          Submit Ticket
        </button>
      </form>
    </div>
  );
}