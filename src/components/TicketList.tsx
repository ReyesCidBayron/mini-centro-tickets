import type { Ticket } from "../types/ticket";
import { TicketCard } from "./TicketCard";

interface Props {
  tickets: Ticket[];
}

export function TicketList({ tickets }: Props) {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
      }}
    >
      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
        />
      ))}
    </ul>
  );
}