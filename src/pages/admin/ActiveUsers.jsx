export default function ActiveUsers() {
  const users = [
    { name: "Hospital A", status: "Online" },
    { name: "Distributor B", status: "Online" },
    { name: "Pharmacy C", status: "Offline" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h1 className="text-xl font-bold mb-4">
        Active Customers
      </h1>

      {users.map((u, i) => (
        <div
          key={i}
          className="flex justify-between border-b py-2"
        >
          <span>{u.name}</span>
          <span
            className={
              u.status === "Online"
                ? "text-green-600"
                : "text-gray-400"
            }
          >
            {u.status}
          </span>
        </div>
      ))}
    </div>
  );
}