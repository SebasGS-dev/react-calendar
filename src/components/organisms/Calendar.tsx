import CalendarGrid from '../organisms/CalendarGrid';

interface Event {
    eventName: string;
    eventDate: string;
    eventDetails: string;
    user: string;
    priority: string;
    id: number;
}

interface CalendarProps {
    events: Event[]; // Debe ser un array de eventos
    deleteEvent: (event: Event) => void; // Una función que recibe un evento y no retorna nada
    updateEventDate: (event: Event, newDate: string) => void; // Una función que actualiza la fecha del evento
}

// Colores basados en la prioridad
const priorityColors: Record <string, string> = {
    "Muy Alta": "bg-red-500",
    "Alta": "bg-orange-500",
    "Media": "bg-yellow-500",
    "Baja": "bg-green-500",
    "Muy Baja": "bg-blue-500",
};

const generateDaysOfMonth = () => {
    const daysInMonth = 30;
    const daysArray = [];
    for (let day = 1; day <= daysInMonth; day++) {
        daysArray.push(new Date(2024, 8, day)); // 8 es septiembre (el mes es 0 indexado)
    }
    return daysArray;
};

const Calendar = ({ events, deleteEvent, updateEventDate }: CalendarProps) => {
    const daysOfSeptember = generateDaysOfMonth();

    const getEventsForDay = (date: Date) => {
        const formattedDate = date.toISOString().split('T')[0];
        return events.filter((event) => event.eventDate === formattedDate).map(event => ({
            eventName: event.eventName,
            user: event.user,
            priorityColor: priorityColors[event.priority],
            eventDate: event.eventDate,
            editLink: `/edit/${event.id}`,
            onDateChange: (newDate:string) => updateEventDate(event, newDate),
            onDelete: () => deleteEvent(event)
        }));
    };

    return (
        <CalendarGrid daysOfSeptember={daysOfSeptember} getEventsForDay={getEventsForDay} />
    );
};

export default Calendar;
