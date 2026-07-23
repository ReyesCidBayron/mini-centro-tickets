// Posibles prioridades de un ticket.
export type Prioridad = "alta" | "media" | "baja";

// Posibles estados de un ticket.
export type Estado = "abierto" | "cerrado";

// Opciones disponibles para filtrar tickets.
export type FiltroEstado = "todos" | "abierto" | "cerrado";

// Modelo principal del ticket.
export interface Ticket {
  id: number;
  titulo: string;
  prioridad: Prioridad;
  estado: Estado;
}