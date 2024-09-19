import { Link } from "react-router-dom";
import { Paper, Typography, Button, TextField, Box } from '@mui/material';

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

const Calendar = ({ events, deleteEvent, updateEventDate }: CalendarProps) => {
    const daysOfSeptember = generateDaysOfMonth();

    // Función para obtener eventos en un día específico
    const getEventsForDay = (date: Date) => {
        const formattedDate = date.toISOString().split('T')[0];
        return events.filter((event) => event.eventDate === formattedDate);
    };

    return (
        <Box sx={{ maxWidth: 'xl', p: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Calendario - Septiembre 2024
            </Typography>

            {/* Cabecera del calendario */}
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2, mb: 2 }}>
                {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((day, index) => (
                <Typography key={index} variant="subtitle1" fontWeight="bold" align="center">
                    {day}
                </Typography>
                ))}
            </Box>

            {/* Días del mes (iniciando con los espacios en blanco) */}
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2 }}>
                {/* Días en blanco para que el 1 de septiembre inicie en el día correcto */}
                {[...Array(6)].map((_, index) => (
                    <Box key={index} />
                ))}

                {/* Días del mes */}
                {daysOfSeptember.map((date, index) => (
                    <Paper key={index} variant="outlined" sx={{ p: 2, borderRadius: 2, position: 'relative' }}>
                        <Typography variant="h6" align="center" fontWeight="bold">
                            {date.getDate()}
                        </Typography>

                        {/* Renderizar los eventos correspondientes a este día */}
                        {getEventsForDay(date).map((event, eventIndex) => (
                            <Box key={eventIndex} sx={{ mt: 2, p: 1, borderRadius: 2, backgroundColor: priorityColors[event.priority], color: 'black' }}>
                                <Typography variant="subtitle2" fontWeight="bold">
                                    {event.eventName}
                                </Typography>
                                <Typography variant="body2">{event.user}</Typography>

                                {/* Campo para editar la fecha del evento */}
                                    <TextField
                                        type="date"
                                        value={event.eventDate}
                                        onChange={(e) => updateEventDate(event, e.target.value)}
                                        fullWidth
                                        sx={{ mt: 2, bgcolor: 'grey.200', borderRadius: 2 }}
                                    />

                                {/* Botones de editar y borrar */}
                                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                                    <Button
                                        component={Link}
                                        to={`/edit/${event.id}`}
                                        size="small"
                                        variant="contained"
                                        sx={{ bgcolor: 'yellow', color: 'black' }}
                                    >
                                        Editar
                                    </Button>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        color="error"
                                        onClick={() => deleteEvent(event)}
                                    >
                                        Borrar
                                    </Button>
                                </Box>
                            </Box>
                        ))}
                    </Paper>
                ))}
            </Box>
        </Box>
    );
};

export default Calendar;
