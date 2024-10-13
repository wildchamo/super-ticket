import { TicketList } from "@/components/tickets/ticket-list";

export default function Tickets() {
  const tickets = [
    {
      id: 1,
      title: "Fix login bug",
      status: "In Progress",
      author: "Alice",
    },
    {
      id: 2,
      title: "Update user profile page",
      status: "Pending",
      author: "Bob",
    },
    {
      id: 3,
      title: "Make videos for the YouTube Channel",
      status: "Done",
      author: "David",
    },
    {
      id: 4,
      title: "Refactor codebase",
      status: "In Review",
      author: "Eve",
    },
  ];
  return (
    <div>
      <h1> Tickets </h1>

      <TicketList tickets={tickets} />
    </div>
  );
}
