export default function PriorityBadge({ priority }) {

  const styles = {
    Critical: "bg-red-100 text-red-600",
    Major: "bg-orange-100 text-orange-600",
    Minor: "bg-green-100 text-green-600",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs ${styles[priority]}`}>
      {priority}
    </span>
  );
}