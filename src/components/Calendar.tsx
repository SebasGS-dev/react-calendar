import React from "react";
import { Link } from "react-router-dom";

// Colores basados en la prioridad
const priorityColors: Record <string, string> = {
    "Muy Alta": "bg-red-500",
    "Alta": "bg-orange-500",
    "Media": "bg-yellow-500",
    "Baja": "bg-green-500",
    "Muy Baja": "bg-blue-500",
};

interface Event {   
    eventName: string;
    eventDate: string;
    eventDetails: string;
    user: string;
    priority: string;
    id: number;
}

interface CalendarProps {
    events: Event[];
    deleteEvent: (event: Event) => void;
    updateEventDate: (event: Event, newDate: string) => void;
}

// Generar los días de septiembre de 2024
const generateDaysOfMonth = () => {
    const daysInMonth = 30;
    const daysArray = [];

    for (let day = 1; day <= daysInMonth; day++) {
    daysArray.push(new Date(2024, 8, day)); // 8 es septiembre (el mes es 0 indexado)
    }

    return daysArray;
};

const Calendar: React.FC<CalendarProps> = ({ events, deleteEvent, updateEventDate }) => {
    const daysOfSeptember = generateDaysOfMonth();

    // Función para obtener eventos en un día específico
    const getEventsForDay = (date: Date) => {
        const formattedDate = date.toISOString().split('T')[0];
        return events.filter((event) => event.eventDate === formattedDate);
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-xl font-bold mb-4 text-center">Calendario - Septiembre 2024</h2>

            <div className="grid grid-cols-7 gap-2">
                {/* Cabecera del calendario */}
                <div className="font-bold">Lun</div>
                <div className="font-bold">Mar</div>
                <div className="font-bold">Mié</div>
                <div className="font-bold">Jue</div>
                <div className="font-bold">Vie</div>
                <div className="font-bold">Sáb</div>
                <div className="font-bold">Dom</div>

                {/* Días en blanco para que el 1 de septiembre inicie en el día correcto */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>

                {/* Días del mes */}
                {daysOfSeptember.map((date, index) => (
                    <div key={index} className="border border-gray-300 p-2 rounded-md relative">
                        <div className="text-center font-bold">{date.getDate()}</div>

                        {/* Renderizar los eventos correspondientes a este día */}
                        {getEventsForDay(date).map((event, eventIndex) => (
                            <div key={eventIndex} className={`mt-2 p-2 text-white rounded-md ${priorityColors[event.priority]}`}>
                                <p className="font-bold">{event.eventName}</p>
                                <p className="text-sm">{event.user}</p>

                                {/* Campo para editar la fecha del evento */}
                                <input
                                type="date"
                                value={event.eventDate}
                                onChange={(e) => updateEventDate(event, e.target.value)}
                                className="mt-2 w-full bg-gray-200 p-2 rounded-md"
                                />

                                {/* Botones de editar y borrar */}
                                <div className="mt-2 flex justify-between">
                                <Link to={`/edit/${event.id}`} className="bg-yellow-400 text-black px-2 py-1 rounded">
                                    Editar
                                </Link>
                                    <button className="bg-red-600 px-2 py-1 rounded" onClick={() => deleteEvent(event)}>Borrar</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
