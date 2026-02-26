export function generateTicketId(existingTickets = []) {
  const year = new Date().getFullYear();

  // next number based on tickets count
  const nextNumber = existingTickets.length + 1;

  // padding → 0001, 0002, 0010
  const padded = String(nextNumber).padStart(4, "0");

  return `TCK-${year}-${padded}`;
}
// console.log(generateTicketId([]));