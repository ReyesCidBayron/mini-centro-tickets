import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { crearTicket } from "../api/ticketsApi";
import type { Ticket, Prioridad } from "../types/ticket";

export function NuevoTicket() {

  const [titulo, setTitulo] = useState("");
  const [prioridad, setPrioridad] = useState<Prioridad>("media");

  const queryClient = useQueryClient();

  const mutation = useMutation({

    mutationFn: () => crearTicket(titulo, prioridad),

    onSuccess: (nuevoTicket) => {

      queryClient.setQueryData<Ticket[]>(["tickets"], (tickets = []) => [

        ...tickets,

        nuevoTicket,

      ]);

      setTitulo("");
      setPrioridad("media");

    },

  });

  function handleSubmit(e: React.FormEvent) {

    e.preventDefault();

    if (titulo.trim() === "") return;

    mutation.mutate();

  }

  return (

    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: 10,
        marginBottom: 20,
      }}
    >

      <input
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título"
      />

      <select
        value={prioridad}
        onChange={(e) =>
          setPrioridad(e.target.value as Prioridad)
        }
      >
        <option value="alta">Alta</option>
        <option value="media">Media</option>
        <option value="baja">Baja</option>
      </select>

      <button
        disabled={mutation.isPending}
      >
        {mutation.isPending
          ? "Creando..."
          : "Crear"}
      </button>

    </form>

  );

}