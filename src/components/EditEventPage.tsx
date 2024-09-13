import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Definir el tipo de evento
interface Event {
    eventName: string;
    eventDate: string;
    eventDetails: string;
    user: string;
    priority: string;
    id: number;
}

interface EditEventPageProps {
    events: Event[];
    updateEvent: (updatedEvent: Event) => void;
}

const EditEventPage: React.FC<EditEventPageProps> = ({ events, updateEvent }) => {
    const { eventName } = useParams<{ eventName: string }>(); // Obtener el nombre del evento de los parámetros de la URL
    const navigate = useNavigate(); // Para redirigir después de guardar

    // Encontrar el evento que se está editando
    const eventToEdit = events.find((event) => event.eventName === eventName);

    // Estado local para manejar los campos del formulario de edición
    const [updatedEvent, setUpdatedEvent] = useState<Event>(eventToEdit || {
        eventName: "",
        eventDate: "",
        eventDetails: "",
        user: "",
        priority: "",
        id: 0,
    });

  // Manejar cambios en los campos de texto
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setUpdatedEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
    };

    // Manejar el envío del formulario para guardar los cambios
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateEvent(updatedEvent); // Actualizar el evento
        navigate("/"); // Redirigir a la página principal
    };

    return (
        <div className="max-w-md mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Editar Evento: {eventName}</h2>
        {eventToEdit ? (
            <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nombre del Evento */}
            <div>
                <label className="block text-sm font-bold mb-2">Nombre del Evento</label>
                <input
                type="text"
                name="eventName"
                value={updatedEvent.eventName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                disabled
                />
            </div>

            {/* Fecha del Evento */}
            <div>
                <label className="block text-sm font-bold mb-2">Fecha del Evento</label>
                <input
                type="date"
                name="eventDate"
                value={updatedEvent.eventDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
            </div>

            {/* Detalles del Evento */}
            <div>
                <label className="block text-sm font-bold mb-2">Detalles del Evento</label>
                <textarea
                name="eventDetails"
                value={updatedEvent.eventDetails}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
            </div>

            {/* Usuario */}
            <div>
                <label className="block text-sm font-bold mb-2">Usuario</label>
                <select
                name="user"
                value={updatedEvent.user}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                <option value="Juan">Juan</option>
                <option value="Camilo">Camilo</option>
                </select>
            </div>

            {/* Prioridad */}
            <div>
                <label className="block text-sm font-bold mb-2">Prioridad</label>
                <select
                name="priority"
                value={updatedEvent.priority}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                <option value="Muy Alta">Muy Alta</option>
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
                <option value="Baja">Baja</option>
                <option value="Muy Baja">Muy Baja</option>
                </select>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
                Guardar Cambios
            </button>
            </form>
        ) : (
            <p>Evento no encontrado</p>
        )}
        </div>
    );
};

export default EditEventPage;
