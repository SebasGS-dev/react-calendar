import { useState, useEffect, ChangeEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
    events: Event[]; // Los eventos son pasados como props
    updateEvent: (updatedEvent: Event) => void; // La función de actualización también es pasada como prop
}

const EditEventPage = ({ events, updateEvent }: EditEventPageProps) => {
    const { id } = useParams<{ id: string }>(); // Obtener el ID del evento desde la URL
    const navigate = useNavigate();
    const [event, setEvent] = useState<Event | null>(null);
    const [formData, setFormData] = useState<Event>({
        eventName: "",
        eventDate: "",
        eventDetails: "",
        user: "",
        priority: "",
        id: 0,
    });

    // Buscar el evento por su ID y cargarlo en el formulario
    useEffect(() => {
        const eventToEdit = events.find(event => event.id === parseInt(id || "0", 10));
        if (eventToEdit) {
            setEvent(eventToEdit);
            setFormData(eventToEdit);
        }
    }, [id, events]);

    
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    // Función para guardar los cambios del evento editado
    const handleSave = () => {
        if (!formData) return;

        updateEvent(formData);
        navigate("/"); // Navegar de vuelta a la página principal después de guardar
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Editar Evento</h2>
            {formData ? (
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="eventName"
                        value={formData.eventName}
                        onChange={handleChange}
                        placeholder="Nombre del Evento"
                        className="p-2 border rounded"
                    />
                    <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="p-2 border rounded"
                    />
                    <textarea
                        name="eventDetails"
                        value={formData.eventDetails}
                        onChange={handleChange}
                        placeholder="Detalles del Evento"
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="user"
                        value={formData.user}
                        onChange={handleChange}
                        placeholder="Usuario"
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        placeholder="Prioridad"
                        className="p-2 border rounded"
                    />
                    <button
                        onClick={handleSave}
                        className="p-2 bg-blue-500 text-white rounded"
                    >
                        Guardar Cambios
                    </button>
                </div>
            ) : (
                <p>Cargando evento...</p>
            )}
        </div>
    );
};

export default EditEventPage;
