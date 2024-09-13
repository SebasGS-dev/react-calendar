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
    const [ id, setId ] = useState(0);

    // Cargar eventos del localStorage cuando la aplicación se monta
    useEffect(() => {
        const storedEvents = JSON.parse(localStorage.getItem("events") || "[]");
        setEvents(storedEvents);
    }, []);

    // Función para agregar un nuevo evento
    const addEvent = (newEvent: Event) => {
        setId(prev => prev + 1)
        newEvent.id = id;
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

    // Función para actualizar la fecha de un evento
    const updateEventDate = (updatedEvent: Event, newDate: string) => {
        const updatedEvents = events.map((event) =>
            event === updatedEvent ? { ...event, eventDate: newDate } : event
        );
        setEvents(updatedEvents);
        localStorage.setItem("events", JSON.stringify(updatedEvents));
    };

    // Función para actualizar un evento completo (usada en la página de edición)
    const updateEvent = (updatedEvent: Event) => {
        const updatedEvents = events.map((event) =>
        event.eventName === updatedEvent.eventName ? updatedEvent : event
        );
        setEvents(updatedEvents);
        localStorage.setItem("events", JSON.stringify(updatedEvents));
    };

    return (
        <div className="App p-11">
            <h1 className="text-3xl font-bold text-center mb-10">
                Gestión de Eventos
            </h1>
        <div className="flex flex-row gap-4 w-full">
            <div className="w-full">
                <EventForm addEvent={addEvent} />
            </div>
            <div className="w-full">
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
