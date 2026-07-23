import { useMutation, useQueryClient } from "@tanstack/react-query";

import { resolverTicket } from "../api/ticketsApi";
import type { Ticket } from "../types/ticket";

interface Props {
  ticket: Ticket;
}

export function TicketCard({ ticket }: Props) {

  const queryClient = useQueryClient();

  const mutation = useMutation({

    mutationFn: () => resolverTicket(ticket.id),

    onSuccess: (ticketActualizado) => {

      queryClient.setQueryData<Ticket[]>(["tickets"], (ticketsActuales = []) => {

        return ticketsActuales.map(t =>

          t.id === ticketActualizado?.id
            ? ticketActualizado
            : t

        );

      });

    },

  });

  return (

    <li
      style={{
        padding: 12,
        marginBottom: 10,
        border: "1px solid #ddd",
        borderRadius: 8,
      }}
    >

      <strong>{ticket.titulo}</strong>

      <p>Prioridad: {ticket.prioridad}</p>

      <p>Estado: {ticket.estado}</p>

      {ticket.estado === "abierto" && (

        <button
          onClick={() => mutation.mutate()}
          disabled={mutation.isPending}
        >
          {mutation.isPending
            ? "Resolviendo..."
            : "Resolver"}
        </button>

      )}

    </li>

  );

}