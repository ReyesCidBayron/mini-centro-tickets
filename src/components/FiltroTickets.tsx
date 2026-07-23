import type { FiltroEstado } from "../types/ticket";

interface Props {
  filtro: FiltroEstado;
  cambiarFiltro: (filtro: FiltroEstado) => void;
}

export function FiltroTickets({
  filtro,
  cambiarFiltro,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      <button
        onClick={() => cambiarFiltro("todos")}
        disabled={filtro === "todos"}
      >
        Todos
      </button>
      <button
        onClick={() => cambiarFiltro("abierto")}
        disabled={filtro === "abierto"}
      >
        Abiertos
      </button>
      <button
        onClick={() => cambiarFiltro("cerrado")}
        disabled={filtro === "cerrado"}
      >
        Cerrados
      </button>
    </div>
  );
}