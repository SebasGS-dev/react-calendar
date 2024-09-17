import  { useState, useEffect } from "react";
import EventForm from "./EventForm";
import Calendar from "./Calendar";

// Definir el tipo de evento
interface Event {
    eventName: string;
    eventDate: string;
    eventDetails: string;
    user: string;
    priority: string;
    id: number;
}

const MainApp = () => {
    // Estado para manejar los eventos
    const [events, setEvents] = useState<Event[]>([]);
    const [id, setId] = useState<number>(0)

    // Función para agregar un nuevo evento
    const addEvent = (newEvent: Event) => {
        const newId = id + 1;
        setId(newId);
        newEvent.id = newId;
        const updatedEvents = [...events, newEvent];
        setEvents(updatedEvents);
    };

     // Función para borrar un evento
    const deleteEvent = (eventToDelete: Event) => {
        const updatedEvents = events.filter((event) => event !== eventToDelete);
        setEvents(updatedEvents);
    };

    // Función para actualizar la fecha de un evento
    const updateEventDate = (updatedEvent: Event, newDate: string) => {
        const updatedEvents = events.map((event) =>
            event === updatedEvent ? { ...event, eventDate: newDate } : event
        );
        setEvents(updatedEvents);
    };

    return (
        <div className="App p-11">
            <h1 className="text-3xl font-bold text-center mb-10">
                Gestión de Eventos
            </h1>
            <div className="flex flex-row gap-4 w-full">
                {/* Columna izquierda (Formulario) */}
                <div className="w-1/3">
                    <EventForm addEvent={addEvent} />
                </div>

                {/* Columna derecha (Calendario) */}
                <div className="w-2/3">
                    <Calendar
                        events={events}
                        deleteEvent={deleteEvent}
                        updateEventDate={updateEventDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default MainApp;
