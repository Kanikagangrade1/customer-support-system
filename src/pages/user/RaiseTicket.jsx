import { useState } from "react";
import { useTickets } from "../../context/TicketContext";

export default function RaiseTicket() {
  const { raiseTicket, tickets } = useTickets();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "General",
    priority: "Medium",
  });

  const [file, setFile] = useState(null);

  // generate unique ticket id
  const generateTicketId = (tickets) => {
    return "TCK-" + (tickets.length + 1).toString().padStart(4, "0");
  };

  // handle input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // file upload
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTicket = {
      id: generateTicketId(tickets),
      title: form.title,
      description: form.description,
      category: form.category,
      priority: form.priority,
      status: "Pending",
      attachment: file ? file.name : null,
      createdAt: new Date().toISOString(),
    };

    raiseTicket(newTicket);

    alert("Ticket Raised Successfully ✅");

    // reset form
    setForm({
      title: "",
      description: "",
      category: "General",
      priority: "Medium",
    });

    setFile(null);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">
        Raise Support Ticket
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

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
          rows="2"
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

        {/* Priority */}
        <div>
          <label className="block font-medium mb-1">Priority</label>
          <select
            name="priority"
            value={form.priority}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
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
            <p className="text-sm text-green-600 mt-1">
              Selected: {file.name}
            </p>
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