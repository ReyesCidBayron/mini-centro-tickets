import type { Ticket } from "../types/ticket";

// Base de datos simulada.
export let tickets: Ticket[] = [
  {
    id: 1,
    titulo: "No funciona Internet",
    prioridad: "alta",
    estado: "abierto",
  },
  {
    id: 2,
    titulo: "La impresora no imprime",
    prioridad: "media",
    estado: "cerrado",
  },
  {
    id: 3,
    titulo: "Pantalla azul al iniciar",
    prioridad: "alta",
    estado: "abierto",
  },
  {
    id: 4,
    titulo: "Actualizar Windows",
    prioridad: "baja",
    estado: "cerrado",
  },
  {
    id: 5,
    titulo: "Error al iniciar sesión",
    prioridad: "media",
    estado: "abierto",
  },
];