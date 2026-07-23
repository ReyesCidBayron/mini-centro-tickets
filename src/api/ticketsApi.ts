import { tickets } from "../mocks/tickets";

import { ticketSchema } from "../schemas/ticketSchema";

import type {
  Ticket,
  Prioridad
} from "../types/ticket";


function delay(ms: number) {

  return new Promise(resolve =>
    setTimeout(resolve, ms)
  );

}


export async function obtenerTickets(): Promise<Ticket[]> {

  await delay(1000);


  const ticketsValidados =
    ticketSchema
      .array()
      .parse(tickets);


  return ticketsValidados.map(ticket => ({
    ...ticket,
  }));

}



export async function crearTicket(
  titulo: string,
  prioridad: Prioridad
): Promise<Ticket> {

  await delay(1000);


  const nuevo: Ticket = {

    id: Date.now(),

    titulo,

    prioridad,

    estado: "abierto",

  };


  tickets.push(nuevo);


  return {
    ...nuevo,
  };

}



export async function resolverTicket(
  id: number
): Promise<Ticket> {

  await delay(1000);


  const indice =
    tickets.findIndex(
      ticket => ticket.id === id
    );


  if (indice === -1) {

    throw new Error(
      "Ticket no encontrado"
    );

  }


  const actualizado: Ticket = {

    ...tickets[indice],

    estado: "cerrado",

  };


  tickets[indice] = actualizado;


  return {
    ...actualizado,
  };

}