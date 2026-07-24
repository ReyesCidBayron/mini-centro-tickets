# Mini Centro de Tickets

Aplicación web desarrollada como proyecto transversal del curso Frontend.

El objetivo de la aplicación es gestionar tickets de soporte mediante un MVP construido con React + TypeScript, utilizando datos simulados como si fueran obtenidos desde una API real.

---

## Demo

URL pública:

https://mini-centro-tickets.vercel.app/

---

## Funcionalidades

La aplicación permite:

- Visualizar una lista de tickets.
- Mostrar información del ticket:
  - ID.
  - Título.
  - Prioridad.
  - Estado.
- Filtrar tickets por estado:
  - Todos.
  - Abiertos.
  - Cerrados.
- Crear nuevos tickets.
- Marcar tickets abiertos como resueltos.
- Mostrar estados de carga mientras se obtienen datos.
- Mostrar errores cuando ocurre un problema.
- Validar la estructura de datos recibidos mediante Zod.

---

# Tecnologías utilizadas

## Frontend

- React 19
- TypeScript
- Vite

## Manejo de datos

- TanStack Query

Utilizado para:

- Obtener datos.
- Manejar estados de carga.
- Manejar errores.
- Ejecutar mutaciones.
- Actualizar la información después de crear o resolver tickets.

## Validación

- Zod

Utilizado para validar que los datos provenientes del mock cumplen con el modelo esperado de Ticket.

## Testing

- Vitest

Utilizado para probar funciones puras de la aplicación.

---

# Estructura del proyecto

```
src
│
├── api
│   └── ticketsApi.ts
│
├── components
│   ├── FiltroTickets.tsx
│   ├── NuevoTicket.tsx
│   ├── TicketCard.tsx
│   └── TicketList.tsx
│
├── mocks
│   └── tickets.ts
│
├── schemas
│   └── ticketSchema.ts
│
├── tests
│   └── validarTitulo.test.ts
│
├── types
│   └── ticket.ts
│
├── utils
│   └── validarTitulo.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

---

# Arquitectura

La aplicación está organizada separando responsabilidades:

## Components

Contienen únicamente la lógica relacionada con la interfaz.

Ejemplo:

- Mostrar tickets.
- Mostrar filtros.
- Mostrar formularios.

---

## API

La carpeta `api` contiene las funciones encargadas de simular una comunicación con un backend.

Incluye:

- Obtener tickets.
- Crear tickets.
- Resolver tickets.

Las operaciones utilizan una demora artificial mediante `setTimeout` para simular latencia de red.

---

## TanStack Query

La gestión de datos se realiza mediante React Query.

Se utiliza para:

- Consultas con `useQuery`.
- Mutaciones con `useMutation`.
- Actualización de cache después de cambios.

---

## Mock de datos

Los tickets se almacenan inicialmente en un arreglo local:

```
src/mocks/tickets.ts
```

Este comportamiento simula una fuente externa de datos sin necesidad de implementar un backend real.

---

## Validación con Zod

Los datos recibidos desde el mock son validados antes de ser utilizados por la aplicación.

Esto evita trabajar con estructuras incorrectas y mantiene la seguridad de tipos.

---

# Modelo de datos

Cada ticket posee:

```ts
interface Ticket {
  id: number;
  titulo: string;
  prioridad: "alta" | "media" | "baja";
  estado: "abierto" | "cerrado";
}
```

---

# Instalación

Clonar repositorio:

```bash
git clone https://github.com/ReyesCidBayron/mini-centro-tickets.git
```

Ingresar al proyecto:

```bash
cd mini-centro-tickets
```

Instalar dependencias:

```bash
npm install
```

---

# Ejecutar en desarrollo

Iniciar servidor local:

```bash
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

---

# Ejecutar pruebas

Para ejecutar los tests:

```bash
npm run test
```

---

# Construcción para producción

Generar build:

```bash
npm run build
```

El resultado será generado en:

```
dist/
```

---

# Decisiones técnicas

## Uso de TanStack Query

Se decidió utilizar TanStack Query porque permite trabajar con datos externos siguiendo patrones similares a una aplicación conectada a un backend real.

Aunque los datos provienen de un mock, la estructura permite reemplazarlo posteriormente por una API sin modificar los componentes.

---

## Uso de TypeScript

Se utilizaron tipos estrictos para evitar errores y mantener consistencia entre componentes, servicios y datos.

---

## Uso de Zod

Se agregó validación de datos para evitar confiar directamente en la información proveniente de fuentes externas.

---

## Separación de componentes

Los componentes fueron divididos por responsabilidad para mantener código mantenible y fácil de extender.

---

# Fuera del alcance

Este proyecto no incluye:

- Backend real.
- Sistema de autenticación.
- Base de datos.
- Gestión de usuarios.
- Roles o permisos.

Estas funcionalidades quedan fuera del alcance del MVP inicial.

---

# Autor

Proyecto desarrollado como parte del curso Frontend.
