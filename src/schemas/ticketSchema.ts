import { z } from "zod";

export const ticketSchema = z.object({
  id: z.number(),
  titulo: z.string(),
  prioridad: z.enum([
    "alta",
    "media",
    "baja",
  ]),
  estado: z.enum([
    "abierto",
    "cerrado",
  ]),
});