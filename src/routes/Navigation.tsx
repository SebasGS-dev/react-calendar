import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import MainApp from "../components/MainApp"
import EditEventPage from "../components/EditEventPage"
import { useState } from "react";

// Definir el tipo de evento
interface Event {
    eventName: string;
    eventDate: string;
    eventDetails: string;
    user: string;
    priority: string;
    id: number;
}

const Navigation = () => {
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

    // Función para actualizar un evento
    const updateEvent = (updatedEvent: Event) => {
        const updatedEvents = events.map((event) =>
            event.id === updatedEvent.id ? updatedEvent : event
        );
        setEvents(updatedEvents);
    };
    
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<MainApp events={events} deleteEvent={deleteEvent} updateEventDate={updateEventDate} addEvent={addEvent}/>}
                />

                {/* Ruta para la página de edición */}
                <Route
                    path="/edit/:id"
                    element={<EditEventPage events={events} updateEvent={updateEvent}/>}
                />

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
        
    )
}

export default Navigation