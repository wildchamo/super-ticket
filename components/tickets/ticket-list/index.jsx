import Link from "next/link";

export function TicketList({ tickets }) {
  return (
    <table>
      <thead>
        <th>ID</th>
        <th></th>
        <th>Status</th>
      </thead>
      <tbody>
        {tickets.map((ticket) => (
          <tr key={ticket.id}>
            <td>
              <Link href={"tickets/details/" + ticket.id}>{ticket.id}</Link>
            </td>
            <td>{ticket.title}</td>
            <td>{ticket.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
