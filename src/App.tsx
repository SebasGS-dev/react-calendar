import React, { useState, useEffect } from "react"
import EventForm from "./components/EventForm";
import Calendar from "./components/Calendar";

// Definir el tipo de evento
interface Event {
  eventName: string;
  eventDate: string;
  eventDetails: string;
  user: string;
  priority: string;
}

const App: React.FC = () => {
  // Estado para manejar los eventos
  const [events, setEvents] = useState<Event[]>([]);

  // Cargar eventos del localStorage cuando la aplicación se monta
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events") || "[]");
    setEvents(storedEvents);
  }, []);

  // Función para agregar un nuevo evento
  const addEvent = (newEvent: Event) => {
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  // Función para borrar un evento
  const deleteEvent = (eventToDelete: Event) => {
    const updatedEvents = events.filter((event) => event !== eventToDelete);
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  return (
    <div className="App p-11">
      <h1 className="text-3xl font-bold text-center mb-10">Gestión de Eventos</h1>
        <div className="flex flex-row gap-4 w-full">
          <div className="w-full">
            <EventForm addEvent={addEvent} />
          </div>
          <div className="w-full">
            <Calendar events={events} deleteEvent={deleteEvent} />
          </div>
      </div>
    </div>
  );
};

export default App;
