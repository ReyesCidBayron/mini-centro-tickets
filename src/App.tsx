import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { obtenerTickets } from "./api/ticketsApi";

import { TicketList } from "./components/TicketList";
import { FiltroTickets } from "./components/FiltroTickets";
import { NuevoTicket } from "./components/NuevoTicket";

import type { FiltroEstado } from "./types/ticket";

function App() {

  const [filtro, setFiltro] = useState<FiltroEstado>("todos");

  const {
    data: tickets = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["tickets"],
    queryFn: obtenerTickets,
  });

  if (isLoading) {
    return <h2>Cargando tickets...</h2>;
  }

  if (isError) {
    return <h2>{(error as Error).message}</h2>;
  }

  const ticketsFiltrados = tickets.filter(ticket => {

    if (filtro === "todos") {
      return true;
    }

    return ticket.estado === filtro;

  });

  console.clear();

  console.log("Filtro:", filtro);

  console.table(tickets);

  console.table(ticketsFiltrados);

  return (

    <main>

      <h1>Mini Centro de Tickets</h1>

      <NuevoTicket />

      <FiltroTickets
        filtro={filtro}
        cambiarFiltro={setFiltro}
      />

      <TicketList tickets={ticketsFiltrados} />

    </main>

  );

}

export default App;